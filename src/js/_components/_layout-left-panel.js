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
      panel,
      content,
      PANEL_OPEN_CLASSNAME,
      CONTENT_SHIFTED_CLASSNAME,
      OVERLAY_ACTIVE_CLASSNAME,
    } = config;

    setTimeout(() => {
      panel.addClass(PANEL_OPEN_CLASSNAME);
    }, 200);
    content.addClass(CONTENT_SHIFTED_CLASSNAME);
    overlay.addClass(OVERLAY_ACTIVE_CLASSNAME);
  }

  function close(config) {
    const {
      overlay,
      panel,
      content,
      PANEL_OPEN_CLASSNAME,
      CONTENT_SHIFTED_CLASSNAME,
      OVERLAY_ACTIVE_CLASSNAME,
    } = config;

    panel.removeClass(PANEL_OPEN_CLASSNAME);
    content.removeClass(CONTENT_SHIFTED_CLASSNAME);
    overlay.removeClass(OVERLAY_ACTIVE_CLASSNAME);
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

  function init(config) {
    initButton(config);
    initOverlay(config);
  }

  VERIOUS.Modules.vsLayoutLeftPanel = (m) => {
    const OVERLAY_CLASSNAME = 'vs-layout-left-panel-overlay';
    const OVERLAY_ACTIVE_CLASSNAME = 'vs-layout-left-panel-overlay--active';
    const BUTTON_CLASSNAME = 'vs-layout-left-panel-button';
    const PANEL_CLASSNAME = 'vs-layout-left-panel-panel';
    const PANEL_OPEN_CLASSNAME = 'vs-layout-left-panel-panel--open';
    const CONTENT_CLASSNAME = 'vs-layout-left-panel-content';
    const CONTENT_SHIFTED_CLASSNAME = 'vs-layout-left-panel-content--shifted';

    const module = $(m);
    const overlay = module.find(`.${OVERLAY_CLASSNAME}`);
    const button = module.find(`.${BUTTON_CLASSNAME}`);
    const panel = module.find(`.${PANEL_CLASSNAME}`);
    const content = module.find(`.${CONTENT_CLASSNAME}`);

    const config = {
      module,
      overlay,
      button,
      panel,
      content,

      OVERLAY_ACTIVE_CLASSNAME,
      PANEL_OPEN_CLASSNAME,
      CONTENT_SHIFTED_CLASSNAME,
    };

    init(config);
  };
})($, Hammer);
