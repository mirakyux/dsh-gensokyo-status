import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

function loadClient(saved = [], hooks = {}) {
  let plugin;
  const storage = saved instanceof Map ? saved : new Map(saved);
  const document = {
    nodeType: 9,
    childNodes: [],
    documentElement: {},
    head: { appendChild() {} },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    createElement() { return { dataset: {}, textContent: '' }; },
  };
  const React = {
    createElement(type, props, ...children) { return { type, props: props || {}, children }; },
    useSyncExternalStore(_subscribe, getSnapshot) { return getSnapshot(); },
    useState(initial) { return [typeof initial === 'function' ? initial() : initial, () => {}]; },
    ...hooks,
  };
  const sandbox = {
    console,
    document,
    module: { exports: {} },
    MutationObserver: class {},
    window: {
      localStorage: {
        getItem(key) { return storage.get(key) ?? null; },
        setItem(key, value) { storage.set(key, value); },
      },
      __ModuleLoader__: {
        load(definition) {
          plugin = definition.factory(name => {
            assert.equal(name, 'react');
            return React;
          });
        },
      },
    },
  };
  vm.runInNewContext(fs.readFileSync(new URL('../lib/client.js', import.meta.url), 'utf8'), sandbox);
  return plugin;
}

function text(value) {
  return { nodeType: 3, nodeValue: value, childNodes: [] };
}

test('ships an icon within the desktop plugin manager size limit', () => {
  const manifest = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url)));
  const icon = fs.statSync(new URL(`../${manifest.icon}`, import.meta.url));
  assert.ok(icon.size <= 256 * 1024, `icon is ${icon.size} bytes`);
});

test('normalizes unknown values to random', () => {
  const { normalizeMode, MODES } = loadClient().__internals;
  assert.equal(normalizeMode('praying'), MODES.praying);
  assert.equal(normalizeMode('lifespan'), MODES.lifespan);
  assert.equal(normalizeMode('anything-else'), MODES.random);
});

test('chooses each configured status and both random branches', () => {
  const { chooseLabel, LABELS } = loadClient().__internals;
  assert.equal(chooseLabel('praying'), LABELS.praying);
  assert.equal(chooseLabel('lifespan'), LABELS.lifespan);
  assert.equal(chooseLabel('random', () => 0.49), LABELS.praying);
  assert.equal(chooseLabel('random', () => 0.5), LABELS.lifespan);
});

test('keeps a random choice stable for one running container', () => {
  const { createLabelSelector, LABELS } = loadClient().__internals;
  const values = [0.1, 0.9];
  const selector = createLabelSelector(() => values.shift());
  const container = {};
  assert.equal(selector.forContainer(container, 'random'), LABELS.praying);
  assert.equal(selector.forContainer(container, 'random'), LABELS.praying);
  selector.reset();
  assert.equal(selector.forContainer(container, 'random'), LABELS.lifespan);
});

function statusRoot(...childNodes) {
  return {
    nodeType: 1,
    childNodes,
    querySelectorAll() { return childNodes.filter(node => node.getAttribute); },
  };
}

test('updates native visible, highlighted and assistive text, then restores it', () => {
  const { rewriteRunning, restoreContainer, LABELS } = loadClient().__internals;
  const visible = text('深度求索中，用时 3 秒 ···');
  const assistive = text('深度求索中');
  const whitespace = text('  ');
  const highlight = {
    nodeType: 1,
    value: visible.nodeValue,
    getAttribute() { return this.value; },
    setAttribute(_name, value) { this.value = value; },
  };
  const container = {
    matches() { return false; },
    querySelectorAll() { return [statusRoot(visible, highlight, whitespace), statusRoot(assistive)]; },
  };

  rewriteRunning(container, LABELS.lifespan);
  assert.equal(visible.nodeValue, '少女折寿中，用时 3 秒…');
  assert.equal(assistive.nodeValue, '少女折寿中…');
  assert.equal(highlight.value, '少女折寿中，用时 3 秒…');
  assert.equal(whitespace.nodeValue, '  ');
  visible.nodeValue = '深度求索中，用时 4 秒 ···';
  rewriteRunning(container, LABELS.praying);
  restoreContainer(container);
  assert.equal(visible.nodeValue, '深度求索中，用时 4 秒 ···');
  assert.equal(assistive.nodeValue, '深度求索中');
  assert.equal(highlight.value, '深度求索中，用时 3 秒 ···');
});

