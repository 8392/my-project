<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2020-01-08 10:07:56
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-07 10:08:25
 -->
<template>
    <el-dialog v-bind="$attrs" v-on="$listeners">
        <slot></slot>
        <template #title>
            <slot name="title"></slot>
        </template>
        <template #footer>
            <slot name="footer"></slot>
        </template>
    </el-dialog>
</template>
<script>
export default {
    name: "BaseDialog",
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
/deep/ .el-dialog {
    border-radius: 4px;
}
/deep/ .el-dialog__body {
    padding: 20px;
}
/deep/ .el-dialog__title {
    font-size: 16px;
}
</style>
