<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2020-01-08 10:07:56
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 10:59:39
 -->
<template>
    <el-button v-bind="$attrs" v-on="$listeners">
        <slot></slot>
    </el-button>
</template>
<script>
export default {
    name: "BaseButton",
    data() {
        return {};
    }
};
</script>
