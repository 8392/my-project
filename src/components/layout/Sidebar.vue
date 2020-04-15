<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-16 21:10:33
 * @LastEditors: yanxin
 * @LastEditTime: 2020-03-18 13:36:50
 -->
<template>
    <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="true"
        background-color="#304156"
        text-color="#bfcbd9"
        mode="vertical"
    >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" />
    </el-menu>
</template>
<script>
import { mapState } from "vuex";
import SidebarItem from "./SidebarItem";
export default {
    components: {
        SidebarItem
    },
    data() {
        return {};
    },
    computed: {
        ...mapState({
            isCollapse: state => state.menu.isCollapse
        }),
        routes() {
            return this.$router.options.routes;
        },
        activeMenu() {
            const route = this.$route;
            const { meta, path } = route;
            // 如果设置了，侧边栏将会高亮显示，适用于一些不是侧边栏的页面
            if (meta.activeMenu) {
                return meta.activeMenu;
            }
            return path;
        }
    }
};
</script>
