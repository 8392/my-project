const active = [
    {
        path: "/active",
        name: "active",
        redirect: "/active/index",
        meta: {
            title: "活动清单",
            icon: "el-icon-s-tools",
            breadcrumb: false
        },
        component: "Layout",
        children: [
            {
                path: "/active/index",
                name: "/active/index",
                hidden: true,
                meta: {
                    title: "活动清单",
                    icon: "el-icon-s-tools"
                },
                component: "/active/index"
            }
        ]
    }
];
export default active;
