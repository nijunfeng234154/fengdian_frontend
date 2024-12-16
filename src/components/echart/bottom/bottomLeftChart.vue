<template>
  <div>
    <div id="bottomLeftChart" style="width:100%;height:9.2rem;"></div>
  </div>
</template>

<script>
import echartMixins from "@/utils/resizeMixins";
import axios from 'axios';

export default {
  data() {
    return {
      chart: null,
      timeList: [],
      windspeedList: [],
      prepowerList: [],

      roundWsList: [],
      roundPowerList: [],
      // yd15List: []
    };
  },
  mixins: [echartMixins],
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('/api/power/get_button_left/fengone')
          .then(response => {
            console.log(response.data);
            const [timeList, windspeedList, prepowerList,  roundWsList, roundPowerList] = response.data;
            this.timeList = timeList;
            this.windspeedList = windspeedList;
            this.prepowerList = prepowerList;

            this.roundWsList = roundWsList;
            this.roundPowerList = roundPowerList;
            // this.yd15List = yd15List;
            this.draw();
          })
          .catch(error => {
            console.log(error);
          });
    },
    draw() {
      this.chart = this.$echarts.init(document.getElementById("bottomLeftChart"));
      let option = {
        title: {
          text: "",
          x: "center",
          y: 0,
          textStyle: {
            color: "#B4B4B4",

            fontSize: 16,
            fontWeight: "normal"
          }
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255,255,255,0.1)",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              backgroundColor: "#7B7DDC"
            }
          }
        },
        legend: {
          data: ["WINDSPEED", "PREPOWER","ROUND_ws", "ROUND_power"],
          textStyle: {
            color: "#B4B4B4"
          },
          top: "2%"
        },
        xAxis: {
          data: this.timeList,
          axisLine: {
            lineStyle: {
              color: "#B4B4B4"
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },
            axisLabel: {
              formatter: "{value} "
            }
          },
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },
            axisLabel: {
              formatter: "{value} "
            }
          },
        ],
        series: [
          {
            name: "WINDSPEED",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 1,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#3EACE5"
              }
            },
            data: this.windspeedList
          },
          {
            name: "PREPOWER",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 1,
            itemStyle: {
              normal: {
                color: "#D8EF06"
              }
            },
            data: this.prepowerList
          },

          {
            name: "ROUND_ws",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 1,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#8B0000"
              }
            },
            data: this.roundWsList
          },
          {
            name: "ROUND_power",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 1,
            itemStyle: {
              normal:{
                color: "#FF4500"
              }
            },
            data: this.roundPowerList
          },
          // {
          //   name: "YD15",
          //   type: "line",
          //   smooth: true,
          //   showAllSymbol: true,
          //   symbol: "emptyCircle",
          //   symbolSize: 1,
          //   itemStyle: {
          //     normal: {
          //       color: "#32CD32"
          //     }
          //   },
          //   data: this.yd15List
          // }
        ]
      };
      this.chart.setOption(option);
    }
  }
};
</script>

<style scoped>
/* No specific styles defined */
</style>
