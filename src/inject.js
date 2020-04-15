/*
 * @Description:
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-25 10:57:14
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 11:01:40
 */
import globalDirective from "@/directive/index";
import globalComponent from "@/components/index";
import api from "./utils/serviceInstance";
import utils from "@/utils";
export default {
    install: Vue => {
        Object.keys(globalDirective).forEach(key => {
            Vue.directive(key, globalDirective[key]);
        });

        Object.keys(globalComponent).forEach(key => {
            Vue.component(key, globalComponent[key]);
        });
        Vue.prototype.$_server = api.server;
        Vue.prototype.$utils = utils;
    }
};
