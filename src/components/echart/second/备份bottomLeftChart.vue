<template>
  <div>
    <div id="bottomLeftChart" style="width:100%;height:6.0rem;"></div>
  </div>
</template>

<script>
import echartMixins from "@/utils/resizeMixins";
// import  {getdata} from "@/utils/api"
import axios from 'axios';
export default {
  data() {
    return {
      chart: null,
      Listdata:null,
      Time:null,
      WINDSPEED:null,
      TEMPERATURE:null,
      ROUND:null,

    };
  },
  mixins: [echartMixins],
  mounted() {
    // this.draw();
    // this.test();
    this.fetchData();

  },
  methods: {
    fetchData() {

        axios.get('/api/power/get_button_left')
          .then(response => {
            console.log(response.data);
            const ResData = response.data;
            this.Time = ResData[0];
            this.WINDSPEED = ResData[1];
            this.TEMPERATURE = ResData[2];
            this.ROUND = ResData[3];
            this.draw();
          })
          .catch(error => {
            console.log(error);
          });



    },

    draw() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = this.$echarts.init(document.getElementById("bottomLeftChart"));
      //  ----------------------------------------------------------------
      let Time = this.Time;
      let WINDSPEED = this.WINDSPEED;
      let TEMPERATURE =  this.TEMPERATURE;
      let ROUND = this.ROUND;


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
          data: ["风速", "温度", "贯通率"],
          textStyle: {
            color: "#B4B4B4"
          },
          top: "0%"
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
              color: "#B4B4B4"
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
          }
        ],
        series: [
          {
            name: "贯通率",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            // symbolSize: 1,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#F02FC2"
              }
            },
            data: ROUND
          },

          {
            name: "温度",
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
            data: TEMPERATURE
          },

          {
            name: "风速",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 1,
            yAxisIndex: 1,
            itemStyle: {
              normal: {

                color: "#2a1abb"

              }
            },
            data: WINDSPEED
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

<style lang="scss" scoped>
</style>
