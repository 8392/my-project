<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-16 21:10:33
 * @LastEditors  : yanxin
 * @LastEditTime : 2019-12-20 16:09:24
 -->
<template>
    <fragment v-if="!item.hidden">
        <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
            <app-link :to="onlyOneChild.path">
                <el-menu-item :index="onlyOneChild.path">
                    <div :class="onlyOneChild.meta.icon"></div>
                    <span slot="title">{{ onlyOneChild.meta.title }}</span>
                </el-menu-item>
            </app-link>
        </template>
        <el-submenu v-else ref="subMenu" :index="item.name">
            <template slot="title">
                <div :class="item.meta.icon"></div>
                <span slot="title">{{ item.meta.title }}</span>
            </template>
            <sidebar-item v-for="child in item.children" :key="child.path" :item="child" :index="child.path" class="nest-menu" />
        </el-submenu>
    </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
import AppLink from "./Link";
export default {
    name: "SidebarItem",
    components: {
        Fragment,
        AppLink
    },
    props: {
        // route object
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            onlyOneChild: null
        };
    },
    methods: {
        //是否只有一个可以显示的子节点
        hasOneShowingChild(children = [], parent) {
            const showingChildren = children.filter(item => {
                return item.hidden !== true;
            });
            //只有一个子节点
            if (showingChildren.length === 1) {
                this.onlyOneChild = showingChildren[0];
                return true;
            }

            // 没有子节点
            if (showingChildren.length === 0) {
                this.onlyOneChild = { ...parent, noShowingChildren: true };
                return true;
            }
            return false;
        }
    }
};
</script>
