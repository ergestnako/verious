/* global VERIOUS, $, getComputedStyle, window, document */


((VERIOUS, $) => {
  /**
   * Module for sizing images to the baseline grid.
   * @module vsImageCenter
   */
  VERIOUS.Modules.vsImageCenter = { // eslint-disable-line
    /**
     * Get spacing unit based on document rem value.
     * @return {number}
     */
    getSpacingUnit: function getSpacingUnit() {
      return parseFloat(getComputedStyle(document.documentElement).fontSize);
    },

    /**
     * Update container.
     * @param {object} config
     * @return {undefined}
     */
    updateContainer: function updateContainer(config) {
      const { container, source } = config;
      const spacingUnit = this.getSpacingUnit();
      const sourceHeight = source.height();
      const containerHeight = Math.floor(sourceHeight / spacingUnit) * spacingUnit;
      container.height(containerHeight);
    },

    /**
     * Initiate window.
     * @param {object} config
     * @return {undefined}
     */
    initWindow: function initWindow(config) {
      const { w } = config;

      let oldWidth = w.width();

      w.on('resize', () => {
        const newWidth = w.width();
        if (oldWidth !== newWidth) {
          this.updateContainer(config);
          oldWidth = newWidth;
        }
      });
    },

    /**
     * Initiate.
     * @param {object} config
     * @return {undefined}
     */
    init: function init(config) {
      this.updateContainer(config);
      this.initWindow(config);
    },
  };

  VERIOUS.Runners.vsImageCenter = (m) => { // eslint-disable-line
    const IMAGE_CONTAINER_CLASSNAME = 'vs-image-image';
    const IMAGE_SOURCE_CLASSNAME = 'vs-image-source';

    const module = $(m);
    const w = $(window);
    const container = module.find(`.${IMAGE_CONTAINER_CLASSNAME}`);
    const source = module.find(`.${IMAGE_SOURCE_CLASSNAME}`);

    const config = {
      module,
      w,
      container,
      source,

      IMAGE_CONTAINER_CLASSNAME,
    };

    VERIOUS.Modules.vsImageCenter.init(config);
  };
})(VERIOUS, $);
