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
              <span class="title-text">飏凨智控</span>
              <span style="font-family: trushdex;">yang feng zhi kong</span>
              <dv-decoration-6 class="title-bototm" :reverse="true" :color="['#50e3c2', '#67a1e5']"
                style="width:3.125rem;height:.1rem;" />
            </div>
            <dv-decoration-8 :reverse="true" :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;" />
          </div>
          <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" />
        </div>

        <!-- 标题选项层-->
        <div class="d-flex jc-between px-2">
          <div class="d-flex" style="width: 40%">
            <div class="react-right ml-4" style="width: 6.25rem; text-align: left;background-color: #0f1325;"
              @click="currentTab = 0" :class="{ 'active': currentTab === 0 }">
              <!--              <span class="react-before"></span>-->
              <span class="text fw-b" style="margin-left: 70px;">数据采集</span>
            </div>
            <div class="react-right ml-3" style="background-color: #0f1325;" @click="currentTab = 1"
              :class="{ 'active': currentTab === 1 }">
              <span class="text fw-b">图结构生成与风机数据</span>
            </div>
          </div>
          <div style="width: 40%" class="d-flex">
            <div class="react-left  mr-3 " style="background-color: #0f1325;" @click="currentTab = 2"
              :class="{ 'active': currentTab === 2 }">
              <span class="text fw-b">滚动预测</span>
            </div>
<!--            <div class="react-left mr-4" @click="currentTab = 4" :class="{ 'active': currentTab === 4 }"-->
<!--              style="width: 6.25rem; background-color: #0f1325; text-align: center;">-->
<!--              &lt;!&ndash;                          <span class="react-after"></span>&ndash;&gt;-->
<!--              <span class="text fw-b">中期预测</span>-->
<!--            </div>-->
            <div class="react-left mr-3" @click="currentTab = 3" :class="{ 'active': currentTab === 3 }"
              style="width: 6.25rem; background-color: #0f1325; text-align: right;">
              <!--              <span class="react-after"></span>-->
              <span class="text">{{ currentDateTime }}</span>
            </div>
          </div>
        </div>
        <!-- 身体部分1-->
        <div class="body-box" v-if="currentTab === 1" key="tab0">
          <!-- 第三行数据 -->
          <div class="content-box">
            <div class="LeftBottom">
              <div>
                <dv-border-box-13>
                  <div class="graph-background-wrapper">
                    <someFans v-show="show" style="z-index: 1;"></someFans> <!-- 背景组件 -->
                    <gra @changeShow="getshow" @updatePercent="getPercent" style="z-index: 2;"></gra> <!-- 前景组件 -->
                  </div>
                </dv-border-box-13>
              </div>
              <!--              <div style="display: grid;grid-template-columns: 1fr 3fr;">-->
              <!--                <dv-border-box-13>-->
              <!--&lt;!&ndash;                  <a>&ndash;&gt;-->
              <!--&lt;!&ndash;                    <fengji></fengji>&ndash;&gt;-->
              <!--&lt;!&ndash;                  </a>&ndash;&gt;-->
              <!--                </dv-border-box-13>-->
              <!--                <dv-border-box-13>-->
              <!--&lt;!&ndash;                  <bottomrightr></bottomrightr>&ndash;&gt;-->
              <!--                  &lt;!&ndash;                  <bottomleft></bottomleft>&ndash;&gt;-->
              <!--                  &lt;!&ndash;                  <fengji></fengji>&ndash;&gt;-->
              <!--                </dv-border-box-13>-->
              <!--              </div>-->
            </div>
            <div class="rightpage" style="display: grid;grid-template-rows:2.5fr 1fr; ">
              <dv-border-box-12>
                <bottomrightr></bottomrightr>
                <!-- <img src="../assets/gif/tu.gif" style="width:90%;height:90%;margin: 5%; border-radius: 30px;" /> -->
              </dv-border-box-12>
              <div style="display: grid;grid-template-columns: 1fr 1fr">
                <div style="display: grid;grid-template-rows:1fr 1fr">
                  <dv-percent-pond :config="config" style="width:100%;height:100%;" />
                  <div class="theMessage">
                    {{ theMessage }}
                  </div>

                </div>

                <dv-border-box-13>
                  <fengji></fengji>
                  <!-- <img src="../assets/gif/tu.gif" style="width:90%;height:90%;margin: 5%; border-radius: 30px;" /> -->
                </dv-border-box-13>
              </div>
            </div>
          </div>
        </div>
        <!-- 身体部分2-->
        <div class="body-box" v-if="currentTab === 0" key="tab1">
          <!-- 身体部分3-->
          <!-- 第四行数据 -->
          <div class="bototm-box2">
            <div class="leftpage">
              <dv-border-box-13>
                <modeltraining></modeltraining>
              </dv-border-box-13>
              <dv-border-box13>
<!--                <dv-loading v-if="chartLoad">等待数据上传...</dv-loading>-->
                <centerLeft1>
                </centerLeft1>
              </dv-border-box13>
              <!--              <dv-border-box-13>-->
              <!--                hi-->
              <!--              </dv-border-box-13>-->
            </div>
            <div class="rightpage">
              <dv-border-box-13>
