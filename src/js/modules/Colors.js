// Background Color関連
export default class Colors {
  constructor() {}

  static setBackgroundColorList(backgroundColor) {
    let colors = [];
    for (let i = 0; i < backgroundColor.length; i++) {
      colors.push(backgroundColor[i]);
      colors.push(backgroundColor[i]);
    }
    return colors;
  }
}
