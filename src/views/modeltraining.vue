<template>
    <div id="center">
<!--        <div class="up">-->
<!--            <div class="bg-color-black item" style="display: flex; justify-content: center; align-items: center;">-->
<!--                <div>-->
<!--                        <input type="file" ref="fileInput" style="display:none;" @change="uploadFile" />-->
<!--                        <button class="btn"-->
<!--                                @click.prevent="selectFile"><i class="el-icon-upload"></i>文件上传</button>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="bg-color-black item" style="display: flex; justify-content: center; align-items: center;">-->
<!--                <div>-->
<!--                    <button class="btn"-->
<!--                        @click="DataCleaning"><i class="el-icon-s-data"></i>数据清洗</button>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="bg-color-black item" style="display: flex; justify-content: center; align-items: center;">-->
<!--                <div >-->
<!--                    <button class="btn"-->
<!--                        @click="startTimerC"><i class="el-icon-video-play"></i>模型训练</button>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <form class="up" @submit.prevent="submitForm">-->
<!--            <div class="bg-color-black item" style="display: flex; justify-content: center; align-items: center;">-->
<!--                <label>-->
<!--                    <input type="radio" v-model="selectedOption" value="option1" required>-->
<!--                  SD-STG-->
<!--                </label>-->
<!--            </div>-->
<!--            <div class="bg-color-black item" style="display: flex; justify-content: center; align-items: center;">-->
<!--                <label>-->
<!--                    <input type="radio" v-model="selectedOption" value="option2">-->
<!--                    MTGNN-->
<!--                </label>-->
<!--            </div>-->
<!--            <div class="bg-color-black item" style="display: flex; justify-content: center; align-items: center;">-->
<!--                <label>-->
<!--                    <input type="radio" v-model="selectedOption" value="option3">-->
<!--                    StemGNN-->
<!--                </label>-->
<!--            </div>-->

<!--        </form>-->
        <div class="down">
            <div class="percent">
                <div class="water">
                    <dv-water-level-pond ref="waterPond" :config="water" style="height: 3.8rem" />

                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import centerChart from "@/components/echart/center/centerChartRate";
