export default class Masks {
  constructor() {}
  // 中央のマスクの描画
  static drawCenterMask(elem, maskRadius) {
    elem.style.setProperty("--mask-radius", maskRadius + "px");
  }
}
