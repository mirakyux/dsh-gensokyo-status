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

test('rewrites visible and assistive text without touching whitespace', () => {
  const { rewriteRunning, LABELS } = loadClient().__internals;
  const visible = text('深度求索中，用时 3 秒 ···');
  const assistive = text('深度求索中');
  const whitespace = text('  ');
  const attributes = {};
  const container = {
    childNodes: [
      { nodeType: 1, childNodes: [visible] },
      whitespace,
      { nodeType: 1, childNodes: [assistive] },
    ],
    setAttribute(name, value) { attributes[name] = value; },
  };

  assert.equal(rewriteRunning(container, LABELS.lifespan), 2);
  assert.equal(visible.nodeValue, LABELS.lifespan);
  assert.equal(assistive.nodeValue, LABELS.lifespan);
  assert.equal(whitespace.nodeValue, '  ');
  assert.equal(attributes['data-gensokyo-status'], LABELS.lifespan);
  assert.equal(rewriteRunning(container, LABELS.lifespan), 0);
});

test('renders a three-way mode selector', () => {
  const plugin = loadClient();
  const control = plugin.ModeControl();
  const select = control.children[0];
  assert.equal(select.type, 'select');
  assert.equal(select.props['aria-label'], '幻想乡运行状态');
  assert.deepEqual(Array.from(select.children, option => option.children[0]), [
    '随机',
    '少女祈祷中',
    '少女折寿中',
  ]);
});
