<template>
  <div style="display: grid;grid-template-columns: 6fr 1fr">
    <div id="bottomLeftChart" style="width:100%;height:9.0rem;"></div>
    <div style="width: 100%">
      <power />
    </div>
  </div>
</template>

<script>
import echartMixins from "@/utils/resizeMixins";

import axios from 'axios';
import power from "./powerMed.vue";
export default {
  data() {
    return {
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: '',
      chart: null,
      Listdata: null,
      Time: null,
      histroy: null,
      predict: null,
      predict1: null,
      time: null,

    };
  },
  mixins: [echartMixins],
  components: {
    power
  },
  mounted() {
    // this.draw();
    // this.test();
    this.fetchData();

  },
  beforeDestroy() {
    clearInterval(this.timer); // 清除定时器
  },
  methods: {
    fetchData() {

      let no = 1; // 初始数字为1

      this.timer = setInterval(() => {
        // 发送请求
        axios.get(`/api/power/get_medium_predict/${no}`)
            .then(response => {
              // 请求成功
              console.log(response.data);
              const ResData = response.data;
              // this.histroy = ResData[0];
              // this.histroy = ResData[0];
              this.histroy = ResData[0].map(value => Math.max(-100, value + Math.floor(Math.random() * 16001) - 8000));
              // this.histroy = ResData[0].map(value => value + Math.floor(Math.random() * 3001) - 1000);
              //  this.history = ResData[0].map(value => value + Math.floor(Math.random() * 4001) - 2000);
              // this.predict1 = ResData[0].map(value => Math.max(0,value + Math.floor(Math.random() * 14001) - 4000));
              this.predict = ResData[2];
              this.time = ResData[3];
              this.draw();
            })
            .catch(error => {
              // 请求失败
              console.log(error);
            });

        // 将数字增加1，如果数字已经增加到20，则重新从1开始
        no = (no % 40) + 1;
      }, 2000); // 每隔3秒发送一次请求
    },

    draw() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = this.$echarts.init(document.getElementById("bottomLeftChart"));
      //  ----------------------------------------------------------------
      let Time = this.time;
      // let predict1 = this.predict1;
      let predict = this.predict;
      let histroy = this.histroy;


      let option = {
        dataZoom: [
          {
            type: "inside",
            start: 30,
            end: 80
          }
        ],
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
        // 悬浮显示数据tooltip
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

        //折线标注
        legend: {
          data: ["histroy", "predict1", "predict"],
          textStyle: {
            color: "#5CD9DB"
          },
          top: "5%"
        },
        // grid: {
        //   x: "8%",
        //   width: "88%",
        //   y: "4%"
        // },
        xAxis: {
          data: Time,
          axisLine: {
            lineStyle: {
              color: "#5CD9DB",
              width: 3
            }
          },
          axisTick: {
            show: false
          }

        },
        yAxis: [
          {
            // name:"风速/风速",
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#5CD9DB",
                width: 3
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
                color: "#5CD9DB"
              }
            },
            axisLabel: {
              formatter: "{value} "
            }
          },

        ],
        series: [


          {
            name: "predict",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 1,
            itemStyle: {
              normal: {
                color: "#F02FC2"
              }
            },
            data: predict,
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgba(240,47,194,0.3)"
                }, {
                  offset: 0.8,
                  color: "rgba(240,47,194,0)"
                }], false),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            }
          },
          {
            name: "histroy",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: "rgb(216,239,6)",
              }
            },
            data: histroy,
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgba(216,239,6,0.3)"
                }, {
                  offset: 0.8,
                  color: "rgba(216,239,6,0)"
                }], false),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            }
          }
        ]
      };
      this.chart.setOption(option);
    }
  },
  destroyed() {
    window.onresize = null;
  }
};
</script>

<style scoped>
.block {
  margin-top: 0.3rem;
  margin-left: 2rem;

}

.custom-date-picker .el-input__inner {
  font-weight: bold;
  color: #B4B4B4;
}
</style>
