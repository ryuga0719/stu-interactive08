import PieChart from "./modules/PieChart";

// graphのデータ
const data = {
  datasets: {
    chartSize: "200px",
    data: [25, 50, 25, 75],
    backgroundColor: ["#f11a50", "#7cef00", "#00dbd9", "#ff00ff"],
    maskRadius: "25px",
  },
};

const target = document.getElementById("graph");
// 円グラフ生成
const pieChart = new PieChart(target, data);
