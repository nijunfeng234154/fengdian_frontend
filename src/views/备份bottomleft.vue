<template>
  <div id="bottomLeft">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex" @click="activeModule = 0" :style="{ color: activeModule === 0 ? '#5cd9e8' : '#fff' }">
          <span>
            <icon name="chart-bar"></icon>
          </span>
          <span class="fs-xl text mx-2" :style="{ color: activeModule === 0 ? '#5cd9e8' : '#fff' }">风机1</span>
        </div>
        <div class="d-flex" @click="activeModule = 1" :style="{ color: activeModule === 1 ? '#5cd9e8' : '#fff' }">
          <span>
            <icon name="chart-bar"></icon>
          </span>
          <span class="fs-xl text mx-2" :style="{ color: activeModule === 1 ? '#5cd9e8' : '#fff' }">风机2</span>
        </div>
        <div class="d-flex" @click="activeModule = 2" :style="{ color: activeModule === 2 ? '#5cd9e8' : '#fff' }">
          <span>
            <icon name="chart-bar"></icon>
          </span>
          <span class="fs-xl text mx-2" :style="{ color: activeModule === 2 ? '#5cd9e8' : '#fff' }">风机3</span>
        </div>
        <div class="d-flex" @click="activeModule = 3" :style="{ color: activeModule === 3 ? '#5cd9e8' : '#fff' }">
          <span>
            <icon name="chart-bar"></icon>
          </span>
          <span class="fs-xl text mx-2" :style="{ color: activeModule === 3 ? '#5cd9e8' : '#fff' }">风机4</span>
        </div>
        <div class="d-flex" @click="activeModule = 4" :style="{ color: activeModule === 4 ? '#5cd9e8' : '#fff' }">
          <span>
            <icon name="chart-bar"></icon>
          </span>
          <span class="fs-xl text mx-2" :style="{ color: activeModule === 4 ? '#5cd9e8' : '#fff' }">风机5</span>
        </div>
        <div class="d-flex" @click="activeModule = 5" :style="{ color: activeModule === 5 ? '#5cd9e8' : '#fff' }">
          <span>
            <icon name="chart-bar"></icon>
          </span>
          <span class="fs-xl text mx-2" :style="{ color: activeModule === 5 ? '#5cd9e8' : '#fff' }">风机6</span>
        </div>
        <div class="d-flex" @click="activeModule = 6" :style="{ color: activeModule === 6 ? '#5cd9e8' : '#fff' }">
          <span>
            <icon name="chart-bar"></icon>
          </span>
          <span class="fs-xl text mx-2" :style="{ color: activeModule === 6 ? '#5cd9e8' : '#fff' }">风机7</span>
        </div>
        <div class="d-flex" @click="activeModule = 7" :style="{ color: activeModule === 7 ? '#5cd9e8' : '#fff' }">
          <span>
            <icon name="chart-bar"></icon>
          </span>
          <span class="fs-xl text mx-2" :style="{ color: activeModule === 7 ? '#5cd9e8' : '#fff' }">风机8</span>
        </div>
        <div class="d-flex" @click="activeModule = 8" :style="{ color: activeModule === 8 ? '#5cd9e8' : '#fff' }">
          <span>
            <icon name="chart-bar"></icon>
          </span>
          <span class="fs-xl text mx-2" :style="{ color: activeModule === 8 ? '#5cd9e8' : '#fff' }">风机9</span>
        </div>
        <div class="d-flex" @click="activeModule =9" :style="{ color: activeModule === 9 ? '#5cd9e8' : '#fff' }">
          <span>
            <icon name="chart-bar"></icon>
          </span>
          <span class="fs-xl text mx-2" :style="{ color: activeModule === 9 ? '#5cd9e8' : '#fff' }">风机10</span>
        </div>
      </div>
      <div v-if="activeModule === 0">
        <bottomLeftChart />
      </div>
      <div v-if="activeModule === 1">
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
      </div>
    </div>
  </div>
</template>

<script>
import bottomLeftChart from "@/components/echart/bottom/bottomLeftChart";
import bottomLeftChart1 from "@/components/echart/bottom/bottomLeftChart1";
import bottomLeftChart2 from "@/components/echart/bottom/bottomLeftChart2";
import bottomLeftChart3 from "@/components/echart/bottom/bottomLeftChart3";
import bottomLeftChart4 from "@/components/echart/bottom/bottomLeftChart4";
import bottomLeftChart5 from "@/components/echart/bottom/bottomLeftChart5";
import bottomLeftChart6 from "@/components/echart/bottom/bottomLeftChart6";
import bottomLeftChart7 from "@/components/echart/bottom/bottomLeftChart7";
import bottomLeftChart8 from "@/components/echart/bottom/bottomLeftChart8";
import bottomLeftChart9 from "@/components/echart/bottom/bottomLeftChart9";

export default {
  data() {
    return {
      activeModule: 0
    };
  },
  components: {
    bottomLeftChart,
    bottomLeftChart1,
    bottomLeftChart2,
    bottomLeftChart3,
    bottomLeftChart4,
    bottomLeftChart5,
    bottomLeftChart6,
    bottomLeftChart7,
    bottomLeftChart8,
    bottomLeftChart9
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.active {
  background-color: #5cd9e8;
  border: 1px solid #fff;
}

#bottomLeft {
  padding: 0.3rem 0.2rem;
  height: 6.5rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 6.0625rem;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  }
  .chart-box {
    margin-top: 0.2rem;
    width: 2.125rem;
    height: 2.125rem;
    .active-ring-name {
      padding-top: 0.125rem;
    }
  }
}
</style>
