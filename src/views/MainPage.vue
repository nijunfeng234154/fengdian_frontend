<script>
import bigTittle from '@/components/MainPage/BigTittle.vue'
export default {
  data() {
    return {
      isBlurred: false
    }
  },
  components: {
    bigTittle
  }
}
</script>

<template>
  <!--  <div :class="{'blur-effect': isBlurred}">-->
  <div>
        <video class="bg-video" autoplay loop muted>
          <source src="../assets/videos/begin.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
<!--    <img src="../assets/fd_img/风电机器2.png" class="bg-video"  alt="#"/>-->
    <div class="banner"></div>
    <bigTittle class="mainTittle"></bigTittle>
  </div>
</template>

<style scoped lang="scss">
body,
html {
  height: 100%;
  margin: 0;
  overflow: hidden;
  /* 防止滚动条出现 */
}

.bg-video {
  position: fixed;
  top: 0;
  /* 添加top和left属性以确保视频从页面左上角开始 */
  left: 0;
  width: 100%;
  /* 使用width和height代替min-width和min-height可以确保视频填满整个屏幕 */
  height: 100%;
  object-fit: cover;
  /* 确保视频内容被适当地裁剪以填满元素的整个容器 */
  z-index: -1;
}

.mainTittle {
  position: absolute;
  //left: 50%; /* 为了使transform正确工作，需要添加left属性 */
  top: 30%;
  //transform: translate(-50%, -50%);
  color: white;
  //font-size: 0.8rem;
  line-height: 1rem;
  text-align: center;
}

.banner {
  position: fixed;
  top: 0;
  /* 添加top和left属性以确保视频从页面左上角开始 */
  left: 0;
  width: 100%;
  /* 使用width和height代替min-width和min-height可以确保视频填满整个屏幕 */
  height: 100%;
  object-fit: cover;
  /* 确保视频内容被适当地裁剪以填满元素的整个容器 */
  z-index: 0;
  background-color: black;
  opacity: 0.2;
}
</style>