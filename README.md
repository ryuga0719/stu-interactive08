# stu-interactive08

## Theme

conic-gradient()

## Concept

conic-gradient ベースの超軽量の円グラフライブラリ

Canvas も svg も使わず div 一つで表示しているので超軽量？

## Tech

Vite3, lil-gui(テスト用)

## How to use

### グラフを出力する要素に id を設定

html

```:html
<div id="graph"></div>
```

js

```:js
const target = document.getElementById("graph");
```

### グラフの表示に必要なデータオブジェクトを指定

```:js
const data = {
  datasets: {
    chartSize: 100, // 円グラフのサイズ(%)
    data: [25, 50, 25, 75], // 数値データ
    backgroundColor: ["#ff7f7f", "#ff7fbf", "#7fffbf", "#7f7fff"], // 各データの円グラフの表示色
    maskRadius: -1, // 中心をくり抜く
  },
};
```

### PieChart クラスのインスタンスを作成

```:js
const pieChart = new PieChart(target, data);
```
