/*
 * @Description:
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-16 21:10:33
 * @LastEditors: yanxin
 * @LastEditTime: 2020-03-05 11:41:04
 */
import { setToken, removeToken } from "@/utils/auth";
// eslint-disable-next-line no-unused-vars
import Vm from "@/main.js";
const state = {
    userInfo: JSON.parse(sessionStorage.getItem("userInfo")) || {}
};

const mutations = {
    SET_USERINFO: (state, userInfo) => {
        state.userInfo = userInfo;
    }
};

const actions = {
    // eslint-disable-next-line no-unused-vars
    async login({ commit }, param) {
        // let userInfo = await Vm.$_server.login(param);
        let userInfo = {
            token: "adsasda"
        };
        commit("SET_USERINFO", userInfo);
        setToken(userInfo.token);
        sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
    logout({ commit, dispatch }) {
        commit("SET_USERINFO", "");
        removeToken();
        sessionStorage.removeItem("userInfo");

        dispatch("permission/resetRoutes", null, { root: true });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
