/* global window, $ */

(() => {
  const VERIOUS = {};

  VERIOUS.Global = {
    init: function init() {
      VERIOUS.Global.loadModules();
    },

    loadModules: function loadModules() {
      const modules = $('body').find('[data-script]');

      modules.each(function loadModule() {
        const moduleName = this.getAttribute('data-script');
        const module = this;

        if (!module.getAttribute('data-loaded')) {
          if (VERIOUS.Runners[moduleName]) {
            try {
              VERIOUS.Runners[moduleName](module);
              $(module).attr('data-loaded', true);
            } catch (e) {
              console.log(moduleName, e); // eslint-disable-line
            }
          }
        }
      });
    },
  };

  VERIOUS.Modules = {};
  VERIOUS.Runners = {};

  $(VERIOUS.Global.init);

  window.VERIOUS = VERIOUS;
})();
