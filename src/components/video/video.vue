<template>
  <div>
    <video class="tuVideo" loop muted @click="toggleVideo">
      <source src="../../assets/videos/tu.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
<!--    <el-tag class="tag">AGCRNcell</el-tag>-->
<!--    <el-tag>-->
<!--      首先，设计动态图生成器，同时捕获风力发电机组之间的空间相关性<br>-->
<!--      和时间相关性，并将相关参数转化为动态邻接矩阵。随着模型训练，该矩阵随时间演化，<br>-->
<!--      可以更准确地表示风机之间的依赖关系。将动态图作为AGCRNcell的辅助特征，将风电<br>-->
<!--      数据输入AGCRNcell接下来，我们将生成的动态邻接矩阵进行稀疏化处理，从而聚焦重要的时空特征<br>-->
<!--      ，忽略噪声数据，从而提高模型预测性能。-->
<!--    </el-tag>-->

<!--    <div>hi</div>-->
<!--    <div>hi</div>-->
  </div>
</template>
<style scoped>
body,
html {
  overflow: hidden;
  /* 防止滚动条出现 */
}

.tuVideo {

  width: 100%;
  height: 8rem;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 1%;
  //padding-bottom: 1%;
  border-radius: 20px;
  /* border: none; */
  /* 
  /* object-fit: cover; */
  /* margin-top: 30px; */
}


</style>

<script>
export default {
  methods: {
    toggleVideo(event) {
      const video = event.target;
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  }
}
</script>