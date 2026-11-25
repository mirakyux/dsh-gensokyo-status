import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

function loadClient() {
  let plugin;
  const storage = new Map();
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
  assert.equal(visible.nodeValue, LABELS.lifespan);
  assert.equal(assistive.nodeValue, LABELS.lifespan);
  assert.equal(highlight.value, LABELS.lifespan);
  assert.equal(whitespace.nodeValue, '  ');
  visible.nodeValue = '深度求索中，用时 4 秒 ···';
  rewriteRunning(container, LABELS.praying);
  restoreContainer(container);
  assert.equal(visible.nodeValue, '深度求索中，用时 4 秒 ···');
  assert.equal(assistive.nodeValue, '深度求索中');
  assert.equal(highlight.value, '深度求索中，用时 3 秒 ···');
});

test('replaces the DS Bot caption while preserving its elapsed time', () => {
  const { rewriteRunning, LABELS } = loadClient().__internals;
  const caption = text('权衡一下…');
  const elapsed = text('· 1s');
  const container = {
    matches(selector) { return selector === '.bt-typing'; },
    querySelectorAll(selector) {
      assert.equal(selector, '.bt-typing-label > .bt-shimmer');
      return [statusRoot(caption)];
    },
    childNodes: [statusRoot(caption), statusRoot(elapsed)],
  };
  rewriteRunning(container, LABELS.praying);
  assert.equal(caption.nodeValue, LABELS.praying);
  assert.equal(elapsed.nodeValue, '· 1s');
});

test('replaces the native process title only while its shimmer is active', () => {
  const { rewriteRunning, LABELS } = loadClient().__internals;
  const active = text('正在分析请求');
  const settled = text('已完成分析');
  const title = value => ({
    matches(selector) { return selector === '[data-process-activity]'; },
    querySelectorAll(selector) {
      assert.equal(selector, ':scope > [data-shimmer]');
      return value === active ? [statusRoot(value)] : [];
    },
  });
  rewriteRunning(title(active), LABELS.praying);
  rewriteRunning(title(settled), LABELS.praying);
  assert.equal(active.nodeValue, LABELS.praying);
  assert.equal(settled.nodeValue, '已完成分析');
});

test('renders a three-way mode selector', () => {
  const plugin = loadClient();
  const control = plugin.ModeControl();
  const select = control.children[1];
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
