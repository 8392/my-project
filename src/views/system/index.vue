<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2020-04-15 10:24:35
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 10:58:09
 -->
<template>
    <div>
        <el-tabs :value="$route.path" @tab-click="handleClick">
            <el-tab-pane label="标签管理" name="/system/tag/index"></el-tab-pane>
            <el-tab-pane label="活动清单" name="/system/active/index"></el-tab-pane>
            <el-tab-pane label="编码生成规则" name="/system/code/index"></el-tab-pane>
            <el-tab-pane label="阶段占比" name="/system/stage/index"></el-tab-pane>
        </el-tabs>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        handleClick(tab) {
            console.log(tab.name);
            this.$router.push(tab.name);
        }
    }
};
</script>
