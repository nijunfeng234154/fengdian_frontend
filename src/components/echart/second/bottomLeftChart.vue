<template>
  <div>
<!--    <div class="block">-->
<!--      <span style="font-size: 20px">-->
<!--        历史数据:-->
<!--      </span>-->
<!--      <el-date-picker-->
<!--          style="-->
<!--          height: 35px;-->
<!--           font-weight: bold;-->
<!--           background-color: #0f1325;"-->
<!--          v-model="value2"-->
<!--          type="datetimerange"-->
<!--          :picker-options="pickerOptions"-->
<!--          range-separator="至"-->
<!--          start-placeholder="开始日期"-->
<!--          end-placeholder="结束日期"-->
<!--          align="right"-->
<!--          class="custom-date-picker">-->
<!--      </el-date-picker>-->
<!--    </div>-->
<!--    <div class="block">-->
<!--      <span style="font-size: 20px">-->
<!--       预测时长:-->
<!--      </span>-->
<!--      <el-date-picker-->
<!--          style="-->
<!--          height: 35px;-->
<!--           font-weight: bold;-->
<!--           background-color: #0f1325;"-->
<!--          v-model="value3"-->
<!--          type="datetimerange"-->
<!--          :picker-options="pickerOptions"-->
<!--          range-separator="至"-->
<!--          start-placeholder="开始日期"-->
<!--          end-placeholder="结束日期"-->
<!--          align="right"-->
<!--          class="custom-date-picker">-->
<!--      </el-date-picker>-->

<!--    </div>-->
<!--    <div class="block"> <el-button type="primary">确认时间</el-button></div>-->


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
      value3: '',
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

          axios.get('/api/power/get_button_left/fengone')
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
          },

        ],
        series: [
          {
            name: "贯通率",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 1,
            formatter: "{value}",
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
            itemStyle: {
              normal: {
                barBorderRadius: 5,

            color: "rgb(216,239,6)" ,


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

<style scoped>
.block {
  margin-top: 0.2rem;
  margin-left: 2rem;

}
.custom-date-picker .el-input__inner {
  font-weight: bold;
  color: #B4B4B4;
}
</style>

