/** --------------------------------------------
 *
 * Global.
 *
 --------------------------------------------- */

/* global window, $ */

(() => {
  const VERIOUS = {};

  VERIOUS.Global = {
    /** --------------------------------------------
    * Initialize the global object.
    --------------------------------------------- */
    init: function init() {
      VERIOUS.Global.loadModules();
    },

    /** --------------------------------------------
    * Load every single module and initialize.
    --------------------------------------------- */
    loadModules: function loadModules() {
      const modules = $('body').find('[data-script]');

      modules.each(function loadModule() {
        const moduleName = this.getAttribute('data-script');
        const module = this;

        if (!module.getAttribute('data-loaded')) {
          if (VERIOUS.Modules[moduleName]) {
            try {
              VERIOUS.Modules[moduleName](module);
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

  $(VERIOUS.Global.init);

  window.VERIOUS = VERIOUS;
})();
