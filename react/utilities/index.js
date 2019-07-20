import Color from "../color";

export default {
  isInternalColor(color) {
    return color.includes("vs-");
  },
  getInternalColor(color) {
    const parts = color.split("-");
    let c = "";

    if (parts.length < 3) {
      c = Color[parts[1]];
    } else {
      c = Color[parts[1]][parts[2]];
    }

    return c;
  }
};
