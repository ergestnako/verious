/** --------------------------------------------
*
* Image Center.
*
--------------------------------------------- */

/* global VERIOUS, $ */

(($) => {
  function getSpacingUnit() {
    return parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  function updateContainer(config) {
    const { container, source } = config;
    const spacingUnit = getSpacingUnit();
    const sourceHeight = source.height();
    const containerHeight = Math.floor(sourceHeight / spacingUnit) * spacingUnit;
    container.height(containerHeight);
  }

  function initWindow(config) {
    const { w } = config;

    let oldWidth = w.width();

    w.on('resize', () => {
      const newWidth = w.width();
      if (oldWidth !== newWidth) {
        updateContainer(config);
        oldWidth = newWidth;
      }
    });
  }

  function init(config) {
    updateContainer(config);
    initWindow(config);
  }

  VERIOUS.Modules.vsImageCenter = (m) => {
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

    init(config);
  };
})($, Hammer);
