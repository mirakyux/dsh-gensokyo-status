window.__ModuleLoader__.load({
  id: 'dsh-gensokyo-status',
  factory: require => {
    const module = { exports: {} };
    const exports = module.exports;
    const React = require('react');
    const h = React.createElement;

    const STORAGE_KEY = 'dsh-gensokyo-status:mode';
    const TIME_STORAGE_KEY = 'dsh-gensokyo-status:show-time';
    const NATIVE = '[data-chat-running]';
    const BOT = '.bt-typing';
    const FLOW = '[data-chat-flow]:not([data-step-process-content])';
    const STATUS_SELECTOR = [NATIVE, BOT].join(', ');
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

    function readShowTime() {
      try {
        return window.localStorage.getItem(TIME_STORAGE_KEY) !== 'false';
      } catch {
        return true;
      }
    }

    let mode = readMode();
    let showTime = readShowTime();
    const settingsListeners = new Set();
    const getMode = () => mode;
    const getShowTime = () => showTime;
    const subscribeSettings = listener => {
      settingsListeners.add(listener);
      return () => settingsListeners.delete(listener);
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
        : ':scope > [role="status"], :scope > span > [data-shimmer]';
      return container.querySelectorAll(selector);
    }

    function formatCaption(label, original, displayTime) {
      // Use the host's localized duration so pause, reconnect and resumed runs
      // keep their original clock. The live region has no duration to announce.
      const duration = displayTime
        ? original.match(/(?:\d+(?:[.,]\d+)?\s*(?:小时|分钟|秒|分|时|[hmsчмс])\s*)+/u)?.[0].trim()
        : undefined;
      return duration ? `${label}，用时 ${duration}…` : `${label}…`;
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
          const replacement = formatCaption(label, original, showTime && !container.matches(BOT));
          originalValues.set(node, { original, replacement, isText });
          if (current === replacement) continue;
          if (isText) node.nodeValue = replacement;
          else node.setAttribute(key, replacement);
        }
      }
      if (container.matches(BOT)) container.toggleAttribute('data-gensokyo-hide-time', !showTime);
      if (nodes.size > 0) edited.set(container, nodes);
    }

    function restoreContainer(container) {
      for (const node of edited.get(container) ?? []) {
        const { original, replacement, isText } = originalValues.get(node);
        if (isText && node.nodeValue === replacement) node.nodeValue = original;
        if (!isText && node.getAttribute('data-shimmer-text') === replacement) node.setAttribute('data-shimmer-text', original);
        originalValues.delete(node);
      }
      if (container.matches(BOT)) container.removeAttribute('data-gensokyo-hide-time');
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
      settingsListeners.forEach(listener => listener());
    }

    function writeShowTime(value) {
      if (typeof value !== 'boolean' || value === showTime) return;
      showTime = value;
      try {
        window.localStorage.setItem(TIME_STORAGE_KEY, String(value));
      } catch {
        // The setting remains active for this page when storage is unavailable.
      }
      rewriteDocument();
      settingsListeners.forEach(listener => listener());
    }

    const CSS = [
      '.dsh-gensokyo-settings{display:grid;gap:16px}',
      '.dsh-gensokyo-status{display:flex;align-items:center;gap:12px;',
      'min-height:32px;font-size:14px;color:var(--dsw-alias-label-primary,#222)}',
      '.dsh-gensokyo-status input{accent-color:var(--dsw-alias-state-focus,#5b8cff)}',
      '.bt-typing[data-gensokyo-hide-time] .bt-typing-time{display:none!important}',
      '.dsh-gensokyo-status__select{min-height:32px;border:1px solid ',
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
      const selected = React.useSyncExternalStore(subscribeSettings, getMode, getMode);
      const displayTime = React.useSyncExternalStore(subscribeSettings, getShowTime, getShowTime);
      return h('div', { className: 'dsh-gensokyo-settings' },
        h('label', { className: 'dsh-gensokyo-status' }, '运行文案',
          h('select', {
            className: 'dsh-gensokyo-status__select',
            value: selected,
            'aria-label': '幻想乡运行状态',
            onChange: event => writeMode(event.target.value),
          }, ...MODE_OPTIONS.map(option => h('option', { key: option.value, value: option.value }, option.label))),
        ),
        h('label', { className: 'dsh-gensokyo-status' },
          h('input', {
            type: 'checkbox',
            checked: displayTime,
            onChange: event => writeShowTime(event.target.checked),
          }),
          '显示运行时间',
        ),
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
          if (container.matches(NATIVE)) {
            const flow = container.closest(FLOW);
            flow?.querySelectorAll(BOT).forEach(rewriteContainer);
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
      ctx.slots.inject('settings.section', () => ctx.slots.register({
        name: 'settings.section',
        id: 'gensokyo-status',
        label: '幻想乡运行状态',
        order: 100,
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
      formatCaption,
      rewriteRunning,
      restoreContainer,
    };
    return module.exports;
  },
});
