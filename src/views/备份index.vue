<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;" />
            <div class="title">
              <span class="title-text">大数据可视化平台</span>
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

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex" style="width: 40%">
            <div
              class="react-right ml-4"
              style="width: 6.25rem; text-align: left;background-color: #0f1325;"
            >
              <span class="react-before"></span>
              <span class="text">数据分析1</span>
            </div>
            <div class="react-right ml-3" style="background-color: #0f1325;">
              <span class="text colorBlue">数据分析2</span>
            </div>
          </div>
          <div style="width: 40%" class="d-flex">
            <div class="react-left bg-color-blue mr-3">
              <span class="text fw-b">vue-big-screen</span>
            </div>
            <div
              class="react-left mr-4"
              style="width: 6.25rem; background-color: #0f1325; text-align: right;"
            >
              <span class="react-after"></span>
              <span class="text">{{currentDateTime}}</span>
            </div>
          </div>
        </div>

        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box">
            <div>
              <dv-border-box-12>
                <centerLeft1 />
              </dv-border-box-12>
            </div>
            <div>
              <dv-border-box-12>
                <centerLeft2 />
              </dv-border-box-12>
            </div>
            <!-- 中间 -->
            <div>
              <center />
            </div>
            <!-- 中间 -->
            <div>
              <centerRight2 />
            </div>
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
<!--            <dv-border-box-12>-->
<!--              <bottomRight />-->
<!--            </dv-border-box-12>-->
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import centerLeft1 from "./centerLeft1";
import centerLeft2 from "./centerLeft2";
import centerRight1 from "./centerRight1";
import centerRight2 from "./centerRight2";
import center from "./center";
import bottomLeft from "./bottomLeft";
// import bottomRight from "./bottomRight";
export default {
  data() {
    return {
      loading: true,
      currentDateTime: "",
    };
  },
  components: {
    centerLeft1,
    centerLeft2,
    centerRight1,
    centerRight2,
    center,
    bottomLeft,
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
</style>
