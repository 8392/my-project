/*
 * @Description:
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-21 14:33:38
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-03 11:15:14
 */
import asyncRouterMap from "@/router/async";
import constantRouterMap from "@/router/constant";
import Layout from "@/components/layout/Layout.vue";
import Config from "@/config/index";
import { resetRouter } from "@/router/index";

const map = {
    development: file => require("@/views" + file + ".vue").default,
    production: file => () => import("@/view" + file + ".vue")
};
const _import = map[process.env.NODE_ENV];

// 遍历传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap) {
    const accessedRouters = asyncRouterMap.filter(route => {
        if (route.component) {
            if (route.component === "Layout") {
                // Layout组件特殊处理
                route.component = Layout;
            } else {
                route.component = _import(route.component);
            }
        }
        if (route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children);
        }
        return true;
    });
    return accessedRouters;
}

const state = {
    init: false,
    routers: constantRouterMap,
    addRouters: []
};
const mutations = {
    SET_ROUTERS: (state, routers) => {
        state.addRouters = routers;
        state.routers = constantRouterMap.concat(routers);
        state.init = true;
    },
    RESET_ROUTERS: state => {
        state.addRouters = [];
        state.routers = constantRouterMap;
        state.init = false;
    }
};
const actions = {
    //获取路由
    async GenerateRoutes({ commit }) {
        let accessedRouters;
        //前端获取路由权限
        if (Config.getRouteAuthType == 1) {
            accessedRouters = JSON.parse(JSON.stringify(asyncRouterMap));
        }
        let addRouters = filterAsyncRouter([...accessedRouters, { path: "*", redirect: "/404", hidden: true }]);
        commit("SET_ROUTERS", addRouters);
        return addRouters;
    },
    resetRoutes({ commit }) {
        commit("RESET_ROUTERS");
        resetRouter();
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions
};
