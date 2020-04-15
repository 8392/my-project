<template>
    <div>
        <!-- 活动清单 -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="软件工程" name="软件工程"></el-tab-pane>
            <el-tab-pane label="硬件工程" name="硬件工程"></el-tab-pane>
        </el-tabs>
        <el-tabs v-model="tableActive" @tab-click="handleClick">
            <el-tab-pane v-for="item in listTable" :key="item" :label="item" :name="item"></el-tab-pane>
        </el-tabs>
        <div class="main">
            <div class="l_menu">
                <div v-for="(item, index) in l_list_data" :key="index" class="l_menu_f">
                    <div class="l_menu_c">{{ item.title }}</div>
                    <div v-for="(itemc, indexc) in item.children" :key="indexc" class="l_menu_s">{{ itemc.title }}</div>
                </div>
            </div>
            <div class="r_menu">
                <base-header :bottom="20">
                    <template #right>
                        <el-button type="primary" plain>导入</el-button>
                        <el-button type="primary" icon="el-icon-plus" @click="add">添加</el-button>
                    </template>
                </base-header>
                <base-table-c :columns="columns" :table-data.sync="tableData" height="calc(100% - 52px)">
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
        </div>
        <el-drawer :visible.sync="drawer" :show-close="false" destroy-on-close>
            <div slot="title" class="drawHeader">
                <div class="drawHeader_l">{{ drawerTit }}</div>
                <div class="drawHeader_r">
                    <el-button type="text">保存</el-button>
                </div>
            </div>
            <span>我来啦!</span>
        </el-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            activeName: "软件工程",
            drawerTit: "添加活动",
            listTable: ["规划", "设计", "UI", "前端", "后端", "测试&验收", "交互", "运维"],
            tableActive: "规划",
            l_list_data: [
                {
                    title: "需求调研",
                    children: [
                        {
                            title: "需求准备"
                        },
                        {
                            title: "需求采集"
                        },
                        {
                            title: "需求挖掘"
                        },
                        {
                            title: "需求评估"
                        },
                        {
                            title: "需求报告编制"
                        }
                    ]
                },
                {
                    title: "竞品分析",
                    children: [
                        {
                            title: "竞品选取"
                        },
                        {
                            title: "竞品分析"
                        },
                        {
                            title: "分析报告编制"
                        }
                    ]
                }
            ],
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
    methods: {
        handleClick() {},
        add() {
            this.drawer = true;
        },
        handleClose() {}
    }
};
</script>

<style lang="scss" scoped>
.main {
    height: calc(100vh - 198px);
    display: flex;
    .l_menu {
        line-height: 30px;
        font-weight: 600;
        border-right: 1px solid #000;
        height: 100%;
        width: 200px;
        overflow: hidden;
        &_c {
            cursor: pointer;
        }
        &_s {
            padding-left: 15px;
            cursor: pointer;
        }
    }
    .r_menu {
        padding-left: 10px;
        height: 100%;
        width: calc(100% - 200px);
    }
}
/deep/ .el-drawer__header {
    padding: 0;
}
.drawHeader {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #000;
}
</style>
