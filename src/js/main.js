import PieChart from "./modules/PieChart";
import GUI from "lil-gui";

const gui = new GUI();

// graphのデータ
const data = {
  datasets: {
    chartSize: 100,
    data: [25, 50, 25, 75],
    backgroundColor: ["#ff7f7f", "#ff7fbf", "#7fffbf", "#7f7fff"],
    maskRadius: -1,
  },
};

const target = document.getElementById("graph");
// 円グラフ生成
let pieChart = new PieChart(target, data);

gui.add(data.datasets, "chartSize", 0, 100).onChange(() => {
  pieChart = new PieChart(target, data);
});
gui.add(data.datasets, "maskRadius", -1, 200).onChange(() => {
  pieChart = new PieChart(target, data);
});
