<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-19 15:52:39
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 14:49:56
 -->
<template>
    <div>
        <base-header :bottom="20">
            <template #right>
                <el-button type="primary" plain>导入</el-button>
                <el-button type="primary"><i class="el-icon-plus"></i>添加</el-button>
            </template>
        </base-header>
        <base-table-c :columns="columns" height="calc(100vh - 200px)">
            <template #op>
                <base-link type="primary">
                    <i class="el-icon-edit"></i>
                </base-link>
                <el-popconfirm title="确定删除吗？">
                    <base-link slot="reference" type="danger" :left="20">
                        <i class="el-icon-delete"></i>
                    </base-link>
                </el-popconfirm>
            </template>
        </base-table-c>
        <base-dialog :visible.sync="visible" title="添加" height="200px">
            <formAdd></formAdd>
            <template slot="footer">
                <base-button @click="visible = fasle">取消</base-button>
                <base-button type="primary" @click="visible = fasle">确定</base-button>
            </template>
        </base-dialog>
    </div>
</template>
<script>
import formAdd from "./form";
export default {
    name: "DataTable",
    components: {
        formAdd
    },
    data() {
        return {
            tableData: [],
            columns: [
                {
                    label: "编号",
                    prop: "ownerId"
                },
                {
                    label: "单位名称",
                    prop: "ownerUnitName"
                },
                {
                    label: "操作",
                    slotName: "op"
                }
            ],
            visible: false
        };
    },
    created() {},
    methods: {
        firstLoad() {
            let newTable = new Array(20).fill({
                date: "2016-05-02",
                name: "王小虎",
                address: "上海市普陀区金沙江路 1518 弄"
            });

            this.tableData = this.tableData.concat(newTable);
        },
        onReachBottom() {
            console.log("触低");
            let newTable = new Array(10).fill({
                date: "2016-05-02",
                name: "王小虎",
                address: "上海市普陀区金沙江路 1518 弄"
            });
            this.tableData = this.tableData.concat(newTable);
        }
    }
};
</script>
<style lang="scss">
.search-box {
    padding-bottom: 10px;
}
.search-item {
    display: inline-block;
    margin-bottom: 10px;
    margin-right: 10px;
}
</style>
