/*
 * @Description:
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-16 21:10:33
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-09 09:25:03
 */
const develop = [
    {
        path: "/develop",
        name: "develop",
        redirect: "/develop/data/table",
        meta: {
            title: "开发",
            icon: "el-icon-s-tools"
        },
        component: "Layout",
        children: [
            {
                path: "/develop/data/table",
                name: "develop/data/table",
                meta: {
                    title: "表格",
                    icon: "el-icon-s-tools"
                },
                component: "/develop/data/table"
            },
            {
                path: "/develop/data/form",
                name: "develop/data/form",
                meta: {
                    title: "表单",
                    icon: "el-icon-s-tools",
                    keepAlive: true
                },
                component: "/develop/data/form"
            },
            {
                path: "/develop/data/tree",
                name: "develop/data/tree",
                meta: {
                    title: "甘特图1",
                    icon: "el-icon-s-tools"
                },
                component: "/develop/data/tree"
            },
            {
                path: "/develop/data/gantt",
                name: "develop/data/gantt",
                meta: {
                    title: "甘特图2",
                    icon: "el-icon-s-tools"
                },
                component: "/develop/data/gantt"
            },
            {
                path: "/develop/data/steps",
                name: "develop/data/steps",
                meta: {
                    title: "测试",
                    icon: "el-icon-s-tools"
                },
                component: "/develop/data/steps"
            }
        ]
    }
];
export default develop;
