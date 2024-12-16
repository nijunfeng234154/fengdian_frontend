<template>
  <div>
    <div class="app" style="width:100%;height:100%;padding: 2%;">
      <!--      <button>点击我</button>-->
      <canvas ref="canvasElement" />
    </div>

    <div class="actions">
      <div>
        <el-tag class="actions-header">动态图结构生成:</el-tag>
      </div>

      <!--      <div ></div>-->
      <el-button class="action" id="pause" @click="init">初始化</el-button>
      <el-button class="action" id="pause" @click="togglePause">{{ pauseText }}</el-button>
      <el-button class="action" id="fit-view" @click="fitView">适应屏幕</el-button>
      <el-button class="action" id="zoom" @click="zoomIn">变焦到节点</el-button>
      <el-button class="action" id="select-point" @click="selectPoint">选择一个节点</el-button>
      <el-button class="action" id="select-points-in-area" @click="selectPointsInArea">
        在矩形区域内选择点
      </el-button>
    </div>
  </div>
</template>

<script>
// import { nodes, links } from "./data-gen";
import { Graph } from "@cosmograph/cosmos";
// import axios from "axios";
// import cosmograph from "@cosmograph/c";
export default {
  data() {
    return {
      intervalId: null,
      graph: null,
      canvas: null,
      config: {
        backgroundColor: "#151515",
        opacity: 0.8,
        // nodeSize: 15,
        // nodeColor: "#4B5BBF",
        nodeGreyoutOpacity: 0.1,
        // linkWidth: 2,
        // linkWidth={(link) => link.value || 1}
        linkWidth: (link) => link.value || 1,
        nodeSize: (node) => node.size,
        nodeColor: (node) => node.color,
        nodeLabelAccessor: (node) => node.id || '未命名节点',
        linkColor: "#F781C6",
        linkArrows: false,
        linkGreyoutOpacity: 0,
        curvedLinks: false,
        renderHoveredNodeRing: true,
        hoveredNodeRingColor: "#4B5BBF",
        showTopLabels: true,
        showHoveredNodeRing: true,
        showDynamicLabels: true,
        // showLabelsFor: [{ id: "node1" }, { id: "node2" }],

        simulation: {
          linkDistance: 100,
          linkSpring: 2,
          repulsion: 0.2,
          gravity: 0.06,
          decay: 100000
        },
        events: {
        }
      },
      isPaused: false,
      pauseText: "停止",
      nodes: [],
      links: []
    };
  },
  mounted() {
    this.fetchDataAndProcess().then(() => {
      // this.init();
      // // 设置一个定时器，10秒后执行this.hi()
      // setTimeout(() => {
      //   this.pause();
      // }, 10000); // 10000毫秒后执行
    });
  },
  methods: {
    async fetchDataAndProcess() {
      // try {
      //   const response = await axios.post(`/api/power/chart_cartoon`, {}, {
      //     headers: {'Content-Type': 'application/json'}
      //   });
      this.nodes = [
        { id: '1', size: 10, color: "#4B5BBF" },
        { id: '2', size: 18, color: "#4B5BBF" },
        { id: '3', size: 17, color: "#4B5BBF" },
        { id: '4', size: 12, color: "#4B5BBF" },
        { id: '5', size: 10, color: "#4B5BBF" },
        { id: '6', size: 19, color: "#4B5BBF" },
        { id: '7', size: 17, color: "#4B5BBF" },
        { id: '8', size: 10, color: "#4B5BBF" },
        { id: '9', size: 19, color: "#4B5BBF" },
        { id: '10', size: 10, color: "#4B5BBF" },
        { id: '11', size: 19, color: "#4B5BBF" },
        { id: '12', size: 10, color: "#4B5BBF" },
        { id: '13', size: 17, color: "#4B5BBF" },
        { id: '14', size: 17, color: "#4B5BBF" },
        { id: '15', size: 12, color: "#4B5BBF" },
        { id: '16', size: 11, color: "#4B5BBF" },
        { id: '17', size: 11, color: "#4B5BBF" },
        { id: '18', size: 14, color: "#4B5BBF" },
        { id: '19', size: 19, color: "#4B5BBF" },
        { id: '20', size: 18, color: "#79F4B9" },
        { id: '21', size: 10, color: "#79F4B9" },
        { id: '22', size: 19, color: "#79F4B9" },
        { id: '23', size: 18, color: "#79F4B9" },
        { id: '24', size: 19, color: "#79F4B9" },
        { id: '25', size: 10, color: "#79F4B9" },
        { id: '26', size: 12, color: "#79F4B9" },
        { id: '27', size: 14, color: "#79F4B9" },
        { id: '28', size: 15, color: "#79F4B9" },
        { id: '29', size: 20, color: "#79F4B9" },
        { id: '30', size: 12, color: "#79F4B9" },
        { id: '31', size: 14, color: "#79F4B9" },
        { id: '32', size: 13, color: "#79F4B9" },
        { id: '33', size: 15, color: "#79F4B9" },
        { id: '34', size: 18, color: "#79F4B9" },
        { id: '35', size: 19, color: "#79F4B9" },
        { id: '36', size: 18, color: "#79F4B9" },
        { id: '37', size: 17, color: "#79F4B9" },
        { id: '38', size: 18, color: "#79F4B9" },
        { id: '39', size: 19, color: "#FFD04C" },
        { id: '40', size: 10, color: "#FFD04C" },
        { id: '41', size: 12, color: "#FFD04C" },
        { id: '42', size: 13, color: "#FFD04C" },
        { id: '43', size: 11, color: "#FFD04C" },
        { id: '44', size: 12, color: "#FFD04C" },
        { id: '45', size: 12, color: "#FFD04C" },
        { id: '46', size: 15, color: "#FFD04C" },
        { id: '47', size: 14, color: "#FFD04C" },
        { id: '48', size: 12, color: "#FFD04C" },
        { id: '49', size: 11, color: "#FFD04C" },
        { id: '50', size: 12, color: "#FFD04C" },
        { id: '51', size: 19, color: "#FFD04C" },
        { id: '52', size: 19, color: "#FFD04C" },
        { id: '53', size: 10, color: "#FFD04C" },
        { id: '54', size: 19, color: "#FFD04C" },
        { id: '55', size: 10, color: "#FFD04C" },
        { id: '56', size: 23, color: "#79F4B9" },
        { id: '57', size: 34, color: "#79F4B9" },
        { id: '58', size: 19, color: "#79F4B9" },
        { id: '59', size: 17, color: "#79F4B9" },
        { id: '60', size: 19, color: "#79F4B9" },
        { id: '61', size: 19, color: "#4B5BBF" },
        { id: '62', size: 10, color: "#4B5BBF" },
        { id: '63', size: 18, color: "#4B5BBF" },
        { id: '64', size: 19, color: "#4B5BBF" },
        { id: '65', size: 19, color: "#4B5BBF" },
        { id: '66', size: 10, color: "#4B5BBF" },
        { id: '67', size: 18, color: "#4B5BBF" },
        { id: '68', size: 18, color: "#4B5BBF" },
        { id: '69', size: 17, color: "#4B5BBF" },
        { id: '70', size: 17, color: "#4B5BBF" },
        { id: '71', size: 17, color: "#4B5BBF" },
        { id: '72', size: 17, color: "#4B5BBF" },
        { id: '73', size: 18, color: "#4B5BBF" },
        { id: '74', size: 19, color: "#4B5BBF" },
        { id: '75', size: 12, color: "#4B5BBF" },
        { id: '76', size: 14, color: "#4B5BBF" },


      ]

      this.links = [
        { source: '1', target: '2', value: 2 },
        { source: '1', target: '3', value: 2 },
        { source: '1', target: '4', value: 2 },
        { source: '1', target: '5', value: 2 },
        { source: '1', target: '6', value: 3 },
        { source: '2', target: '7', value: 5 },
        { source: '2', target: '8', value: 2 },
        { source: '2', target: '9', value: 2 },
        { source: '2', target: '10', value: 2 },
        { source: '3', target: '11', value: 4 },
        { source: '3', target: '12', value: 2 },
        { source: '3', target: '13', value: 2 },
        { source: '3', target: '14', value: 2 },
        { source: '3', target: '15', value: 2 },
        { source: '4', target: '16', value: 2 },
        { source: '4', target: '17', value: 2 },
        { source: '4', target: '18', value: 3 },
        { source: '4', target: '19', value: 2 },
        { source: '5', target: '20', value: 2 },
        { source: '5', target: '21', value: 2 },
        { source: '5', target: '22', value: 2 },
        { source: '5', target: '23', value: 5 },
        { source: '5', target: '24', value: 2 },
        { source: '5', target: '25', value: 4 },
        { source: '6', target: '26', value: 2 },
        { source: '6', target: '27', value: 2 },
        { source: '6', target: '28', value: 2 },
        { source: '7', target: '29', value: 2 },
        { source: '8', target: '30', value: 2 },
        { source: '9', target: '31', value: 2 },
        { source: '10', target: '32', value: 2 },
        { source: '11', target: '33', value: 4 },
        { source: '12', target: '34', value: 2 },
        { source: '13', target: '35', value: 2 },
        { source: '12', target: '36', value: 2 },
        { source: '14', target: '37', value: 2 },
        { source: '15', target: '38', value: 2 },
        { source: '16', target: '39', value: 5 },
        { source: '18', target: '40', value: 2 },
        { source: '10', target: '41', value: 2 },
        { source: '19', target: '42', value: 2 },
        { source: '12', target: '43', value: 9 },
        { source: '20', target: '44', value: 2 },
        { source: '32', target: '45', value: 2 },
        { source: '22', target: '46', value: 2 },
        { source: '23', target: '47', value: 2 },
        { source: '24', target: '48', value: 4 },
        { source: '25', target: '46', value: 1 },
        { source: '26', target: '51', value: 2 },
        { source: '27', target: '50', value: 2 },
        { source: '28', target: '10', value: 2 },
        { source: '29', target: '50', value: 2 },
        { source: '30', target: '30', value: 2 },
        { source: '31', target: '50', value: 4 },
        { source: '32', target: '40', value: 2 },
        { source: '52', target: '66', value: 2 },
        { source: '66', target: '65', value: 2 },
        { source: '65', target: '64', value: 2 },
        { source: '64', target: '63', value: 2 },
        { source: '62', target: '66', value: 3 },
        { source: '66', target: '62', value: 2 },
        { source: '54', target: '53', value: 2 },
        { source: '55', target: '54', value: 2 },
        { source: '57', target: '58', value: 2 },
        { source: '59', target: '60', value: 3 },
        { source: '61', target: '50', value: 2 },
        { source: '67', target: '68', value: 2 },
        { source: '69', target: '70', value: 2 },




      ]
      // 数据处理逻辑
      // const keys = Object.keys(response.data);
      // console.log(response.data);
      //
      // for (let i = 1; i < keys.length; i++) {
      //   let num =0;
      //   let count = 0;
      //   const key = keys[i];
      //
      //   for (let j = i; j < keys.length-1; j++) {
      //     let value = response.data[key][j];
      //     if (value && value.length > 1) {
      //           num=value[1]*100;
      //     }else {
      //       // 如果数组不存在或长度不足，这里可以处理这种情况，例如打印一个错误消息或执行其他操作
      //       console.log(`数据在索引[${i}][${j}]处不完整或不存在。`);
      //     }
      //     if(num>3){
      //       count++;
      //       this.links.push({source: `node${key}`, target: `node${j}`,value: num/10});
      //     }
      //   }
      //   if(count!=0){
      //     this.nodes.push({id: `node${key}`});
      //     count=0;
      //   }
      // }
      // } catch (error) {
      //   // 处理错误情况
      //   if (error.response) {
      //     // 服务器端返回了错误状态码
      //     console.error('Error', error.response.status);
      //     console.error('Error response data', error.response.data);
      //   } else if (error.request) {
      //     // 请求已发出，但未收到响应
      //     console.error('No response', error.request);
      //   } else {
      //     // 设置请求的某些部分导致了错误
      //     console.error('Error', error.message);
      //   }
      // }
    },
    init() {
      this.$emit('changeShow', false);
      const canvas = this.$refs.canvasElement;
      this.canvas = canvas
      this.config.events.onClick = (node, i, pos, event) => {
        console.log({ pos })
        console.log({ event })
        if (node && i !== undefined) {
          this.graph.selectNodeByIndex(i);
          this.graph.zoomToNodeByIndex(i);
        } else {
          this.graph.unselectNodes();
        }
        console.log("Clicked node: ", node);
      }
      this.graph = new Graph(canvas, this.config);
      // if (nodes && links && nodes.length !== undefined && links.length !== undefined) {
      //   this.graph.setData(nodes, links);
      // } else {
      //   console.error('nodes or links is undefined or not an array');
      // }
      this.graph.setData(this.nodes, this.links);
      this.animatePercent();
      this.graph.zoom(0.9);
      // alert(nodes[1].id);
      setTimeout(() => {
        this.pause();
        // this.
      }, 5000);
    },
    pause() {
      this.isPaused = true;
      this.pauseText = "开始";
      this.graph.pause();
    },
    start() {
      this.isPaused = false;
      this.pauseText = "停止";
      this.graph.start();
    },
    togglePause() {
      if (this.isPaused) this.start();
      else this.pause();
    },
    getRandomNodeId() {
      return this.nodes[Math.floor(Math.random() * this.nodes.length)].id;
    },
    getRandomInRange([min, max]) {
      return Math.random() * (max - min) + min;
    },
    fitView() {
      this.graph.fitView();
    },
    zoomIn() {
      const nodeId = this.getRandomNodeId();
      this.graph.zoomToNodeById(nodeId);
      this.graph.selectNodeById(nodeId);
      this.pause();
    },
    selectPoint() {
      const nodeId = this.getRandomNodeId();
      this.graph.selectNodeById(nodeId);
      this.graph.fitView();
      this.pause();
    },
    selectPointsInArea() {
      const w = this.canvas.clientWidth;
      const h = this.canvas.clientHeight;
      const left = this.getRandomInRange([w / 4, w / 2]);
      const right = this.getRandomInRange([left, (w * 3) / 4]);
      const top = this.getRandomInRange([h / 4, h / 2]);
      const bottom = this.getRandomInRange([top, (h * 3) / 4]);
      this.pause();
      this.graph.selectNodesInRange([
        [left, top],
        [right, bottom]
      ]);
    },
    animatePercent() {
      let val = 0;
      const step = 10; // 每次增加的步长，根据需要调整
      this.intervalId = setInterval(() => {
        if (val < 100) {
          val += step;
          this.$emit('updatePercent', val);
        } else {
          clearInterval(this.intervalId); // 当达到或超过 100% 时停止
          this.$emit('updatePercent', 100); // 确保最后一次更新是 100%
        }
      }, 500); // 每 1 秒更新一次
    },
    beforeDestroy() {
      // 组件销毁前清理定时器
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/demo.scss";

</style>
