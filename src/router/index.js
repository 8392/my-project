/*
 * @Description:
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-16 21:10:33
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-08 10:39:27
 */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import NProgress from "nprogress"; // 顶部进度条
import "nprogress/nprogress.css"; // 顶部进度条样式
import { getToken } from "@/utils/auth";
import constantRoutes from "./constant";
Vue.use(VueRouter);

const createRouter = () =>
    new VueRouter({
        mode: "hash",
        scrollBehavior: () => ({ y: 0, x: 0 }),
        routes: constantRoutes
    });

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}
//白名单，不需要验证
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
    NProgress.start();

    let hasToken = getToken();
    //有无token
    if (hasToken) {
        if (to.path === "/login") {
            // 如果登录了则跳转到首页
            next({ path: "/" });
        } else if (!store.state.permission.init) {
            //没有初始化路由，则去初始化路由
            await store.dispatch("permission/GenerateRoutes");
            // 生成可访问的路由表
            let addRouters = store.state.permission.addRouters;
            router.addRoutes(addRouters); // 动态添加可访问路由表
            router.options.routes = store.state.permission.routers;
            next({ ...to, replace: true }); // hack方法 确保addRoutes已完成
        } else {
            next();
        }
    } else {
        //白名单不需要验证
        if (whiteList.includes(to.path)) {
            next();
        } else {
            next(`/login?redirect=${to.path}`);
            NProgress.done();
        }
    }
});

router.afterEach(() => {
    NProgress.done();
});
export default router;
