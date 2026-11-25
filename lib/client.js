window.__ModuleLoader__.load({
  id: 'dsh-gensokyo-status',
  factory: require => {
    const module = { exports: {} };
    const exports = module.exports;
    const React = require('react');
    const h = React.createElement;

    const STORAGE_KEY = 'dsh-gensokyo-status:mode';
    const RUNNING_SELECTOR = '[data-chat-running]';
    const MODES = Object.freeze({
      random: 'random',
      praying: 'praying',
      lifespan: 'lifespan',
    });
    const LABELS = Object.freeze({
      praying: '少女祈祷中',
      lifespan: '少女折寿中',
    });
    const MODE_OPTIONS = Object.freeze([
      { value: MODES.random, label: '随机' },
      { value: MODES.praying, label: LABELS.praying },
      { value: MODES.lifespan, label: LABELS.lifespan },
    ]);

    function normalizeMode(value) {
      return Object.values(MODES).includes(value) ? value : MODES.random;
    }

    function readMode() {
      try {
        return normalizeMode(window.localStorage.getItem(STORAGE_KEY));
      } catch {
        return MODES.random;
      }
    }

    let mode = readMode();
    const modeListeners = new Set();
    const getMode = () => mode;
    const subscribeMode = listener => {
      modeListeners.add(listener);
      return () => modeListeners.delete(listener);
    };

    function chooseLabel(selectedMode, random = Math.random) {
      if (selectedMode === MODES.praying) return LABELS.praying;
      if (selectedMode === MODES.lifespan) return LABELS.lifespan;
      return random() < 0.5 ? LABELS.praying : LABELS.lifespan;
    }

    function createLabelSelector(random = Math.random) {
      let labels = new WeakMap();
      return {
        forContainer(container, selectedMode) {
          if (selectedMode !== MODES.random) return chooseLabel(selectedMode, random);
          if (!labels.has(container)) labels.set(container, chooseLabel(selectedMode, random));
          return labels.get(container);
        },
        reset() {
          labels = new WeakMap();
        },
      };
    }

    const labelSelector = createLabelSelector();

    function textNodesWithin(root) {
      const result = [];
      const pending = Array.from(root?.childNodes || []);
      while (pending.length > 0) {
        const node = pending.shift();
        if (node?.nodeType === 3) {
          result.push(node);
        } else if (node?.childNodes) {
          pending.unshift(...Array.from(node.childNodes));
        }
      }
      return result;
    }

    function rewriteRunning(container, label) {
      let changed = 0;
      for (const node of textNodesWithin(container)) {
        if (typeof node.nodeValue !== 'string' || node.nodeValue.trim() === '' || node.nodeValue === label) continue;
        node.nodeValue = label;
        changed += 1;
      }
      if (container && typeof container.setAttribute === 'function') {
        container.setAttribute('data-gensokyo-status', label);
      }
      return changed;
    }

    function closestRunning(node) {
      const element = node?.nodeType === 1 ? node : node?.parentElement;
      return element && typeof element.closest === 'function' ? element.closest(RUNNING_SELECTOR) : null;
    }

    function runningContainersWithin(root) {
      const found = [];
      if (root?.nodeType === 1 && typeof root.matches === 'function' && root.matches(RUNNING_SELECTOR)) found.push(root);
      if (root && typeof root.querySelectorAll === 'function') found.push(...root.querySelectorAll(RUNNING_SELECTOR));
      return found;
    }

    function rewriteContainer(container) {
      if (!container) return;
      rewriteRunning(container, labelSelector.forContainer(container, mode));
    }

    function rewriteDocument() {
      if (typeof document === 'undefined') return;
      runningContainersWithin(document).forEach(rewriteContainer);
    }

    function writeMode(value) {
      const next = normalizeMode(value);
      if (next === mode) return;
      mode = next;
      labelSelector.reset();
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // The setting remains active for this page when storage is unavailable.
      }
      rewriteDocument();
      modeListeners.forEach(listener => listener());
    }

    const CSS = [
      '.dsh-gensokyo-status{display:inline-flex;align-items:center;gap:6px;order:98;',
      'font-size:12px;line-height:20px;color:var(--dsw-alias-label-secondary,#666)}',
      '.dsh-gensokyo-status__select{max-width:132px;height:24px;border:1px solid ',
      'var(--dsw-alias-border-secondary,#d8d8d8);border-radius:6px;padding:0 24px 0 8px;',
      'background:var(--dsw-alias-background-primary,#fff);color:var(--dsw-alias-label-primary,#222);',
      'font:inherit;cursor:pointer}',
      '.dsh-gensokyo-status__select:focus-visible{outline:2px solid ',
      'var(--dsw-alias-state-focus,#5b8cff);outline-offset:1px}',
    ].join('');
    const STYLE_KEY = 'dsh-gensokyo-status/control.css';

    function installStyle() {
      if (typeof document === 'undefined' || document.querySelector(`style[data-plugin-css="${STYLE_KEY}"]`)) return;
      const style = document.createElement('style');
      style.dataset.plugin = 'dsh-gensokyo-status';
      style.dataset.pluginCss = STYLE_KEY;
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    function ModeControl() {
      const selected = React.useSyncExternalStore(subscribeMode, getMode, getMode);
      return h('label', { className: 'dsh-gensokyo-status', title: '幻想乡运行状态' },
        h('select', {
          className: 'dsh-gensokyo-status__select',
          value: selected,
          'aria-label': '幻想乡运行状态',
          onChange: event => writeMode(event.target.value),
        }, ...MODE_OPTIONS.map(option => h('option', { key: option.value, value: option.value }, option.label))),
      );
    }

    function startObserver() {
      if (typeof document === 'undefined' || typeof MutationObserver === 'undefined') return () => {};
      rewriteDocument();
      const observer = new MutationObserver(records => {
        const containers = new Set();
        for (const record of records) {
          if (record.type === 'characterData') {
            const container = closestRunning(record.target);
            if (container) containers.add(container);
            continue;
          }
          const parent = closestRunning(record.target);
          if (parent) containers.add(parent);
          for (const node of record.addedNodes || []) {
            const container = closestRunning(node);
            if (container) containers.add(container);
            runningContainersWithin(node).forEach(item => containers.add(item));
          }
        }
        containers.forEach(rewriteContainer);
      });
      observer.observe(document.documentElement, { childList: true, characterData: true, subtree: true });
      return () => observer.disconnect();
    }

    function apply(ctx) {
      installStyle();
      ctx.effect(startObserver, 'gensokyo-status: running text observer');
      ctx.slots.inject('conversation.composer.dock', () => ctx.slots.register({
        name: 'conversation.composer.dock',
        id: 'gensokyo-status-mode',
        order: 98,
      }, ModeControl));
    }

    const inject = ['slots'];

    exports.apply = apply;
    exports.inject = inject;
    exports.ModeControl = ModeControl;
    exports.__internals = {
      LABELS,
      MODES,
      MODE_OPTIONS,
      normalizeMode,
      chooseLabel,
      createLabelSelector,
      textNodesWithin,
      rewriteRunning,
    };
    return module.exports;
  },
});
