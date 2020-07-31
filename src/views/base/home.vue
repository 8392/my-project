<template>
    <div class="about">
        <!-- <el-table
            ref="tableRef"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @select-all="selectAll"
            @selection-change="handleSelectionChange"
            @select="select"
        >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="日期" width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
        </el-table>
        <el-button @click="select">按钮</el-button>
        <el-tree
            ref="treeRef"
            :data="data"
            node-key="id"
            :default-expand-all="true"
            :expand-on-click-node="false"
            :highlight-current="true"
            :props="defaultProps"
            :current-node-key="currKey"
            @node-click="handleNodeClick"
        ></el-tree>-->
        <div class="first" :key="first.id" v-for="first in data">
            <div class="title" :class="first.isShow ? 'active' : ''" @click="handleEvent(first)">
                <el-checkbox
                    @change="changeSwitch(first, $event)"
                    v-model="first.isShow"
                >{{first.label}}</el-checkbox>
            </div>
            <div class="seccond" :key="seccond.id" v-for="seccond in first.children">
                <div class="title">{{seccond.label}}</div>
                <div class="third" :key="third.id" v-for="third in seccond.children">
                    <div
                        class="title"
                        @click="handleEvent(third)"
                        :class="third.isShow ? 'active' : ''"
                    >
                        <el-checkbox
                            @change="handleEvent(third, $event)"
                            v-model="third.isShow"
                        >{{third.label}}</el-checkbox>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <xbTree :data="treeData" />
    </div>
</template>

<script>
const xbTree = () => import("./treeAssembly");
export default {
    components: {
        xbTree
    },
    data() {
        return {
            tableData: [
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                }
            ],
            multipleSelection: [],
            data: [
                {
                    id: 1,
                    label: "一级 1",
                    children: [
                        {
                            id: 2,
                            label: "二级 1-1",
                            children: [
                                {
                                    id: 3,
                                    label: "三级 1-1-1"
                                },
                                {
                                    id: 34,
                                    label: "三级 1-1-1"
                                },
                                {
                                    id: 99,
                                    label: "三级 1-1-1"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "一级 2",
                    id: 4,
                    children: [
                        {
                            id: 6,
                            label: "二级 2-1",
                            children: [
                                {
                                    id: 5,
                                    label: "三级 2-1-1"
                                }
                            ]
                        },
                        {
                            label: "二级 2-2",
                            id: 8,
                            children: [
                                {
                                    id: 9,
                                    label: "三级 2-2-1"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "一级 3",
                    id: 10,
                    children: [
                        {
                            id: 11,
                            label: "二级 3-1",
                            children: [
                                {
                                    id: 12,
                                    label: "三级 3-1-1"
                                }
                            ]
                        },
                        {
                            id: 15,
                            label: "二级 3-2",
                            children: [
                                {
                                    id: 14,
                                    label: "三级 3-2-1"
                                }
                            ]
                        }
                    ]
                }
            ],
            treeData: [
                {
                    name: "一级 1",
                    children: [
                        {
                            name: "二级 1-1",
                            children: [
                                {
                                    name: "三级 1-1-1",
                                    children: [
                                        {
                                            name: "四级 1-1-1-1"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "一级 2",
                    children: [
                        {
                            name: "二级 2-2",
                            children: [
                                {
                                    name: "三级 2-2-2",
                                    children: [
                                        {
                                            name: "四级 2-2-2-2"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "一级 3",
                    children: [
                        {
                            name: "二级 3-3",
                            children: [
                                {
                                    name: "三级3-3-3",
                                    children: [
                                        {
                                            name: "四级 3-3-3-3"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            defaultProps: {
                children: "children",
                label: "label"
            },
            showList: [1, 2, 5],
            currKey: 2,
            tableKey: "2016-05-03"
        };
    },
    methods: {
        handleSelectionChange(val) {
            // console.log("val", val)
        },
        select(data, val) {
            let currIndex = "";
            this.tableData.forEach((curr, index) => {
                if (curr.date == val.date) {
                    currIndex = index;
                }
            });
            this.$refs.tableRef.clearSelection();
            if (val.date == this.tableKey) {
                this.tableKey = null;
                this.$refs.tableRef.clearSelection();
            } else {
                this.$refs.tableRef.toggleRowSelection(this.tableData[currIndex]);
                console.log("valq1", val);
                this.tableKey = val.date;
            }
        },
        selectAll() {
            // console.log("全选")
            this.$refs.tableRef.clearSelection(); //这个是清除所有选择项，当选择全部时，清除所有选择项
        },
        handleNodeClick(data) {
            if (data.id === this.currKey) {
                this.currKey = null;
                this.$refs.treeRef.setCurrentKey(null);
            } else {
                this.currKey = data.id;
            }
        },
        changeTree(data) {
            data.forEach(curr => {
                if (this.showList.includes(curr.id)) {
                    curr.isShow = true;
                } else {
                    curr.isShow = false;
                }
                if (curr.children && curr.children.length > 0) {
                    this.changeTree(curr.children);
                }
            });
        },
        handleEvent(data) {
            this.changeShowTree(this.data, data.id);
        },
        changeShowTree(data, currId) {
            data.map(curr => {
                if (curr.id == currId) {
                    // console.log("aaa", curr)
                    curr.isShow = !curr.isShow;
                    return;
                }
                if (curr.children && curr.children.length > 0) {
                    this.changeShowTree(curr.children, currId);
                }
            });
            // console.log("data", data)
            this.data = data; ///重新赋值
        },
        changeSwitch(data, event) {
            this.changeShowTree(this.data, data.id);
        }
    },
    created() {
        this.changeTree(this.data);
    }
};
</script>

<style lang="scss" scoped>
.first {
    > .title {
        background-color: #ccc;
    }
}
.seccond {
    padding-left: 50px;
    > .title {
        background-color: #e5e5e5;
    }
}
.third {
    padding-left: 50px;
    > .title {
        background-color: rgb(202, 199, 199);
    }
}

.title {
    cursor: pointer;
    line-height: 28px;
}
.active {
    background: #f00 !important;
}
</style>



