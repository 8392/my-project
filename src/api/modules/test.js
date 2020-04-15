//示例
export default [
    {
        name: "login-from", //接口名
        namespace: "login",
        method: "get",
        url: "/rhpass.basic/web/api/v1/common/login",
        desc: "登录"
    },
    {
        name: "test-workTime",
        namespace: "test",
        method: "put",
        url: "/ship/rescue/plan/workTime",
        desc: "工作时间修改"
    },
    {
        name: "ownerUnitList",
        namespace: "test",
        method: "get",
        url: "/web/api/v1/ownerUnit/list",
        desc: "获取工作单位列表"
    },
    {
        name: "compreDeparAlllist", //接口名
        namespace: "compreDepart", //命名空间（为避免命名空间名称重复，应与文件名一致）
        method: "POST",
        url: "/web/api/v1/project/list",
        desc: "获取全部项目列表" //接口描述
    }
];
