/*
 * @Description:
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2020-02-18 15:27:47
 * @LastEditors: yanxin
 * @LastEditTime: 2020-03-05 11:48:31
 */
const modulesFiles = require.context("./modules", true, /\.js$/);
let modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
}, {});
export default modules;
