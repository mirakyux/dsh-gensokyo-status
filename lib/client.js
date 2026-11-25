window.__ModuleLoader__.load({
  id: 'dsh-gensokyo-status',
  factory: require => {
    const module = { exports: {} };
    const exports = module.exports;
    const React = require('react');
    const h = React.createElement;

    const STORAGE_KEY = 'dsh-gensokyo-status:mode';
    const NATIVE = '[data-chat-running]';
    const BOT = '.bt-typing';
    const PROCESS = '[data-process-activity]';
    const FLOW = '[data-chat-flow]:not([data-step-process-content])';
    const STATUS_SELECTOR = [NATIVE, BOT, PROCESS].join(', ');
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

    function statusRoots(container) {
      const selector = container.matches(BOT) ? '.bt-typing-label > .bt-shimmer'
        : container.matches(PROCESS) ? ':scope > [data-shimmer]'
        : ':scope > [role="status"], :scope > span > [data-shimmer]';
      return container.querySelectorAll(selector);
    }

    const originalValues = new WeakMap();
    const edited = new Map();

    function rewriteRunning(container, label, roots = statusRoots(container)) {
      const nodes = new Set();
      for (const root of roots) {
        const fields = [
          ...textNodesWithin(root).filter(node => node.nodeValue.trim()).map(node => [node, 'nodeValue']),
          ...Array.from(root.querySelectorAll('[data-shimmer-text]'), node => [node, 'data-shimmer-text']),
        ];
        for (const [node, key] of fields) {
          nodes.add(node);
          const isText = key === 'nodeValue';
          const current = isText ? node.nodeValue : node.getAttribute(key);
          const previous = originalValues.get(node);
          const original = previous?.replacement === current ? previous.original : current;
          originalValues.set(node, { original, replacement: label, isText });
          if (current === label) continue;
          if (isText) node.nodeValue = label;
          else node.setAttribute(key, label);
        }
      }
      if (nodes.size > 0) edited.set(container, nodes);
    }

    function restoreContainer(container) {
      for (const node of edited.get(container) ?? []) {
        const { original, replacement, isText } = originalValues.get(node);
        if (isText && node.nodeValue === replacement) node.nodeValue = original;
        if (!isText && node.getAttribute('data-shimmer-text') === replacement) node.setAttribute('data-shimmer-text', original);
        originalValues.delete(node);
      }
      edited.delete(container);
    }

    function closestRunning(node) {
      const element = node?.nodeType === 1 ? node : node?.parentElement;
      return element && typeof element.closest === 'function' ? element.closest(STATUS_SELECTOR) : null;
    }

    function runningContainersWithin(root) {
      const found = [];
      if (root?.nodeType === 1 && root.matches(STATUS_SELECTOR)) found.push(root);
      if (root && typeof root.querySelectorAll === 'function') found.push(...root.querySelectorAll(STATUS_SELECTOR));
      return found;
    }

    function rewriteContainer(container) {
      const roots = statusRoots(container);
      if (roots.length === 0) {
        restoreContainer(container);
        return;
      }
      const flow = container.closest(FLOW);
      const anchor = flow?.querySelector(`${NATIVE}:not([data-holding])`)
        ?? flow?.querySelector(`${BOT}:not([data-exiting])`)
        ?? container;
      rewriteRunning(container, labelSelector.forContainer(anchor, mode), roots);
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
      return () => style.remove();
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
          const parent = closestRunning(record.target);
          if (parent) containers.add(parent);
          for (const node of record.addedNodes || []) {
            runningContainersWithin(node).forEach(item => containers.add(item));
          }
        }
        for (const container of edited.keys()) {
          if (!container.isConnected) edited.delete(container);
        }
        for (const container of containers) {
          if (!container.isConnected) continue;
          rewriteContainer(container);
          // The live process header may appear before its run's footer.
          if (container.matches(NATIVE) || container.matches(BOT)) {
            const flow = container.closest(FLOW);
            flow?.querySelectorAll(`${PROCESS}:has(> [data-shimmer])`).forEach(rewriteContainer);
            if (container.matches(NATIVE)) flow?.querySelectorAll(BOT).forEach(rewriteContainer);
          }
        }
      });
      observer.observe(document.documentElement, {
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['data-shimmer', 'data-shimmer-text', 'data-holding', 'data-exiting'],
        subtree: true,
      });
      return () => {
        observer.disconnect();
        edited.forEach((_nodes, container) => restoreContainer(container));
        labelSelector.reset();
      };
    }

    function apply(ctx) {
      ctx.effect(installStyle, 'gensokyo-status: mode selector style');
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
      restoreContainer,
      startObserver,
    };
    return module.exports;
  },
});
