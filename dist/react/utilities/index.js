'use strict';

module.exports = {
  isInternalColor: function isInternalColor(color) {
    return color.includes('vs-');
  }
};