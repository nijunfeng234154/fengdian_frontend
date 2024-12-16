<template>
  <div>
    <div class="app" style="width:100%;height:100%;padding: 2%;">
      <canvas ref="canvasElement" />
    </div>

    <div class="actions">
      <div class="actions-header">Actions:</div>
      <div class="action" id="pause" @click="togglePause">{{ pauseText }}</div>
      <div class="action" id="fit-view" @click="fitView">Fit View</div>
      <div class="action" id="zoom" @click="zoomIn">Zoom to a point</div>
      <div class="action" id="select-point" @click="selectPoint">Select a point</div>
      <div class="action" id="select-points-in-area" @click="selectPointsInArea">
        Select points in a rectangular area
      </div>
    </div>
  </div>
</template>

<script>
// import { nodes, links } from "./data-gen";
import { Graph } from "@cosmograph/cosmos";
import axios from "axios";

const nodes = [];
const links = [];
axios.post(`/api/power/chart_cartoon`, {
  // 你的请求体数据，如果有的话
  // data: { key: 'value' }
}, {
  headers: {
    'Content-Type': 'application/json',
    // 其他需要的请求头
  }
})
    .then(response => {
      // 确保响应数据存在
      if (response.data && typeof response.data === 'object') {
        // console.log(response.data);
        const keys = Object.keys(response.data);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          nodes.push({id: `node${key}`});
          for (let j = 0; j < keys.length; j++) {
            links.push({source: `node${key}`, target: `node${j}`});
          }
        }
      }
      console.log(nodes, links);
    })
    .catch(error => {
      // 处理错误情况
      if (error.response) {
        // 服务器端返回了错误状态码
        console.error('Error', error.response.status);
        console.error('Error response data', error.response.data);
      } else if (error.request) {
        // 请求已发出，但未收到响应
        console.error('No response', error.request);
      } else {
        // 设置请求的某些部分导致了错误
        console.error('Error', error.message);
      }
    });
export default {
  data() {
    return {
      graph: null,
      canvas: null,
      config: {
        backgroundColor: "#151515",
        opacity: 0.8,
        nodeSize: 8,
        nodeColor: "#4B5BBF",
        nodeGreyoutOpacity: 0.1,
        linkWidth: 1,
        linkColor: "#F781C6",
        linkArrows: false,
        linkGreyoutOpacity: 0,
        curvedLinks: true,
        renderHoveredNodeRing: true,
        hoveredNodeRingColor: "#4B5BBF",
        // showTopLabels: true,
        // showHoveredNodeRing: true,
        showDynamicLabels: false,
        showLabelsFor: [{ id: "node1" }, { id: "node2" }],
        simulation: {
          linkDistance: 30,
          linkSpring: 2,
          repulsion: 0.2,
          gravity: 0.1,
          decay: 100000
        },
        events: {
        }
      },
      isPaused: false,
      pauseText: "Pause"
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const canvas = document.querySelector("canvas");
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
      this.graph.setData(nodes, links);
      this.graph.zoom(0.9);
      // alert(nodes[1].id);
    },
    pause() {
      this.isPaused = true;
      this.pauseText = "Start";
      this.graph.pause();
    },
    start() {
      this.isPaused = false;
      this.pauseText = "Pause";
      this.graph.start();
    },
    togglePause() {
      if (this.isPaused) this.start();
      else this.pause();
    },
    getRandomNodeId() {
      return nodes[Math.floor(Math.random() * nodes.length)].id;
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
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/demo.scss";
</style>
