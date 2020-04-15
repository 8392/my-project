/*
 * @Description:
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2020-04-15 09:56:38
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 13:55:43
 */
//示例
export default [
    {
        name: "user-login", //接口名
        namespace: "user", //命名空间（为避免命名空间名称重复，应与文件名一致）
        method: "get",
        url: "/web/api/v1/common/fanwei/jump",
        desc: "登录" //接口描述
    }
    // {
    //     name: "test-workTime",
    //     namespace: "test",
    //     method: "put",
    //     url: "/ship/rescue/plan/workTime",
    //     desc: "工作时间修改"
    // }
];
