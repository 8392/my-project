<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2020-04-15 13:39:38
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 13:44:52
 -->
<template>
    <div class="header" :style="{ marginTop: top + 'px', marginBottom: bottom + 'px' }">
        <div class="left">
            <slot></slot>
        </div>
        <slot name="right"></slot>
    </div>
</template>
<script>
export default {
    name: "BaseHeader",
    props: {
        top: {
            type: Number,
            default: 0
        },
        bottom: {
            type: Number,
            default: 0
        }
    }
};
</script>
<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    .left {
        flex: 1;
    }
}
</style>