test('adds an ellipsis and toggles the separate DS Bot clock', () => {
  const plugin = loadClient();
  const { rewriteRunning, restoreContainer, LABELS } = plugin.__internals;
  const caption = text('权衡一下…');
  const elapsed = text('· 1s');
  const attributes = new Set();
  const container = {
    matches(selector) { return selector === '.bt-typing'; },
    querySelectorAll(selector) {
      assert.equal(selector, '.bt-typing-label > .bt-shimmer');
      return [statusRoot(caption)];
    },
    toggleAttribute(key, present) {
      if (present) attributes.add(key);
      else attributes.delete(key);
    },
    removeAttribute(key) { attributes.delete(key); },
    childNodes: [statusRoot(caption), statusRoot(elapsed)],
  };
  rewriteRunning(container, LABELS.praying);
  assert.equal(caption.nodeValue, '少女祈祷中…');
  assert.equal(elapsed.nodeValue, '· 1s');
  assert.equal(attributes.has('data-gensokyo-hide-time'), false);
  plugin.ModeControl().children[1].children[0].props.onChange({ target: { checked: false } });
  rewriteRunning(container, LABELS.praying);
  assert.equal(attributes.has('data-gensokyo-hide-time'), true);
  restoreContainer(container);
  assert.equal(caption.nodeValue, '权衡一下…');
  assert.equal(attributes.has('data-gensokyo-hide-time'), false);
});

test('formats a host duration with one trailing ellipsis', () => {
  const { formatCaption } = loadClient().__internals;
  assert.equal(formatCaption('少女祈祷中', '深度求索中，用时8分22秒···', true), '少女祈祷中，用时 8分22秒…');
  assert.equal(formatCaption('少女祈祷中', 'Deep diving for 1h 8m 22s ···', true), '少女祈祷中，用时 1h 8m 22s…');
  assert.equal(formatCaption('少女祈祷中', '深度求索中，用时8分22秒···', false), '少女祈祷中…');
  assert.equal(formatCaption('少女祈祷中', '深度求索中', true), '少女祈祷中…');
});

test('hiding then showing elapsed time preserves the latest host tick', () => {
  const plugin = loadClient();
  const { rewriteRunning, LABELS } = plugin.__internals;
  const visible = text('深度求索中，用时8分22秒···');
  const container = {
    matches() { return false; },
    querySelectorAll() { return [statusRoot(visible)]; },
  };
  const setTime = checked => plugin.ModeControl().children[1].children[0].props.onChange({ target: { checked } });
  rewriteRunning(container, LABELS.praying);
  setTime(false);
  visible.nodeValue = '深度求索中，用时8分23秒···';
  rewriteRunning(container, LABELS.praying);
  assert.equal(visible.nodeValue, '少女祈祷中…');
  setTime(true);
  rewriteRunning(container, LABELS.praying);
  assert.equal(visible.nodeValue, '少女祈祷中，用时 8分23秒…');
});

test('keeps saved caption modes and defaults the new time setting to on', () => {
  const plugin = loadClient([['dsh-gensokyo-status:mode', 'lifespan']]);
  const control = plugin.ModeControl();
  assert.equal(control.children[0].children[1].props.value, 'lifespan');
  assert.equal(control.children[1].children[0].props.checked, true);
  const savedOff = loadClient([['dsh-gensokyo-status:show-time', 'false']]);
  assert.equal(savedOff.ModeControl().children[1].children[0].props.checked, false);
});

test('renders a three-way mode selector', () => {
  const plugin = loadClient();
  const control = plugin.ModeControl();
  const select = control.children[0].children[1];
  assert.equal(select.type, 'select');
  assert.equal(select.props['aria-label'], '幻想乡运行状态');
  assert.deepEqual(Array.from(select.children, option => option.children[0]), [
    '随机',
    '少女祈祷中',
    '少女折寿中',
  ]);
});

test('registers the mode selector in the shared DSH settings', () => {
  const plugin = loadClient();
  plugin.apply({
    effect() {},
    slots: {
      inject(name, register) {
        assert.equal(name, 'settings.section');
        register();
      },
      register(options, component) {
        assert.equal(options.name, 'settings.section');
        assert.equal(options.id, 'gensokyo-status');
        assert.equal(options.label, '幻想乡运行状态');
        assert.equal(component, plugin.ModeControl);
      },
    },
  });
});

