<template>
  <div>
    <div class="container">
      <div class="leftText">
        <el-tag>
          模型基于图卷积网络单元AGCRNcell
        </el-tag>
        <div>
          首先，设计动态图生成器，同时捕获风力发电机组之间的空间相关性和时间相关性，并将相关参数转化为动态邻接矩阵。随着模型训练，该矩阵随时间演化，可以更准确地表示风机之间的依赖关系。将动态图作为AGCRNcell的辅助特征，将风电数据输入AGCRNcell接下来，我们将生成的动态邻接矩阵进行稀疏化处理，从而聚焦重要的时空特征，忽略噪声数据，从而提高模型预测性能。
        </div>
      </div>
      <el-button class="tagBtn" @click="notify">尝试一下<i class="el-icon-d-arrow-right"></i></el-button>

    </div>
  </div>


</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  //flex-direction: column; /* 子元素垂直排列 */
  //align-items: center; /* 子元素水平居中 */
}
.tagBtn {
  margin-top: 1rem;
  margin-left: 150px;
  margin-right: 20px;
  //margin-bottom: 20px;
  padding:5px;
  width: 100px;
  height: 50px;
  background-color: #409EFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;


}
.leftText {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 2.6rem;
  font-weight: bold;
  font-size: medium; /* 假设这等同于 16px */
  line-height: 1.5; /* 使用相对单位，基于字体大小自动调整 */
}
</style>
<script>
export default {
  methods: {
    notify(){
      this.$emit('changeTab', 2);
    }
  }



}

</script>