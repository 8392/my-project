/*
 * @Description:
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2020-01-03 14:36:02
 * @LastEditors: yanxin
 * @LastEditTime: 2020-03-05 11:37:40
 */
const modulesFiles = require.context("./modules", true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
}, {});
export default modules;
