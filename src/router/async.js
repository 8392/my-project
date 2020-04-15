/*
 * @Description:
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-21 13:51:02
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 10:59:31
 */
const modulesFiles = require.context("./modules", true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const value = modulesFiles(modulePath);
    modules = [...modules, ...value.default];
    return modules;
}, []);

const asyncRoutes = modules;
export default asyncRoutes;
