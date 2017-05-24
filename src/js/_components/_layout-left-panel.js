/* global VERIOUS, $, Hammer, anime, window */

(($, Hammer, anime) => {
  /**
   * Layout left panel module for sidebar that opens and closes.
   * @module vsLayoutLeftPanel
   */
  VERIOUS.Modules.vsLayoutLeftPanel = {
    /**
     * Open left panel.
     * @param {object} config
     * @return {undefined}
     */
    open: function open(config) {
      const {
        overlay,
        panel,
        ANIMATION_DURATION,
        ANIMATION_CURVE,
      } = config;

      // Overlay.
      overlay.height('100%');
      anime({
        targets: overlay[0],
        opacity: 1,
        duration: ANIMATION_DURATION,
      });

      // Panel.
      anime({
        targets: panel[0],
        translateX: panel.width(),
        easing: ANIMATION_CURVE,
        duration: ANIMATION_DURATION,
      });
    },

    /**
     * Close panel.
     * @param {object} config
     * @return {undefined}
     */
    close: function close(config) {
      const {
        overlay,
        panel,
        ANIMATION_DURATION,
        ANIMATION_CURVE,
      } = config;

      // Overlay.
      const overlayAnimation = anime({
        targets: overlay[0],
        opacity: 0,
        duration: ANIMATION_DURATION,
      });
      overlayAnimation.complete = () => overlay.height('0');

      // Panel.
      anime({
        targets: panel[0],
        translateX: 0,
        easing: ANIMATION_CURVE,
        duration: ANIMATION_DURATION,
      });
    },

    /**
     * Initiate Overlay.
     * @param {object} config
     * @return {undefined}
     */
    initOverlay: function initOverlay(config) {
      const { overlay } = config;

      const overlayHammer = new Hammer(overlay[0]);
      overlayHammer.on('tap', (ev) => {
        ev.preventDefault();
        this.close(config);
      });
    },

    /**
     * Initiate Button.
     * @param {object} config
     * @return {undefined}
     */
    initButton: function initButton(config) {
      const { button } = config;

      const buttonHammer = new Hammer(button[0]);
      buttonHammer.on('tap', (ev) => {
        ev.preventDefault();
        this.open(config);
      });
    },

    /**
     * Initiate Window.
     * @param {object} config
     * @return {undefined}
     */
    initWindow: function initWindow(config) {
      const { w } = config;

      w.on('resize', () => {
        this.close(config);
      });
    },

    /**
     * Initiate.
     * @param {object} config
     * @return {undefined}
     */
    init: function init(config) {
      this.initButton(config);
      this.initOverlay(config);
      this.initWindow(config);
    },
  };

  VERIOUS.Runners.vsLayoutLeftPanel = (m) => {
    const OVERLAY_CLASSNAME = 'vs-layout-left-panel-overlay';
    const BUTTON_CLASSNAME = 'vs-layout-left-panel-button';
    const PANEL_CLASSNAME = 'vs-layout-left-panel-panel';

    const ANIMATION_DURATION = 500;
    const ANIMATION_CURVE = [0.4, 0.0, 0.2, 1];

    const module = $(m);
    const w = $(window);
    const overlay = module.find(`.${OVERLAY_CLASSNAME}`);
    const button = module.find(`.${BUTTON_CLASSNAME}`);
    const panel = module.find(`.${PANEL_CLASSNAME}`);

    const config = {
      module,
      w,
      overlay,
      button,
      panel,

      ANIMATION_DURATION,
      ANIMATION_CURVE,
    };

    VERIOUS.Modules.vsLayoutLeftPanel.init(config);
  };
})($, Hammer, anime);
