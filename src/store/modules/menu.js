/*
 * @Description:
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-16 21:10:33
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 11:01:13
 */
const state = {
    isCollapse: false
};
const getters = {};
const actions = {
    toggleSideBar({ state }) {
        state.isCollapse = !state.isCollapse;
    }
};
const mutations = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
