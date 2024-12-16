<template>
  <div id="bottomLeft2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex" @click="activeModule = 0" :style="{ color: activeModule === 0 ? '#5cd9e8' : '#fff' }">
<!--          <span style="color:#5cd9e8">-->
<!--            <i class="el-icon-data-line"></i>-->
<!--          </span>-->
<!--          <span class="fs-xl text mx-2" :style="{ color: activeModule === 0 ? '#5cd9e8' : '#fff' }">风电功率曲线</span>-->
        </div>
      </div>
      <div v-if="activeModule === 0">
        <bottomLeftChart />
      </div>
    </div>
  </div>
</template>

<script>

import bottomLeftChart from "@/components/echart/three/bottomLeftChart";

export default {
  data() {
    return {
      activeModule: 0,
      dateRange: [], // add a data property to store the selected date range

    };
  },
  components: {

    bottomLeftChart,

  },
  mounted() { },
  methods: {
    handleDateChange(value) {
      console.log('Selected date range:', value);
      // You can use the selected date range to filter data or update the chart accordingly
    }

  }
};
</script>

<style lang="scss">
.active {
  background-color: #5cd9e8;
  border: 1px solid #fff;
}

#bottomLeft2 {
  padding: 0.3rem 0.2rem;
  height: 10rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;

  .bg-color-black {
    height: 10rem;
    border-radius: 0.125rem;
  }

  .text {
    color: #c3cbde;
  }

  .chart-box {
    //margin-top: 1rem;
    width: 2.125rem;
    height: 2.125rem;

    .active-ring-name {
      padding-top: 0.125rem;
    }
  }
}

.module-item {
  height: 30px;
}

.module-item .text {
  font-size: 18px;
}

.module-item icon {
  font-size: 50px;
}
</style>