<!--                <dv-loading v-if="chartLoad">等待数据上传...</dv-loading>-->
                <bottomleft >
                </bottomleft>
              </dv-border-box-13>
            </div>
          </div>
        </div>
        <div class="body-box" v-if="currentTab === 2" key="tab2">
          <div class="bototm-box3">
            <dv-border-box-13>
              <ThreeCenter key="gonglv" />
            </dv-border-box-13>
          </div>
        </div>
        <div class="body-box" v-if="currentTab === 3" key="tab3">
<!--          <dv-border-box13>-->
<!--            <second-center>-->
<!--            </second-center>-->
<!--          </dv-border-box13>-->
          <!--          <div class="tuvideo">-->
          <!--            <dv-border-box-13>-->
          <!--              <tuvideo></tuvideo>-->
          <!--              <div class="tag">-->
          <!--                <tagText @changeTab="handleChangeTab"></tagText>-->
          <!--              </div>-->
          <!--            </dv-border-box-13>-->
          <!--          </div>-->
        </div>
        <!--        <div class="body-box" v-if="currentTab === 4" key="tab4">-->
        <!--          <div class="tuvideo">-->
        <!--            <dv-border-box-13>-->
        <!--              <tuvideo></tuvideo>-->
        <!--              <div class="tag">-->
        <!--                <tagText @changeTab="handleChangeTab"></tagText>-->
        <!--              </div>-->
        <!--              &lt;!&ndash;            <img src="../assets/gif/tu.gif" style="width:90%;height:90%;margin: 5%; border-radius: 30px;" />&ndash;&gt;-->
        <!--            </dv-border-box-13>-->
        <!--          </div>-->
        <!--        </div>-->
<!--        <div class="body-box" v-if="currentTab === 4" key="tab4">-->
<!--          <dv-border-box13>-->
<!--            <medpre></medpre>-->
<!--          </dv-border-box13>-->
<!--        </div>-->

      </div>

    </dv-full-screen-container>
  </div>
</template>

<script>
import bottomrightr from "./bottomrightr.vue";
import ThreeCenter from "./ThreeCenter";
import Modeltraining from './modeltraining.vue';
import gra from './graph.vue';
import fengji from '../components/echart/centerLeft2/fengji.vue';
import bottomleft from "./bottomLeft.vue";
import centerLeft1 from "@/views/centerLeft1.vue";
// import tuvideo from "../components/video/video.vue";
// import tagText from "../components/dialog/tag.vue";
import someFans from "../components/someFans.vue";
// import secondCenter from "../views/secondCenter.vue"
// import medpre from "../views/medPre.vue"
import {EventBus} from "@/main";
export default {
  data() {
    return {
      loading: true,
      currentDateTime: "",
      currentTab: 0,
      show: true,
      // twoCharts: false,
      chartLoad: true,
      config: {
        value: 0,
      },
      theMessage: "等待构建图卷积网络结构...",
    };
  },
  components: {
    ThreeCenter,
    bottomrightr,
    Modeltraining,
    fengji,
    gra,
    centerLeft1,
    bottomleft,
    // tuvideo,
    // tagText,
    someFans,
    // secondCenter,
    // medpre,
  },
  mounted() {
    this.cancelLoading();
    this.getCurrentDateTime();
    setInterval(() => {
      this.getCurrentDateTime();
    }, 1000);
    EventBus.$on('updateTwoCharts', (value) => {
      this.chartLoad = false;
      this.twoCharts = value;
    });
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
    handleChangeTab(tab) {
      this.currentTab = tab;
    },
    getPercent(val) {
      this.config = { value: val };
      if (val >= 100) {
        this.theMessage = "构建完成！";
      }
      else {
        this.theMessage = "正在构建中！";
      }
    },
    getshow(val) {
      this.show = val;
    },
  }
};
</script>

<style lang="scss">
@import "../assets/scss/index.scss";

.active {
  background-color: #1E90FF;
  //border: 2px solid #ffffff; /* 白色边框 */
  //box-shadow: 0 0 8px #ffffff; /* 白色阴影，产生发亮效果 */
  border-color: #71E5FD;
  border-width: 3px;


}

.LeftBottom {
  display: grid;
  grid-template-rows: 1fr;

}

.rightpage {
  //height: 800px;
  height: 10.5rem;
}

.body-box {
  display: flex;
  height: 100%;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.leftpage {
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1.6fr;
}

.tuvideo {
  display: grid;
  padding-left: 5%;
  padding-right: 5%;
  height: 10.5rem;
}

.theMessage {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: large;
  font-weight: bold;
  color: #397D7A;
}

//.graph-background-wrapper {
//  position: relative;
//  height: 100%; /* 根据需要调整高度 */
//}
//
//.graph-background-wrapper > * {
//  width: 100%;
//  height: 100%;
//}
//
//.graph-background-wrapper > .someFans {
//  position: absolute;
//  top: 0;
//  left: 0;
//  z-index: 1; /* 确保背景在下方 */
//}
//
//.graph-background-wrapper > .gra {
//  position: absolute;
//  top: 0;
//  left: 0;
//  z-index: 2; /* 确保gra在someFans之上 */
//}

@font-face {
  font-family: "trushdex";
  //url: "";
  src: url("../assets/fonts/Poppins/Poppins-Bold.ttf");
}
</style>
