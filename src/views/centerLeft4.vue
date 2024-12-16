<template>
    <div id="centreLeft4">
        <div class="bg-color-black">
            <div class="d-flex pt-2 pl-2">
                <span style="color:#5cd9e8">
                    <i class="el-icon-edit"></i>
                </span>
                <div class="d-flex">
                    <span class="fs-xl mx-2 text_chart">风机信息</span>
                    <dv-decoration-3 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" />
                </div>
            </div>
            <div class="d-flex jc-center flex-wrap ten_grid">
                <div style="position: relative;">
                    <a @click="notify">
                        <fengji :key="1" />
                    </a>
                </div>
                <div style="position: relative;">
                    <fengji :key="2" />
                </div>
                <div style="position: relative;">
                    <fengji :key="3" />
                </div>
                <div style="position: relative;">
                    <fengji :key="4" />
                </div>
                <div style="position: relative;">
                    <fengji :key="5" />
                </div>
                <div style="position: relative;">
                    <fengji :key="6" />
                </div>
                <div style="position: relative;">
                    <fengji :key="7" />
                </div>
                <div style="position: relative;">
                    <fengji :key="8" />
                </div>
                <div style="position: relative;">
                    <fengji :key="9" />
                </div>
                <div style="position: relative;">
                    <fengji :key="10" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Fengji from '../components/echart/centerLeft2/fengji.vue';
import fengji from '../components/echart/centerLeft2/fengji.vue';
// import fengji2 from '../components/echart/centerLeft2/fengji2.vue';
export default {
    data() {
        return {
            config: {
                lineWidth: 30,
                activeRadius: "80%",
                radius: "75%",
                activeTimeGap: 2000,
                data: [
                    {
                        name: "周口",
                        value: 55
                    },
                    {
                        name: "南阳",
                        value: 120
                    },
                    {
                        name: "西峡",
                        value: 78
                    },
                    {
                        name: "驻马店",
                        value: 66
                    },
                    {
                        name: "新乡",
                        value: 80
                    }
                ]
            },
            numberData: [
                {
                    number: {
                        number: [15],
                        toFixed: 1,
                        content: "{nt}"
                    },
                    text: "今日构建总量"
                },
                {
                    number: {
                        number: [1144],
                        toFixed: 1,
                        content: "{nt}"
                    },
                    text: "总共完成数量"
                },
                {
                    number: {
                        number: [361],
                        toFixed: 1,
                        content: "{nt}"
                    },
                    text: "正在编译数量"
                },
                {
                    number: {
                        number: [157],
                        toFixed: 1,
                        content: "{nt}"
                    },
                    text: "未通过数量"
                }
            ]
        };
    },
    components: {
        // centreLeft1Chart
        fengji,
        // fengji2
    },
    mounted() {
        this.changeTiming();
    },
    methods: {
        changeTiming() {
            setInterval(() => {
                this.changeNumber();
            }, 3000);
        },
        changeNumber() {
            this.numberData.forEach((item, index) => {
                item.number.number[0] += ++index;
                item.number = { ...item.number };
            });
        },
        notify() {
            this.$emit('changeTab', 3);
        }
    }
};
</script>

<style lang="scss">
#centreLeft4 {
    padding: 0.2rem;
    height: 1.125rem;
    min-width: 3.75rem;
    border-radius: 0.0625rem;

    .bg-color-black {
        height: 10.125rem;
        border-radius: 0.125rem;
    }

    .text_chart {
        color: #c3cbde;
        font-size: 1em;
        font-weight: bold;
    }

    .chart-box {
        margin-top: 0.2rem;
        width: 2.125rem;
        height: 2.125rem;

        .active-ring-name {
            padding-top: 0.125rem;
        }
    }

    .bottom-data {
        .item-box {
            float: right;
            position: relative;
            width: 50%;
            color: #d3d6dd;

            // 金币
            .coin {
                position: absolute;
                left: 0.1rem;
                top: 0.2125rem;
                font-size: 0.25rem;
                color: #ffc107;
            }

            .colorYellow {
                color: yellowgreen;
            }
        }
    }
}

.ten_grid {
    display: grid;
    width: 100%;
    height: 60%;
    grid-template-columns: repeat(5, 1fr);
    /* 创建5列 */
    grid-template-rows: repeat(2, 1fr);
    /* 创建2行 */
    gap: 5px;
    /* 设置网格间隔 */
}

a {
    cursor: pointer;
}
</style>