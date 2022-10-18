export default class ConicGradient {
  constructor() {}

  // conic-gradient設定
  static drawConicGradient(elem, gradient) {
    elem.style.setProperty("background", "conic-gradient(" + gradient + ")");
  }

  // gradientのテキスト生成
  static generateGradientText(data, colors) {
    let text = "";
    for (let i = 0; i < data.length; i++) {
      text += colors[i] + " " + data[i] + "%,";
    }
    text = text.substring(0, text.length - 1);
    return text;
  }
}
