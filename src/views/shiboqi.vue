<template>
  <div class="shiboqi">
    <div class="char-dom" ref="chartRef"></div>
  </div>
</template>
<script setup>
import * as echarts from "echarts";
const chartRef = ref(null);
let chart = null
const initChart = () => {
  chart = echarts.init(chartRef.value);
  draw();
};
const draw = () => {
  let option = {
    title: {
      text: "echarts模拟示波器",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["line1", "line2", "line3", "line4"],
      left: 'center',
      bottom: '10%'
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "20%",
      containLabel: true,
    },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {},
    //   },
    // },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["00:00", "09:00", "12:00", "15:00", "18:00", "21:00", "24:00"],
      splitLine: {
        show: true
      }
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true
      },
      max: 100
    },
    series: [
      {
        name: "line1",
        type: "line",
        smooth: true,
        showSymbol: false,
        data: [86,0,0,86,86,0,0],
      },
      {
        name: "line2",
        type: "line",
        smooth: true,
        showSymbol: false,
        data: [90,90,90,36,36,90,90],
      },
      {
        name: "line3",
        type: "line",
        smooth: true,
        showSymbol: false,
        data: [70,70,70,70,70,70,70],
      },
      {
        name: "line4",
        type: "line",
        smooth: true,
        showSymbol: false,
        data: [14,14,14,14,80,38,10],
      },
    ],
  };
  chart && chart.setOption(option)
};
onMounted(() => {
  initChart();
});
</script>
<style scoped lang="scss">
.shiboqi {
  width: 800px;
  height: 600px;
  border: 1px solid #ccc;
  margin: 20px auto;
  .char-dom {
    height: 100%;
  }
}
</style>
