/*
 * @Description:
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2020-02-18 14:18:17
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 10:56:48
 */
module.exports = {
    publicPath: "./",
    outputDir: "dist",
    assetsDir: "static",
    lintOnSave: false,
    productionSourceMap: false,
    runtimeCompiler: true,
    configureWebpack: {
        //关闭 webpack 的性能提示
        performance: {
            hints: false
        }
    }
};
