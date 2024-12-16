<template>
  <div class="content">
    <div class="chn">飏凨智控</div>
    <div class="eng">WIND POWER PREDICTION SYSTEM</div>
    <el-button @click="gotosystem" type="primary" class="btnBegin"><i class="el-icon-circle-check"></i> 开始</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    gotosystem() {
      this.$router.push({ path: '/index' })
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  background-color: rgba(255, 255, 255, 0);
  /* 白色背景，50%透明度 */
  padding-left: 50px;
  /* 添加内边距以便更好地观察效果 */
  border-radius: 10px;
  /* 可选：为容器添加圆角 */

}

@font-face {
  font-family: "trushdex";
  //url: "";
  src: url("../../assets/fonts/trushdex-rvv0x.ttf");
}

@font-face {
  font-family: "sr";
  src: url("../../assets/fonts/SourceHanSansSC-Regular-2.otf");
}

.eng {
  font-family: "trushdex", serif;
  font-size: 0.6rem;
  color: #33cea0;
}

.chn {
  font-family: "sr", serif;
  font-size: 1.2rem;
  font-weight: bold;
  //color: #33cea0;
}

.btnBegin {
  font-size: 0.4rem;
  //padding: ;
  padding: 20px;
  //opacity: 0;
  background-color: rgb(255, 255, 255, 0);
  border: none;
  font-family: "sr", serif;
}
</style>
