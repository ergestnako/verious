'use strict';

var Color = require('../color');

module.exports = {
  isInternalColor: function isInternalColor(color) {
    return color.includes('vs-');
  },
  getInternalColor: function getInternalColor(color) {
    var parts = color.split('-');
    var c = '';

    if (parts.length < 3) {
      c = Color[parts[1]];
    } else {
      c = Color[parts[1]][parts[2]];
    }

    return c;
  }
};