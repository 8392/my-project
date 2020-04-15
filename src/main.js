/*
 * @Description:
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-16 21:10:33
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 13:36:05
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";

import "@/components/SvgIcon/icons"; // svg图标
import "./styles/element-variables.scss"; //element样式
//import "./styles/theme/index.css";
import "normalize.css/normalize.css"; //css样式初始化
import "@/styles/index.scss"; // 全局 css

import inject from "./inject";

Vue.config.productionTip = false;

if (process.env.NODE_ENV == "development") {
    Vue.config.devtools = true;
} else {
    Vue.config.devtools = false;
}

Vue.use(ElementUI, {
    size: "small",
    zIndex: 3000
});
Vue.use(inject);

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

export default app;
