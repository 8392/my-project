<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-16 21:10:33
 * @LastEditors: yanxin
 * @LastEditTime: 2020-03-12 16:32:40
 -->
<template>
    <el-container class="app-wrapper">
        <sidebar class="sidebar-container" />
        <el-container>
            <el-header height="50px">
                <Navbar></Navbar>
            </el-header>
            <el-main class="app-container">
                <transition name="el-fade-in-linear" mode="out-in">
                    <router-view :key="$route.fullpath"> </router-view>
                </transition>
            </el-main>
        </el-container>
        <el-backtop target=".app-container"></el-backtop>
    </el-container>
</template>
<script>
import { mapState } from "vuex";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
export default {
    name: "Layout",
    components: {
        Sidebar,
        Navbar
    },
    data() {
        return {
            transitionName: "slide-right"
        };
    },
    // watch $route 决定使用哪种过渡
    watch: {
        // $route(to, from) {
        //   const toDepth = to.path.split("/").length;
        //   const fromDepth = from.path.split("/").length;
        //   this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
        // }
    },
    computed: {
        ...mapState({
            isCollapse: state => state.menu.isCollapse
        })
    }
};
</script>
<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
}
.sidebar-container {
    height: 100%;
}
.sidebar-container:not(.el-menu--collapse) {
    width: 200px;
}
.app-wrapper .el-header {
    padding: 0;
}
.el-main {
    padding: 20px 20px 20px;
}
</style>
