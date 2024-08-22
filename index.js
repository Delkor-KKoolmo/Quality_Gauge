var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app = {};

var option;

const gaugeData = [
  {
    value: 84.7,
    name: "Quality",
    title: {
      show: true,
      fontSize: 30,
      fontWeight: "bold",
      offsetCenter: ["0%", "10%"],
      color: "#777777",
    },
    detail: {
      //Current Value Label
      show: true,
      fontSize: 80,
      offsetCenter: ["0%", "-15%"],
      valueAnimation: true,
      formatter: function (value) {
        return value.toFixed(1) + "%";
      },
      color: "#000", // Set a specific color for the detail text
    },
  },
];

option = {
  series: [
    {
      type: "gauge",
      startAngle: 180,
      endAngle: 0,
      center: ["50%", "65%"],
      radius: "100%",
      min: 0,
      max: 100,
      splitNumber: 38,
      axisLine: {
        show: true,
        lineStyle: {
          color: [[1.0, "#0a152f26"]],
          width: 60, // Width of the axis line
        },
      },
      progress: {
        show: true,
        width: 60, // Set the width of the progress bar
        itemStyle: {
          opacity: "15%",
          color: "#2C9C2C",
        },
      },
      pointer: {
        show: false,
      },
      splitLine: {
        show: false,
        length: "8%",
      },
      axisTick: {
        show: false, // Show the axis ticks
        lineStyle: {
          width: 2, // Width of the ticks
          color: "auto", // Color of the axis ticks
        },
      },
      axisLabel: {
        show: false,
      },
      data: gaugeData,
    },
  ],
};

setInterval(function () {
  gaugeData[0].value = +(Math.random() * 100).toFixed(2);
  myChart.setOption({
    series: [
      {
        data: gaugeData,
      },
    ],
  });
}, 2000);

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
