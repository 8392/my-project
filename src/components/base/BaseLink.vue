<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2020-01-09 21:48:11
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 13:42:41
 -->
<template>
    <el-link
        :underline="underline"
        v-bind="$attrs"
        :style="{ marginLeft: left + 'px', marginRight: right + 'px', fontSize: size + 'px' }"
        v-on="$listeners"
    >
        <slot></slot>
    </el-link>
</template>
<script>
export default {
    name: "BaseLink",
    props: {
        underline: {
            type: Boolean,
            default: false
        },
        left: {
            type: Number,
            default: 0
        },
        right: {
            type: Number,
            default: 0
        },
        size: {
            type: Number,
            default: 16
        }
    }
};
</script>
