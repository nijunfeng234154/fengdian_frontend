<template>
    <div id="centreRight1">
        <div class="bg-color-black">
            <div class="d-flex pt-2 pl-2">
                <span style="color:#5cd9e8">
                    <i class="el-icon-edit"></i>
                </span>
                <div class="d-flex">
                    <span class="fs-xl text_chart mx-2">风机数据查询</span>
                </div>
            </div>
            <el-input v-model="searchValue" size="mini" clearable placeholder="请输入" style="width:300px"></el-input>
            <el-button type="primary" size="mini" @click="doFilter">搜索</el-button>
            <el-table :data="tableData" border class="transparent-table">
                <el-table-column prop="name" label="编号" width="180" align="center"></el-table-column>
                <el-table-column prop="temperature" label="温度" width="180" align="center"></el-table-column>
                <el-table-column prop="v" label="风速" width="180" align="center"></el-table-column>
                <el-table-column prop="windDirection" label="风向" width="180" align="center"></el-table-column>
                <el-table-column prop="humidity" label="湿度" width="180" align="center"></el-table-column>
                <el-table-column prop="pressure" label="压强" width="180" align="center"></el-table-column>
            </el-table>

            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[1, 4, 8]" :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper" :total="totalItems"></el-pagination>
        </div>

    </div>
</template>

