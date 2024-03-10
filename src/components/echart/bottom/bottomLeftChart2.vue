<template>
  <div>
    <div>
      <label>
        <input type="checkbox" v-model="useNormalizedData">显示归一化数据
      </label>
    </div>
    <div id="bottomLeftChart" style="width:100%;height:6.0rem;"></div>
  </div>
</template>
<script>
import echartMixins from "@/utils/resizeMixins";
import {normalizeData} from  "@/utils/bottomleft";
import axios from 'axios';

export default {
  data() {
    return {
      chart: null,
      timeList: [],
      windspeedList: [],
      prepowerList: [],
      pressureList: [],
      roundWsList: [],
      roundPowerList: [],
      yd15List: [],
      useNormalizedData: false // 默认显示原始数据
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
            const [timeList, windspeedList, prepowerList,  pressureList, roundWsList, roundPowerList, yd15List] = response.data;
            this.timeList = timeList;
            this.windspeedList = windspeedList;
            this.prepowerList = prepowerList;
            this.pressureList = pressureList;
            this.roundWsList = roundWsList;
            this.roundPowerList = roundPowerList;
            this.yd15List = yd15List;
            this.draw();
          })
          .catch(error => {
            console.log(error);
          });
    },

    draw() {
      this.chart = this.$echarts.init(document.getElementById("bottomLeftChart"));

      // Normalize data
      const normalizedWindspeedList = normalizeData(this.windspeedList);
      const normalizedPrepowerList = normalizeData(this.prepowerList);
      const normalizedPressureList = normalizeData(this.pressureList);
      const normalizedRoundWsList = normalizeData(this.roundWsList);
      const normalizedRoundPowerList = normalizeData(this.roundPowerList);
      const normalizedYd15List = normalizeData(this.yd15List);

      let option = {
        // ...
        yAxis: [
          {
            type: "value",
            name: "WINDSPEED",
            nameTextStyle: {
              color: "#B4B4B4"
            },
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },
            axisLabel: {
              formatter: "{value} ",
              textStyle: {
                color: "#B4B4B4"
              }
            }
          },
          {
            type: "value",
            name: "PREPOWER/PRESSURE/ROUND_ws/ROUND_power/YD15",
            nameTextStyle: {
              color: "#B4B4B4"
            },
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },
            axisLabel: {
              formatter: "{value} ",
              textStyle: {
                color: "#B4B4B4"
              }
            }
          }
        ],
        series: [
          {
            name: "WINDSPEED",
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
            data: normalizedWindspeedList
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
            data: normalizedPrepowerList
          },
          {
            name: "PRESSURE",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 1,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#7B68EE"
              }
            },
            data: normalizedPressureList
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
            data: normalizedRoundWsList
          },
          {
            name: "ROUND_power",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 1,
            yAxisIndex: 1,
            itemStyle: {
              normal:{
                color: "#FF4500"
              }
            },
            data: normalizedRoundPowerList
          },
          {
            name: "YD15",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 1,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#32CD32"
              }
            },
            data: normalizedYd15List
          }
        ]
      };

      this.chart.setOption(option);
    },
  }
};
</script>

<style scoped>
/* No specific styles defined */
</style>