import axios from 'axios';
import { mapMutations } from 'vuex';
import {EventBus} from "@/main";
export default {
    data() {
        return {
            selectedOption: null,
            percentagec: 0,
            intervalId: null,
            water: {
                data: [10, 15],
                shape: "roundRect",
                formatter: "数据采集中...",
                waveNum: 3
            },

            timer: null,
            // 通过率和达标率的组件复用数据
            rate: [
                {
                    id: "centerRate1",
                    tips: 60,
                    colorData: {
                        textStyle: "#3fc0fb",
                        series: {
                            color: ["#00bcd44a", "transparent"],
                            dataColor: {
                                normal: "#03a9f4",
                                shadowColor: "#97e2f5"
                            }
                        }
                    }
                },
                {
                    id: "centerRate2",
                    tips: 40,
                    colorData: {
                        textStyle: "#67e0e3",
                        series: {
                            color: ["#faf3a378", "transparent"],
                            dataColor: {
                                normal: "#ff9800",
                                shadowColor: "#fcebad"
                            }
                        }
                    }
                }
            ]
        };
    },
    methods: {
        ...mapMutations(['toggleRender']),

        DataCleaning() {
            // Define a variable to track if the values are increasing

            console.log("3132321")
            this.water = {
                ...this.water,
                formatter: "正在清洗数据。。。。",

            };
            // Call the setData() method to update the component
            this.$nextTick(() => {
                this.$refs.waterPond.setData(this.water);
            });
            setTimeout(() => {
              EventBus.$emit('updateTwoCharts', true);
                // do something else after 2 seconds
                this.water = {

                    ...this.water,
                    formatter: "数据清洗完成！",

                };
                // Call the setData() method to update the component
                this.$nextTick(() => {
                    this.$refs.waterPond.setData(this.water);
                });
            }, 6000);


            // Start an interval to update the data values

        },
        startTimerC() {
            // Define a variable to track if the values are increasing

            this.water = {
                ...this.water,
                formatter: "{value}%",
                data: [0, 0]
            };
            // Call the setData() method to update the component
            this.$nextTick(() => {
                this.$refs.waterPond.setData(this.water);
            });
            // Start an interval to update the data values
            this.intervalId = setInterval(() => {
                // Clone the data array and update the values
                const newData = [...this.water.data];
                newData[0] = newData[0] + 1;
                newData[1] = newData[1] + 1;
                console.log(newData[0])
                // Check if the values have reached 100%
                if (newData[0] > 100) {
                    console.log("wanchenhg")
                    // Stop the interval
                    this.water = {
                        ...this.water,
                        formatter: "模型训练完成！",
                    };
                    // Call the setData() method to update the component
                    this.$nextTick(() => {
                        this.$refs.waterPond.setData(this.water);
                        clearInterval(this.intervalId);
                    });

                } else {
                    // Update the water object with the new data
                    console.log("11111111")
                    this.water = {
                        ...this.water,
                        formatter: "训练进度{value}%",
                        data: newData
                    };
                    // Call the setData() method to update the component
                    this.$nextTick(() => {
                        this.$refs.waterPond.setData(this.water);
                    });
                }
            }, 3350);
        },
        selectFile() {
            this.$refs.fileInput.click();
        },
        uploadFile() {
            this.water = {
                ...this.water,
                formatter: "正在上传数据。。。",
            };
            // Call the setData() method to update the component
            this.$nextTick(() => {
                this.$refs.waterPond.setData(this.water);
            });

            const file = this.$refs.fileInput.files[0];
            const formData = new FormData();
            console.log("shangchuan")
            formData.append('file', file);
            axios.post('/api/power/upload_new_file', formData)
                .then(response => {
                    // 处理上传成功的响应
                    console.log(response.data);
                    this.water = {
                        ...this.water,
                        formatter: "文件上传完成",
                        data: [100, 100]
                    };
                    // Call the setData() method to update the component
                    this.$nextTick(() => {
                        this.$refs.waterPond.setData(this.water);
                    });
                    this.toggleRender();
                })
                .catch(error => {
                    // 处理上传失败的响应
                    console.log(error);
                    alert('上传失败')
                    this.water = {
                        ...this.water,
                        formatter: "数据上传失败",

                    };
                    // Call the setData() method to update the component
                    this.$nextTick(() => {
                        this.$refs.waterPond.setData(this.water);
                    });
                });
        }
    },
    beforeDestroy() {
        // 清除计时器
        clearInterval(this.timer);
    }
};
</script>

<style lang="scss" scoped>
#center {
    display: flex;
    flex-direction: column;

    .up {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        .item {
            border-radius: 0.0625rem;
            padding-top: 0.2rem;
            margin-top: 0.1rem;
            width: 32%;
            height: 1.5rem;
        }
    }

    .down {
        padding: 0.07rem 0.05rem;
        padding-bottom: 0;
        width: 100%;

        display: flex;
        //height: 3.1875rem;
        height: 1.5rem;
        justify-content: space-between;

        .bg-color-black {
            border-radius: 0.0625rem;
        }

        .ranking {
            padding: 0.125rem;
            width: 59%;
        }

        .percent {
            width: 100%;
            height: 2rem;
            display: flex;
            flex-wrap: wrap;

            .item {
                width: 33%;
                height: 1.8rem;

                span {
                    margin-top: 0.875rem;
                    display: flex;
                    justify-content: center;
                }
            }

            .water {
                width: 100%;
            }
        }
    }
}

label {
    font-size: 20px;
    /* change the font size as desired */
}

input[type="radio"] {
    transform: scale(1.5);
    /* increase the radio button size as desired */
}
button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.3s;
}
button:hover {
    background-color: #1AC8FF;
    //color: #007bff;
  opacity: 90%;
}
.btn {
  background-color: #007bff; color: #fff; border: none; border-radius: 5px; padding: 10px; font-size: 14px;
}


</style>