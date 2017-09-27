const Color = require('../color');

module.exports = {
  isInternalColor(color) {
    return color.includes('vs-');
  },
  getInternalColor(color) {
    const parts = color.split('-');
    return Color[parts[1]][parts[2]];
  }
};
