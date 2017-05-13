/** --------------------------------------------
*
* Menu.
*
--------------------------------------------- */

/* global VERIOUS, $, Hammer */

(($, Hammer) => {
  function open(config) {
    const {
      overlay,
      OVERLAY_ACTIVE_CLASS
    } = config;

    overlay.addClass(OVERLAY_ACTIVE_CLASS);
  }

  function close(config) {
    const {
      overlay,
      OVERLAY_ACTIVE_CLASS
    } = config;

    overlay.removeClass(OVERLAY_ACTIVE_CLASS);
  }

  function initButton(config) {
    const { button } = config;

    _.each(button, (val, key) => {
      const hammer = new Hammer(button[key]);
      hammer.on('tap', (ev) => {
        open(config);
      });
    });
  }

  function initOverlay(config) {
    const { overlay } = config;

    _.each(overlay, (val, key) => {
      const hammer = new Hammer(overlay[key]);
      hammer.on('tap', (ev) => {
        close(config);
      });
    });
  }

  function init(config) {
    initButton(config);
    initOverlay(config);
  }

  VERIOUS.Modules.vsBaseline = (m) => {
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

    init(config);
  };
})($, Hammer);
