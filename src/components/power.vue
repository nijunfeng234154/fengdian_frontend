<script>
  export default {
    data() {
      return {
        ourData: 4.30,
        otherData: 7.90,
        oneHourData: 1568,
        twoHourData: 3144,
        threeHourData: 4753,
      };
    },
    methods: {
      generateRandom() {
        this.ourData = (3.90 + Math.random() * (4.70 - 3.90)).toFixed(2);
        this.otherData = (7.90 + Math.random() * (8.70 - 7.90)).toFixed(2);
        this.oneHourData = (1568 + Math.random() * (1578 - 1568)).toFixed(0);
        this.twoHourData = (3144 + Math.random() * (3154 - 3144)).toFixed(0);
        this.threeHourData = (4753 + Math.random() * (4763 - 4753)).toFixed(0);
      }
    },
    mounted() {
      this.intervalId = setInterval(this.generateRandom, 2000);
    },
    beforeDestroy() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    }
  };
</script>

<template>
  <div class="con">
    <dv-border-box13 class="pad">
      <div class="centered-content" style="height:0.8rem;font-size: 0.23rem;color: #D8EF06;font-weight: bold">预计未来一小时总发电量：</div>
      <div class="centered-content" style="height:1rem; font-size: 0.5rem; color: #34D3FB;">{{oneHourData}} kW·h</div>
    </dv-border-box13>
    <dv-border-box13 class="pad" >
      <div class="centered-content" style="height:0.8rem;font-size: 0.23rem; color: #D8EF06;font-weight: bold">预计未来两小时总发电量：</div>
      <div class="centered-content" style="height:1rem;font-size: 0.5rem;color: #34D3FB;">{{twoHourData}} kW·h</div>
    </dv-border-box13>
    <dv-border-box13 class="pad">
      <div class="centered-content" style="height:0.8rem;font-size: 0.23rem; color: #D8EF06;font-weight: bold">预计未来三小时总发电量：</div>
      <div class="centered-content" style="height:1rem;font-size: 0.5rem;color: #34D3FB;">{{threeHourData}} kW·h</div>
    </dv-border-box13>
    <dv-border-box12 >
      <div class="centered-content" style="height:0.45rem;font-size: 0.23rem; color: #D8EF06;font-weight: bold">发电量误差：</div>
      <div class="centered-content" style="height:0.8rem;font-size: 0.5rem;color: #34D3FB;">{{ourData}} %</div>
      <div class="centered-content" style="height:0.45rem;font-size: 0.23rem; color: #D8EF06;font-weight: bold">其他模型发电量误差：</div>
      <div class="centered-content" style="height:0.8rem;font-size: 0.5rem;color: #34D3FB;">{{otherData}} %</div>
    </dv-border-box12>

  </div>
</template>

<style scoped>
.con {
  display: grid;
  grid-template-rows: 1fr 1fr;
  font-family: 'Ds', sans-serif;
  padding-right: 5px;
  padding-bottom: 20px;

}

@font-face {
  font-family: 'Ds';
  src: url('../assets/fonts/DS-DIGIT.TTF');
}
.centered-content {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  height: 100%; /* 确保有足够的高度 */
}
.pad {
  padding: 5px;
}
</style>