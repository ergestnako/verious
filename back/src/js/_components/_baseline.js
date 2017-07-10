/* global VERIOUS, $, Hammer, _ */

(($, Hammer) => {
  /**
   * Module for showing and hiding baseline grid.
   * @module vsBaseline
   */
  VERIOUS.Modules.vsBaseline = {
    /**
     * Open baseline.
     * @param {object} config
     * @return {undefined}
     */
    open: function open(config) {
      const {
        overlay,
        OVERLAY_ACTIVE_CLASS,
      } = config;

      overlay.addClass(OVERLAY_ACTIVE_CLASS);
    },

    /**
     * Close baseline.
     * @param {object} config
     * @return {undefined}
     */
    close: function close(config) {
      const {
        overlay,
        OVERLAY_ACTIVE_CLASS,
      } = config;

      overlay.removeClass(OVERLAY_ACTIVE_CLASS);
    },

    /**
     * Initiate button.
     * @param {object} config
     * @return {undefined}
     */
    initButton: function initButton(config) {
      const { button } = config;

      _.each(button, (val, key) => {
        const hammer = new Hammer(button[key]);
        hammer.on('tap', () => {
          this.open(config);
        });
      });
    },

    /**
     * Initiate overlay.
     * @param {object} config
     * @return {undefined}
     */
    initOverlay: function initOverlay(config) {
      const { overlay } = config;

      _.each(overlay, (val, key) => {
        const hammer = new Hammer(overlay[key]);
        hammer.on('tap', () => {
          this.close(config);
        });
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
    },
  };

  VERIOUS.Runners.vsBaseline = (m) => {
    const OVERLAY_CLASS = 'vs-baseline';
    const OVERLAY_ACTIVE_CLASS = 'vs-baseline--active';
    const BUTTON_CLASS = 'vs-baseline-button';

    const module = $(m);
    const overlay = module.find(`.${OVERLAY_CLASS}`);
    const button = module.find(`.${BUTTON_CLASS}`);

    const config = {
      module,
      overlay,
      button,

      OVERLAY_ACTIVE_CLASS,
    };

    VERIOUS.Modules.vsBaseline.init(config);
  };
})($, Hammer);
