<template>
    <div>
        <a>
            <div @click="dialogVisible = true">
                <el-popover ref="popover" placement="top-start" width="200" trigger="hover" title="风机"
                    content="风机1号">
                </el-popover>
                <div v-popover:popover class="windmill">
                    <div class="leaf"><img src="../../../assets/leaf1.png"></div>
                    <div class="leaf"><img src="../../../assets/leaf1.png"></div>
                    <div class="leaf"><img src="../../../assets/leaf1.png"></div>
                    <div class="leaf"><img src="../../../assets/leaf1.png"></div>
                    <div class="leaf"><img src="../../../assets/leaf1.png"></div>
                    <div class="leaf"><img src="../../../assets/leaf1.png"></div>
                    <div class="leaf"><img src="../../../assets/leaf1.png"></div>
                    <div class="leaf"><img src="../../../assets/leaf1.png"></div>
                </div>
                <div class="center"><img src="../../../assets/center.png"></div>
                <div class="body"><img src="../../../assets/body.png"></div>
            </div>
        </a>


        <el-dialog title="" :visible.sync="dialogVisible" class="spec-dialog" width="90%" top="2vh"
            :before-close="handleClose" append-to-body>
            <span>
                <dv-border-box-13>
                    <dialogcomponent />
                </dv-border-box-13>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import dialogcomponent from "../../dialog/dialog.vue";
export default {
    data() {
        return {
            dialogVisible: false,
        };
    },
    mounted() {
        let wm = this.$el.querySelector(".windmill");
        let s = 3;
        let a = 3;
        let lf = this.$el.getElementsByClassName('leaf');

        function setup() {
            wm.style.animationDuration = s + "s";
            lf[0].style.display = "block";
            for (let i = 1; i < a; i++) {
                lf[i].style.transform = "rotate(" + (360 / a) * i + "deg)";
                lf[i].style.display = "block";
            }
            for (let i = a; i < 8; i++) {
                lf[i].style.display = "none";
            }
        }

        setup();
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(() => {
                    done();
                })
                .catch(() => { });
        },
    },
    components: {
        dialogcomponent,
    },
};
</script>

<style lang="scss">
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

body {
    background-color: black;
}

button {
    background-color: #fff;
}

.windmill {
    width: 77.6px;
    height: 77.6px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -38.8px 0 0 -38.8px;
    animation-name: rotate;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    z-index: 3;
}

.leaf {
    width: 12.6px;
    height: 38.8px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -2px;
    transform-origin: 2.5% 100%;
    transform: rotate(0);
    display: none;
    z-index: 3;
}

.leaf img {
    width: 100%;
}

.center {
    width: 8.4px;
    height: 8.4px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -4.2px 0 0 -4.2px;
    z-index: 3;
}

.center img {
    width: 100%;
}

.body {
    width: 36px;
    height: 40.8px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -18px;
    z-index: 1;
}

.body img {
    width: 100%;
}

/*.body .speedbuttons {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.amountbuttons {
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.btn {
    width: 80px;
    height: 60px;
    margin: 10px;
    font-size: 17px;
    line-height: 17px;
    border-radius: 8px;
    background-color: #eee;
    font-family: PingFang SC, Microsoft YaHei;
}
*/

@keyframes rotate {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}

#centreLeft1 {
    padding: 0.2rem;
    height: 9.125rem;
    min-width: 3.75rem;
    border-radius: 0.0625rem;

    .bg-color-black {
        height: 4.8125rem;
        border-radius: 0.125rem;
    }

    .text_chart {
        color: #c3cbde;
        font-size: 1em;
        font-weight: bold;
    }

    .body-box {
        border-radius: 0.125rem;
        overflow: hidden;
    }
}

.spec-dialog .el-dialog__body {
    padding: 3px 30px;
    overflow-y: auto;
    height: calc(100vh - 140px);
}

.el-dialog,
.el-pager li {
    background-color: rgba(255, 0, 0, 0.0);
    color: #FFFFFF;
    background-image: url(../../../assets/pageBg.png);
    background-size: 100% 100%;
}

.el-dialog__header {
    padding-top: 10px !important;
    background-color: rgb(255, 255, 255, 0);
    border-radius: 14px 14px 0 0;
}

.el-dialog__body {
    border-top: 0 !important;
    background-color: rgba(19, 31, 59, 0);
    color: #FFFFFF;
}

.el-dialog__footer {
    text-align: center;
    background-color: rgba(255, 255, 255, 0);
}
</style>