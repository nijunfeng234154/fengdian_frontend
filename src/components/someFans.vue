<template>
    <div class="grid-container">
      <fengji v-for="n in 12" :key="n" style="position: relative;"></fengji>
    </div>
  </template>



<style scoped></style>

<script>
import fengji from "./echart/centerLeft2/fengji.vue";
export default {
    components: {
        fengji,
    }
};


</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 定义四列，每列占据容器宽度的等分 */
  grid-template-rows: repeat(3, auto); /* 定义三行，每行高度根据内容自动调整 */
  gap: 120px; /* 定义单元格之间的间隙 */
  /* 可选：定义一些padding和其他样式来美化布局 */
  padding-top: 200px;
  //padding: 20px;
}
</style>