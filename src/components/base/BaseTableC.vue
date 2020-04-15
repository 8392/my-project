<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-25 09:51:13
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 14:53:16
 -->
<template>
    <el-table
        v-el-table-infinite-scroll="onReachBottom"
        v-loading="loading && pageParams.pageNum == 1"
        v-bind="$attrs"
        :data="res.records"
        :infinite-scroll-disabled="res.current >= res.pages"
        :infinite-scroll-immediate="true"
        :infinite-scroll-delay="300"
        border
        v-on="$listeners"
    >
        <template v-for="(item, index) in columns">
            <el-table-column v-if="item.slotName" :key="index" v-bind="item" :width="width">
                <template slot-scope="scope">
                    <slot :name="item.slotName" v-bind="scope"></slot>
                </template>
            </el-table-column>
            <el-table-column v-else :key="index" v-bind="item"> </el-table-column>
        </template>
        <template #append>
            <div v-if="loading" class="el-loading-spinner">
                <i class="el-icon-loading"></i>
                <span class="el-loading-text">加载中</span>
            </div>
            <div v-if="!loading && res.current >= res.pages" class="el-loading-spinner">
                <span class="el-loading-text">没有更多了</span>
            </div>
        </template>
    </el-table>
</template>
<script>
export default {
    name: "BaseTableC",
    model: {
        event: "load"
    },
    props: {
        columns: {
            type: Array,
            default() {
                return [];
            }
        },
        params: {
            type: Object,
            default() {
                return {};
            }
        },
        api: {
            type: String,
            default: "ownerUnitList"
        },
        tableData: {
            type: Array,
            default() {
                return [];
            }
        },
        width: {
            type: String,
            default: "150px"
        }
    },
    data() {
        return {
            loading: false,
            pageParams: {
                pageNum: 1,
                pageSize: 20
            },
            res: {
                size: 10,
                total: 0,
                records: []
            }
        };
    },
    watch: {
        res(newVal) {
            this.$emit("update:tableData,", newVal.records);
        },
        tableData(newVal) {
            this.res.records.push(newVal);
        }
    },
    created() {},
    methods: {
        async getList() {
            this.loading = true;
            let newRes = await this.$_server[this.api](this.params, null, this.pageParams);
            this.loading = false;
            this.pageParams.pageNum = this.pageParams.pageNum + 1;
            let oldRes = this.res;
            if (this.pageParams.pageNum != 1) {
                newRes.records = [...oldRes.records, ...newRes.records];
            }
            this.res = newRes;
        },
        //触底
        onReachBottom() {
            if (this.loading) return;
            this.getList();
        },
        refresh() {
            this.pageParams.pageNum = 1;
            this.getList();
        }
    }
};
</script>
<style lang="scss">
.el-table th {
    background: #f5f7fa;
}
</style>
<style lang="scss" scoped>
.el-loading-spinner {
    position: relative;
    height: 30px;
    margin: 0;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    .el-loading-text {
        margin-left: 5px;
    }
}
</style>
