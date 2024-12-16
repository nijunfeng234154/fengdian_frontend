<template>
  <div id="bottomLeft2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex" @click="activeModule = 0" :style="{ color: activeModule === 0 ? '#5cd9e8' : '#fff' }">
          <span>
            <icon name="chart-bar"></icon>
          </span>
<!--          <span class="fs-xl text mx-2" :style="{ color: activeModule === 0 ? '#5cd9e8' : '#fff' }">新风机</span>-->
        </div>
      </div>
      <div v-if="activeModule === 0">
        <bottomLeftChart />
      </div>
      <!-- <div v-if="activeModule === 1">
        <bottomLeftChart1 />
      </div>
      <div v-if="activeModule === 2">
        <bottomLeftChart2 />
      </div>
      <div v-if="activeModule === 3">
        <bottomLeftChart3 />
      </div>
      <div v-if="activeModule === 4">
        <bottomLeftChart4 />
      </div>
      <div v-if="activeModule === 5">
        <bottomLeftChart5 />
      </div>
      <div v-if="activeModule === 6">
        <bottomLeftChart6 />
      </div>
      <div v-if="activeModule === 7">
        <bottomLeftChart7 />
      </div>
      <div v-if="activeModule === 8">
        <bottomLeftChart8 />
      </div>
      <div v-if="activeModule === 9">
        <bottomLeftChart9 />
      </div> -->
    </div>
  </div>
</template>

<script>

import bottomLeftChart from "@/components/echart/second/bottomLeftChart";
// import bottomLeftChart1 from "@/components/echart/second/bottomLeftChart1";
// import bottomLeftChart2 from "@/components/echart/second/bottomLeftChart2";
// import bottomLeftChart3 from "@/components/echart/second/bottomLeftChart3";
// import bottomLeftChart4 from "@/components/echart/second/bottomLeftChart4";
// import bottomLeftChart5 from "@/components/echart/second/bottomLeftChart5";
// import bottomLeftChart6 from "@/components/echart/second/bottomLeftChart6";
// import bottomLeftChart7 from "@/components/echart/second/bottomLeftChart7";
// import bottomLeftChart8 from "@/components/echart/second/bottomLeftChart8";
// import bottomLeftChart9 from "@/components/echart/second/bottomLeftChart9";

export default {
  data() {
    return {
      activeModule: 0,
      dateRange: [], // add a data property to store the selected date range

    };
  },
  components: {

    bottomLeftChart,
    // bottomLeftChart1,
    // bottomLeftChart2,
    // bottomLeftChart3,
    // bottomLeftChart4,
    // bottomLeftChart5,
    // bottomLeftChart6,
    // bottomLeftChart7,
    // bottomLeftChart8,
    // bottomLeftChart9,

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
  height: 9.5rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;

  .bg-color-black {
    height: 9.0625rem;
    border-radius: 0.125rem;
  }

  .text {
    color: #c3cbde;
  }

  .chart-box {
    margin-top: 1rem;
    width: 2.125rem;
    height: 2.125rem;

    .active-ring-name {
      padding-top: 0.125rem;
    }
  }
}

.module-item {
  height: 50px;
}

.module-item .text {
  font-size: 18px;
}

.module-item icon {
  font-size: 50px;
}
</style>
