<template>
    <div>
        <!-- <div>标签首页</div> -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane v-for="item in tabpane_list" :key="item" :label="item" :name="item">
                <div v-if="activeName == '工程类型'">
                    <base-header :bottom="20">
                        <template #right>
                            <el-button type="primary" plain>导入</el-button>
                            <el-button type="primary" icon="el-icon-plus" @click="add">添加</el-button>
                        </template>
                    </base-header>
                    <base-table-c :columns="columns" :table-data.sync="tableData" height="calc(100vh - 260px)">
                        <template #op>
                            <div class="cz">
                                <base-link type="primary">
                                    <i class="el-icon-edit"></i>
                                </base-link>
                                <el-popconfirm title="确定删除吗？">
                                    <base-link slot="reference" type="danger" :left="20">
                                        <i class="el-icon-delete"></i>
                                    </base-link>
                                </el-popconfirm>
                            </div>
                        </template>
                    </base-table-c>
                </div>
            </el-tab-pane>
            <!-- <el-tab-pane label="阶段类型" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="事项类型" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="事项" name="fourth">定时任务补偿</el-tab-pane>
            <el-tab-pane label="项目" name="fifth">定时任务补偿</el-tab-pane> -->
        </el-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: "工程类型",
            tabpane_list: ["工程类型", "阶段类型", "事项类型", "事项", "项目"],
            columns: [
                {
                    label: "工程类型编码",
                    prop: "ownerId"
                },
                {
                    label: "工程类型名称",
                    prop: "ownerUnitName"
                },
                {
                    label: "操作",
                    slotName: "op"
                }
            ],
            tableData: []
        };
    },
    mounted() {
        // console.log(this.$_server);
        // this.getApi();
    },
    methods: {
        async getApi() {
            let res = await this.$_server["login-from"]({ projectId: this.projectId });
            console.log(res);
        },
        add() {
            //添加
            this.tableData.push({});
        },
        handleClick() {}
    }
};
</script>

<style lang="scss" scoped>
/deep/ .cz {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>
