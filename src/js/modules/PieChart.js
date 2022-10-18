import Colors from "./Colors";
import Masks from "./Masks";
import ConicGradient from "./ConicGradient";

export default class PieChart {
  constructor(__target, __data) {
    this.target = __target; // グラフのDOM出力先
    this.chartData = __data.datasets; // グラフのデータ

    // グラフ描画用に比率を調整
    this.adjustedData = this.adjustData(this.chartData.data);
    // console.log(this.adjustedData);

    // グラフ描画用のカラーリスト
    this.colors = Colors.setBackgroundColorList(this.chartData.backgroundColor);
    // console.log(this.colors);

    // グラフ描画用のgradientの文字列
    this.gradient = ConicGradient.generateGradientText(
      this.adjustedData,
      this.colors
    );
    // console.log(this.gradient);

    // グラフのDOMの初期設定
    this.initGraphElement(this.target);

    // グラフの描画
    this.drawGraph();
  }

  // グラフの初期化
  initGraphElement(elem) {
    elem.classList.add("graph");
  }

  // 描画用の累積比率に調整
  adjustData(data) {
    const ratios = this.calcRatio(data);
    return this.calcCumulativeRatio(ratios);
  }

  // 合計値の計算
  calcTotal(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i];
    }
    return total;
  }

  // 各データの割合を計算
  calcRatio(data) {
    let ratios = [];
    const total = this.calcTotal(data);
    for (let i = 0; i < data.length; i++) {
      const ratio = (data[i] / total) * 100;
      ratios.push(ratio);
    }
    return ratios;
  }

  // データの累積比率を計算
  calcCumulativeRatio(ratios) {
    let cumulativeRatios = [];
    let cumulativeRatio = 0;
    cumulativeRatios.push(0); // 開始点
    for (let i = 0; i < ratios.length - 1; i++) {
      cumulativeRatio += Math.round(ratios[i]);
      cumulativeRatios.push(cumulativeRatio); // conic-gradientの-境界値
      cumulativeRatios.push(cumulativeRatio); // conic-gradientの+境界値
    }
    cumulativeRatios.push(100); // 終了点
    return cumulativeRatios;
  }

  // グラフの描画
  drawGraph() {
    this.setChartSize();
    ConicGradient.drawConicGradient(this.target, this.gradient);

    if (this.chartData.maskRadius) {
      Masks.drawCenterMask(this.target, this.chartData.maskRadius);
    }
  }

  // グラフのサイズを設定
  setChartSize() {
    this.target.style.setProperty(
      "--chart-size",
      this.chartData.chartSize + "%"
    );
  }
}
