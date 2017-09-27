'use strict';

var Color = require('../color');

module.exports = {
  isInternalColor: function isInternalColor(color) {
    return color.includes('vs-');
  },
  getInternalColor: function getInternalColor(color) {
    var parts = color.split('-');
    return Color[parts[1]][parts[2]];
  }
};