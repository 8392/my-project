/*
 * @Description:
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-24 17:18:17
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 11:00:57
 */
export default {
    inserted(el, binding) {
        const { value } = binding;
        let { path } = value;
        if (path) {
            const hasPermission = path === 1;

            if (!hasPermission) {
                el.parentNode && el.parentNode.removeChild(el);
            }
        } else {
            throw new Error(`need roles! Like v-permission="['admin','editor']"`);
        }
    }
};
