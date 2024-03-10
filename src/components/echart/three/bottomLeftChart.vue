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

      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: '',
      chart: null,
      Listdata:null,
      Time:null,
      histroy:null,
      predict2:null,
      predict1:null,
      time:null,

    };
  },
  mixins: [echartMixins],
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
        axios.get(`/api/power/get_real_time_predict/${no}`)
            .then(response => {
              // 请求成功
              console.log(response.data);
              const ResData = response.data;
              this.histroy = ResData[0];
              this.predict1 = ResData[1];
              this.predict2 = ResData[2];
              this.time = ResData[3];
              this.draw();
            })
            .catch(error => {
              // 请求失败
              console.log(error);
            });

        // 将数字增加1，如果数字已经增加到20，则重新从1开始
        no = (no % 20) + 1;
      }, 2000); // 每隔3秒发送一次请求




    },

    draw() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = this.$echarts.init(document.getElementById("bottomLeftChart"));
      //  ----------------------------------------------------------------
      let Time = this.time;
      let predict1 = this.predict1;
      let predict2 =  this.predict2;
      let histroy = this.histroy;


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
          data: ["histroy", "predict1", "predict2"],
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
          },

        ],
        series: [
          {
            name: "predict1",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 1,
            formatter: "{value}",
            itemStyle: {
              normal: {

                color: "#3EACE5"
              }
            },
            data: predict1
          },

          {
            name: "predict2",
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
            data: predict2
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

            color: "rgb(216,239,6)" ,


              }
            },
            data: histroy
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

