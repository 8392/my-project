/*
 * @Description:
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-20 16:06:46
 * @LastEditors: yanxin
 * @LastEditTime: 2020-03-11 18:01:29
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
    const valid_map = ["admin", "editor"];
    return valid_map.indexOf(str.trim()) >= 0;
}

export function validTel(rule, value, callback) {
    if (!/^1[3-9]\d{9}$/.test(value)) {
        callback(new Error("请输入正确的电话号码"));
    } else {
        callback();
    }
}
/**
 * @description: 匹配正整数
 * @param {type}
 * @return:
 * @author: yanxin
 */
export function validPosInt(rule, value, callback) {
    if (!/^[1-9]\d*$/.test(value)) {
        callback(new Error("请输入正整数"));
    } else {
        callback();
    }
}
/**
 * @description: 匹配正整数和0
 * @param {type}
 * @return:
 * @author: yanxin
 */
export function validPosIntZ(rule, value, callback) {
    if (!/^[1-9]\d*|0$/.test(value)) {
        callback(new Error("请输入正整数"));
    } else {
        callback();
    }
}
/**
 * @description: 匹配正数，保留两位小数
 * @param {type}
 * @return:
 * @author: yanxin
 */
export function validPos(rule, value, callback) {
    if (!/^0\.\d{2}|[1-9]\d*\.\d{2}|[1-9]\d*$/.test(value)) {
        callback(new Error("请输入正数"));
    } else {
        callback();
    }
}
/**
 * @description: 匹配正数和0，保留两位小数
 * @param {type}
 * @return:
 * @author: yanxin
 */
export function validPosZ(rule, value, callback) {
    if (!/^0\.\d{2}|[1-9]\d*\.\d{2}|[1-9]\d*|0$/.test(value)) {
        callback(new Error("请输入正数"));
    } else {
        callback();
    }
}
