/*
 * @Description:
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-21 13:50:53
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 10:59:24
 */
import Layout from "@/components/layout/Layout.vue";
export default [
    {
        path: "/",
        redirect: "/dashboard",
        component: Layout,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: "首页",
                    icon: "el-icon-s-tools"
                },
                component: () => import("@/views/base/home.vue")
            }
        ]
    },
    {
        path: "/treeAssembly",
        redirect: "/treeAssembly",
        component: Layout,
        children: [
            {
                path: "/treeAssembly",
                name: "treeAssembly2",
                meta: {
                    title: "递归组件",
                    icon: "el-icon-s-tools"
                },
                component: () => import("@/views/base/treeAssembly.vue")
            }
        ]
    },
    {
        path: "/redirect",
        component: Layout,
        hidden: true,
        children: [
            {
                path: "/redirect/:path*",
                component: () => import("@/views/base/redirect")
            }
        ]
    },
    {
        path: "/login",
        name: "login",
        hidden: true,
        component: () => import("@/views/base/login.vue")
    },
    {
        path: "/404",
        name: "404",
        hidden: true,
        component: () => import("@/views/base/404.vue")
    }
];