<script>
// import predict from '../echart/predict/predict.vue';
export default {
    // components: { predict },
    data() {
        return {
            resData: [
                { name: "风机1", temperature: "3.9℃" ,v:"5.4m/s",windDirection: "0",humidity: "14",pressure: "819"},
                { name: "风机2", temperature: "3.6℃" ,v:"5.3m/s",windDirection: "0",humidity: "15",pressure: "820"},
                { name: "风机3", temperature: "3.3℃" ,v:"5.0m/s",windDirection: "0",humidity: "16",pressure: "821"},
                { name: "风机4", temperature: "3.0℃" ,v:"4.6m/s",windDirection: "0",humidity: "17",pressure: "1003"},
                { name: "风机5", temperature: "2.7℃" ,v:"4.9m/s",windDirection: "0",humidity: "18",pressure: "1004"},
                { name: "风机6", temperature: "2.4℃" ,v:"5.7m/s",windDirection: "0",humidity: "19",pressure: "1005"},
                { name: "风机7", temperature: "2.2℃" ,v:"5.2m/s",windDirection: "0",humidity: "20",pressure: "1006"},
                { name: "风机8", temperature: "2.0℃" ,v:"5.9m/s",windDirection: "0",humidity: "21",pressure: "1007"},
                { name: "风机9", temperature: "1.8℃" ,v:"5.9m/s",windDirection: "0",humidity: "22",pressure: "1008"},
                { name: "风机10", temperature: "1.6℃" ,v:"5.9m/s",windDirection: "0",humidity: "23",pressure: "1009"},
                { name: "风机11", temperature: "1.4℃" ,v:"5.9m/s",windDirection: "0",humidity: "24",pressure: "1010"},
                { name: "风机12", temperature: "1.2℃" ,v:"5.9m/s",windDirection: "0",humidity: "25",pressure: "1011"},
                { name: "风机13", temperature: "1.0℃" ,v:"5.9m/s",windDirection: "0",humidity: "26",pressure: "1012"},
                { name: "风机14", temperature: "0.8℃" ,v:"5.9m/s",windDirection: "0",humidity: "27",pressure: "1013"},
                { name: "风机15", temperature: "0.6℃" ,v:"5.9m/s",windDirection: "0",humidity: "28",pressure: "1014"},
                { name: "风机16", temperature: "0.4℃" ,v:"5.9m/s",windDirection: "0",humidity: "29",pressure: "1015"},
                { name: "风机17", temperature: "0.2℃" ,v:"5.9m/s",windDirection: "0",humidity: "30",pressure: "1016"},
                { name: "风机18", temperature: "0.0℃" ,v:"5.9m/s",windDirection: "0",humidity: "31",pressure: "1017"},
                { name: "风机19", temperature: "-0.2℃" ,v:"5.9m/s",windDirection: "0",humidity: "32",pressure: "1018"},
                { name: "风机20", temperature: "-0.4℃" ,v:"5.9m/s",windDirection: "0",humidity: "33",pressure: "1019"},
                { name: "风机21", temperature: "-0.6℃" ,v:"5.9m/s",windDirection: "0",humidity: "34",pressure: "1020"},
                { name: "风机22", temperature: "-0.8℃" ,v:"5.9m/s",windDirection: "0",humidity: "35",pressure: "1021"},
                { name: "风机23", temperature: "-1.0℃" ,v:"5.9m/s",windDirection: "0",humidity: "36",pressure: "1022"},
                { name: "风机24", temperature: "-1.2℃" ,v:"5.9m/s",windDirection: "0",humidity: "37",pressure: "1023"},
                { name: "风机25", temperature: "-1.4℃" ,v:"5.9m/s",windDirection: "0",humidity: "38",pressure: "1024"},
                { name: "风机26", temperature: "-1.6℃" ,v:"5.9m/s",windDirection: "0",humidity: "39",pressure: "1025"},
                { name: "风机27", temperature: "-1.8℃" ,v:"5.9m/s",windDirection: "0",humidity: "40",pressure: "1026"},
                { name: "风机28", temperature: "-2.0℃" ,v:"5.9m/s",windDirection: "0",humidity: "41",pressure: "1027"},
            ],
            searchValue: "",
            tableData: [],
            currentPage: 1,
            pageSize: 8,
            totalItems: 0,
            filterTableData: [],
            flag: false,
        };
    },
    methods: {
        mockRequset() {
            this.totalItems = this.resData.length; // 注意： 这里mock数据是写在data里的，请求需考虑异步的情况
            if (this.totalItems > this.pageSize) {
                for (let index = 0; index < this.pageSize; index++) {
                    this.tableData.push(this.resData[index]);
                }
            } else {
                this.tableData = this.resData;
            }
        },
        // 前端搜索功能需要区分是否检索,因为对应的字段的索引不同
      doFilter() {
        this.tableData = [];
        this.filterTableData = this.resData.filter((item) => {
          // 转换搜索词为小写以进行不区分大小写的搜索
          const searchLower = this.searchValue.toLowerCase().trim();

          // 检查每个字段是否包含搜索词，这里不区分大小写，并去除了字段值两端的空白
          // 注意：对于中文搜索，toLowerCase()不会有影响，但对英文有效

          const nameMatch = item.name.toLowerCase().includes(searchLower);
          const temperatureMatch = item.temperature.toLowerCase().includes(searchLower);
          const speedMatch = item.v.toLowerCase().includes(searchLower);
          const winDirectionMatch = item.windDirection.toLowerCase().includes(searchLower);
          const humidityMatch = item.humidity.toLowerCase().includes(searchLower);
          const pressureMatch = item.pressure.toLowerCase().includes(searchLower);

          // 如果任何一个字段匹配，返回true将当前项包含在过滤后的数组中
          return nameMatch || temperatureMatch || speedMatch || winDirectionMatch || humidityMatch || pressureMatch;
        });

        // 页面数据改变重新统计数据数量和当前页
        this.currentPage = 1;
        this.totalItems = this.filterTableData.length;
        // 根据新的filterTableData渲染表格
        this.currentChangePage(this.filterTableData);
        // 设置标志位，表示已进行搜索
        this.flag = true;
      },
        // 每页显示条数改变触发
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageSize = val;
            this.handleCurrentChange(1);
        },
        // 当前页改变触发
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
            // 判断是否为搜索的数据,传入对应值
            if (!this.flag) {
                this.currentChangePage(this.resData);
            } else {
                this.currentChangePage(this.filterTableData);
            }
        },
        // 根据分页，确定当前显示的数据
        currentChangePage(list) {
            let fromNum = (this.currentPage - 1) * this.pageSize;
            let toNum = this.currentPage * this.pageSize;
            this.tableData = [];
            for (; fromNum < toNum; fromNum++) {
                if (list[fromNum]) {
                    this.tableData.push(list[fromNum]);
                }
            }
        },
    },
    beforeMount() {
        this.mockRequset()
    }
};
</script>
<style scoped lang="scss">
#centreRight1 {
    padding: 0.2rem;
    height: 10.5rem;
    min-width: 3.75rem;
    border-radius: 0.0625rem;

    .bg-color-black {
        height: 9.4rem;
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

el-table {
    margin-top: 0.2rem;
    height: 3.5rem;
    min-width: 3.75rem;
    border-radius: 0.0625rem;
}

/* 最外层透明 */
::v-deep .el-table,
::v-deep .el-table__expanded-cell {
    background-color: transparent;
}

/* 表格内背景颜色 */
::v-deep .el-table th,
::v-deep .el-table tr,
::v-deep .el-table td {
    background-color: transparent;
}

/* 修改表格单元格文字颜色和大小 */
::v-deep .el-table .el-table__body td {
    color: white;
    /* 文字颜色 */
    font-size: 14px;
    /* 文字大小 */
    font-weight: bold;
}

/* 如果需要，也可以修改表头文字的颜色和大小 */
::v-deep .el-table .el-table__header-wrapper th {
    color: white;
    /* 文字颜色 */
    font-size: 16px;
    /* 文字大小 */
    font-weight: bold;
}
</style>