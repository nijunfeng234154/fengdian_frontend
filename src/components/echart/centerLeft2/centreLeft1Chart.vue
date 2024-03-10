<template>
  <div>
    <div id="centreLeft1Chart" style="width:5rem; height: 4rem;"></div>
  </div>
</template>

<script>
import echartMixins from "@/utils/resizeMixins";

export default {
  data() {
    return {
      chart: null
    };
  },
  mixins: [echartMixins],
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = this.$echarts.init(document.getElementById("centreLeft1Chart"));
      //  ----------------------------------------------------------------

      this.chart.setOption({
        color: [
          "#37a2da",
          "#32c5e9",
          "#9fe6b8",
          "#ffdb5c",
          "#ff9f7f",
          "#fb7293",
          "#e7bcf3",
          "#8378ea"
        ],
        tooltip: {
          trigger: "item",
          // formatter: "{a} <br/>{b} : {c} ({d}%)"

        },
        toolbox: {
          show: true
        },
        calculable: true,
        legend: {
          orient: "horizontal",
          icon: "circle",
          bottom: 0,
          x: "center",

          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "相关性： ",
            type: "pie",
            radius: [30, 70],
            roseType: "area",
            center: ["50%", "50%"],
            data: [

              { value: 0.64, name: "WINDSPEED" },
              { value: 0.78, name: "PREPOWER" },
              { value: 0.17, name: "WINDDIRECTION" },
              { value: 0.12, name: "TEMPERATURE" },
              { value: 0.13, name: "HUMIDITY" },
              { value: 0.14, name: "PRESSURE" },
              { value: 0.79, name: "ROUND(A.WS,1)" },
              { value: 0.87, name: "ROUND(A.POWER,0)" }
            ]
          }
        ]
      });
    }
  },
  destroyed() {
    window.onresize = null;
  }
};
</script>

<style lang="scss" scoped>
</style>
