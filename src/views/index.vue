<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
<!--     最外层-->
      <div v-else class="host-body">

        <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;" />
            <div class="title">
              <span class="title-text">风电功率预测系统</span>
              <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
                style="width:3.125rem;height:.1rem;"
              />
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#568aea', '#000000']"
              style="width:2.5rem;height:.625rem;"
            />
          </div>
          <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" />
        </div>

        <!-- 标题选项层-->
        <div class="d-flex jc-between px-2">
          <div class="d-flex" style="width: 40%">
            <div
              class="react-right ml-4"
              style="width: 6.25rem; text-align: left;background-color: #0f1325;"
              @click="currentTab = 0"
              :class="{ 'active': currentTab === 0 }"
            >
              <span class="react-before"></span>
              <span class="text" style="margin-left: 70px;">数据分析</span>
            </div>
            <div class="react-right ml-3" style="background-color: #0f1325;"
                 @click="currentTab = 1"
                 :class="{ 'active': currentTab === 1 }"
            >
              <span class="text">滚动预测</span>
            </div>
          </div>
          <div style="width: 40%" class="d-flex"

          >
            <div class="react-left  mr-3"             @click="currentTab = 2"
                 :class="{ 'active': currentTab === 2 }">
              <span class="text fw-b">实时预测</span>
            </div>
            <div
              class="react-left mr-4"
              @click="currentTab = 3"
              :class="{ 'active': currentTab === 3}"
              style="width: 6.25rem; background-color: #0f1325; text-align: right;"
            >
              <span class="react-after"></span>
              <span class="text">{{currentDateTime}}</span>
            </div>
          </div>
        </div>
        <!-- 身体部分1-->
        <div class="body-box" v-if="currentTab === 0">
          <!-- 第三行数据 -->
          <div class="content-box">
            <div>
              <dv-border-box-12>
                <centerLeft1 />
              </dv-border-box-12>
            </div>

            <div>
              <center />
            </div>
            <!-- 中间 -->

            <div>
              <dv-border-box-13>
                <centerRight1 />
              </dv-border-box-13>
            </div>
          </div>

          <!-- 第四行数据 -->
          <div class="bototm-box">
            <dv-border-box-13>
              <bottomLeft />
            </dv-border-box-13>

          </div>
        </div>
        <!-- 身体部分2-->
        <div class="body-box" v-if="currentTab === 1">
          <!-- 身体部分3-->
          <!-- 第四行数据 -->
          <div class="bototm-box2">
            <dv-border-box-13>
              <secondCenter/>
            </dv-border-box-13>

          </div>
        </div>
        <div class="body-box" v-if="currentTab === 2">
          <div class="bototm-box2">
            <dv-border-box-13>
              <ThreeCenter/>
            </dv-border-box-13>

          </div>
        </div>


        <div class="body-box" v-if="currentTab === 3">

        </div>

      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import centerLeft1 from "./centerLeft1";
// import centerLeft2 from "./centerLeft2";
import centerRight1 from "./centerRight1";
// import centerRight2 from "./centerRight2";
import center from "./center";
import bottomLeft from "./bottomLeft";
import secondCenter from "./secondCenter";
import ThreeCenter from "./ThreeCenter";
// import bottomLeft2 from "./bottomLeft2";

// import bottomRight from "./bottomRight";
export default {
  data() {
    return {
      loading: true,
      currentDateTime: "",
      currentTab: 0,
    };
  },
  components: {
    ThreeCenter,
    centerLeft1,
    // centerLeft2,
    centerRight1,
    // centerRight2,
    center,
    bottomLeft,
    secondCenter,

    // bottomLeft2,
    // bottomRight
  },
  mounted() {
    this.cancelLoading();
    this.getCurrentDateTime();
    setInterval(() => {
      this.getCurrentDateTime();
    }, 1000);
  },
  methods: {
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    getCurrentDateTime() {
      const date = new Date();
      const year = date.getFullYear();
      const month = this.addZero(date.getMonth() + 1);
      const day = this.addZero(date.getDate());
      const week = this.getWeekday(date.getDay());
      const hours = this.addZero(date.getHours());
      const minutes = this.addZero(date.getMinutes());
      this.currentDateTime = `${year}年${month}月${day}日 ${week} ${hours}:${minutes}`;
    },
    addZero(num) {
      return num < 10 ? `0${num}` : num;
    },
    getWeekday(day) {
      const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      return weekdays[day];
    },
  }
};
</script>

<style lang="scss">
@import "../assets/scss/index.scss";
.active {
  background-color: #1E90FF;
}
</style>
