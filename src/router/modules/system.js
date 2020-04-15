/*
 * @Description:
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-16 21:10:33
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 14:37:40
 */
const system = [
    {
        path: "/system",
        name: "system",
        redirect: "/system/tag/index",
        meta: {
            title: "辅助配置",
            icon: "el-icon-s-tools"
        },
        component: "Layout",
        children: [
            {
                path: "/system/index",
                name: "/system/index",
                hidden: true,
                meta: {
                    title: "辅助配置",
                    icon: "el-icon-s-tools",
                    breadcrumb: false
                },
                component: "/system/index",
                children: [
                    {
                        path: "/system/tag/index",
                        name: "/system/tag/index",
                        meta: {
                            title: "标签管理",
                            icon: "el-icon-s-tools",
                            activeMenu: "/system"
                        },
                        component: "/system/tag/index"
                    },
                    {
                        path: "/system/active/index",
                        name: "/system/active/index",
                        meta: {
                            title: "活动配置",
                            icon: "el-icon-s-tools",
                            activeMenu: "/system"
                        },
                        component: "/system/active/index"
                    },
                    {
                        path: "/system/code/index",
                        name: "/system/code/index",
                        meta: {
                            title: "编码生成规则",
                            icon: "el-icon-s-tools",
                            activeMenu: "/system"
                        },
                        component: "/system/code/index"
                    },
                    {
                        path: "/system/stage/index",
                        name: "/system/stage/index",
                        meta: {
                            title: "阶段占比",
                            icon: "el-icon-s-tools",
                            activeMenu: "/system"
                        },
                        component: "/system/stage/index"
                    }
                ]
            }
        ]
    }
];
export default system;