function findElements(node, predicate) {
  if (!node || typeof node !== 'object') return [];
  if (typeof node.type === 'function') return findElements(node.type(node.props), predicate);
  const matches = predicate(node) ? [node] : [];
  for (const child of node.children.flat(Infinity)) matches.push(...findElements(child, predicate));
  return matches;
}

function characterControl(plugin) {
  const [select] = findElements(plugin.ModeControl(), node => node.props['aria-label'] === '运行角色');
  assert.equal(select?.type, 'select');
  return select;
}

test('lists each catalog character exactly once as a selectable option', () => {
  const plugin = loadClient();
  const { CHARACTERS } = plugin.__internals;
  const options = findElements(characterControl(plugin), node => node.type === 'option');
  const ids = Array.from(CHARACTERS, entry => entry.id);
  assert.ok(ids.length > 1);
  assert.equal(new Set(ids).size, ids.length);
  assert.deepEqual(options.map(option => option.props.value).sort(), ['random', ...ids].sort());
  assert.equal(characterControl(plugin).props.value, 'random');
  assert.ok(options.some(option => option.children.includes('魂魄妖梦')));
});

test('saves the selected character independently of caption and time, including after reloading', () => {
  const saved = new Map([['dsh-gensokyo-status:mode', 'lifespan'], ['dsh-gensokyo-status:show-time', 'false']]);
  const plugin = loadClient(saved);
  const selected = plugin.__internals.CHARACTERS[0].id;
  characterControl(plugin).props.onChange({ target: { value: selected } });
  assert.equal(characterControl(plugin).props.value, selected);
  assert.equal(characterControl(loadClient(saved)).props.value, selected);
  assert.equal(saved.get('dsh-gensokyo-status:mode'), 'lifespan');
  assert.equal(saved.get('dsh-gensokyo-status:show-time'), 'false');
  plugin.ModeControl().children[0].children[1].props.onChange({ target: { value: 'praying' } });
  plugin.ModeControl().children[1].children[0].props.onChange({ target: { checked: true } });
  assert.equal(characterControl(plugin).props.value, selected);
  saved.set('dsh-gensokyo-status:character', 'removed-character');
  assert.equal(characterControl(loadClient(saved)).props.value, 'random');
});

test('draws from the whole catalog once per run, across the native and bot renderers', () => {
  const { CHARACTERS, createCharacterSelector } = loadClient().__internals;
  const samples = [0, 1 - Number.EPSILON];
  const selector = createCharacterSelector(() => {
    assert.ok(samples.length, 'unexpected reroll');
    return samples.shift();
  });
  const bot = {};
  const native = {};
  const first = CHARACTERS[0].id;
  const last = CHARACTERS.at(-1).id;
  assert.equal(selector.forContainer(bot, 'random'), first);
  assert.equal(selector.forContainer(native, 'random', bot), first);
  assert.equal(selector.forContainer(native, 'random'), first);
  assert.equal(selector.forContainer(native, last), last);
  assert.equal(selector.forContainer({}, 'random'), last);
  assert.equal(samples.length, 0);
});

test('filters the roster by name, work or motif and keeps the fixed choice visible', () => {
  const { CHARACTERS } = loadClient().__internals;
  const fixed = CHARACTERS.find(entry => entry.name === '魂魄妖梦');
  const other = CHARACTERS.find(entry => entry.group !== fixed.group && entry.motif !== fixed.motif);
  let query = '';
  const plugin = loadClient([['dsh-gensokyo-status:character', fixed.id]], {
    useState(initial) {
      return typeof initial === 'function' ? [initial(), () => {}]
        : [query, value => { query = value; }];
    },
  });
  const search = value => {
    const [input] = findElements(plugin.ModeControl(), node => node.props['aria-label'] === '搜索角色');
    input.props.onChange({ target: { value } });
    return findElements(characterControl(plugin), node => node.type === 'option').map(option => option.props.value);
  };
  for (const term of [other.name, other.group, other.motif]) {
    const ids = search(term);
    assert.ok(ids.includes(other.id));
    assert.ok(ids.includes(fixed.id));
  }
  assert.deepEqual(search('no-such-character-999'), ['random', fixed.id]);
  assert.equal(characterControl(plugin).props.value, fixed.id);
});
