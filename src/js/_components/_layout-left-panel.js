/** --------------------------------------------
*
* Menu.
*
--------------------------------------------- */

/* global VERIOUS, $, Hammer, anime, window */

(($, Hammer, anime) => {
  function open(config) {
    const {
      overlay,
      panel,
    } = config;

    // Overlay.
    overlay.height('100%');
    anime({
      targets: overlay[0],
      opacity: 1,
      duration: 250,
    });

    // Panel.
    anime({
      targets: panel[0],
      translateX: panel.width(),
      easing: 'easeOutCubic',
      duration: 250,
    });
  }

  function close(config) {
    const {
      overlay,
      panel,
    } = config;

    // Overlay.
    const overlayAnimation = anime({
      targets: overlay[0],
      opacity: 0,
      duration: 250,
    });
    overlayAnimation.complete = () => overlay.height('0');

    // Panel.
    anime({
      targets: panel[0],
      translateX: 0,
      easing: 'easeOutCubic',
      duration: 250,
    });
  }

  function initOverlay(config) {
    const { overlay } = config;

    const overlayHammer = new Hammer(overlay[0]);
    overlayHammer.on('tap', (ev) => {
      ev.preventDefault();
      close(config);
    });
  }

  function initButton(config) {
    const { button } = config;

    const buttonHammer = new Hammer(button[0]);
    buttonHammer.on('tap', (ev) => {
      ev.preventDefault();
      open(config);
    });
  }

  function initWindow(config) {
    const { w } = config;

    w.on('resize', () => {
      close(config);
    });
  }

  function init(config) {
    initButton(config);
    initOverlay(config);
    initWindow(config);
  }

  VERIOUS.Modules.vsLayoutLeftPanel = (m) => {
    const OVERLAY_CLASSNAME = 'vs-layout-left-panel-overlay';
    const BUTTON_CLASSNAME = 'vs-layout-left-panel-button';
    const PANEL_CLASSNAME = 'vs-layout-left-panel-panel';

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
    };

    init(config);
  };
})($, Hammer, anime);
