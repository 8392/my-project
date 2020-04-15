import axios from "axios";
import { Message } from "element-ui";
import { router } from "@/router";
import { getToken, removeToken, TokenKey } from "@/utils/auth";
import Qs from "qs";
// create an axios instance
axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 30000, // request timeout
    paramsSerializer: function(params) {
        //get请求传数组时序列化
        return Qs.stringify(params, { arrayFormat: "repeat" });
    }
});

// request interceptor
axios.interceptors.request.use(
    config => {
        // get请求 格式化数组和对象参数
        config.headers["content-type"] = "application/json";
        config.headers[TokenKey] =
            "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwidXNlcklEIjoiMSIsImV4cGlyYXRpb25UaW1lIjoiMTU4Njk4MDI2MTQ0MiJ9.Y38uAK61gRZlz4aWTqOyR6dNr1zEJHWjvBlgxTHFbIM" ||
            getToken() ||
            "";

        return config;
    },
    error => {
        // do something with request error
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

// response interceptor
axios.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code !== 0) {
            if (res.code == 400 && res.msg == "token已过期") {
                removeToken();
                router.push("/login");
                return;
            }

            Message({
                message: res.message || res.msg || "Error",
                type: "error",
                duration: 2 * 1000
            });

            return Promise.reject(res.message || res.msg || "Error");
        } else {
            return res.data;
        }
    },
    error => {
        let _status = error.response.status;
        switch (_status) {
            case 400:
                error.message = "错误的请求";
                break;
            case 403:
                error.message = "拒绝访问";
                break;
            case 404:
                error.message = `错误的地址: ${error.response.config.url}`;
                break;
            case 408:
                error.message = "请求超时";
                break;
            case 500:
            case 501:
            case 502:
            case 503:
            case 504:
            case 505:
                error.message = "服务器错误";
                break;
            default:
                error.message = "未知错误";
                break;
        }

        Message({
            message: error.message,
            type: "error",
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
);

// export default service
const request = async allParams => {
    let { method, url, params, header } = allParams;
    if (!params) params = {};
    method = method.toUpperCase();
    if (!header["Content-Type"]) {
        header["Content-Type"] = "application/json;charset=UTF-8";
        // header['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    }

    return await axios({
        method: method,
        url: process.env.VUE_APP_BASE_API + url,
        data: method === "POST" || method == "PATCH" || method == "PUT" ? params : null,
        params: method === "GET" || method === "DELETE" ? params : null,
        headers: header,
        transformRequest: [
            function(data, header) {
                if (header["Content-Type"] == "application/json;charset=UTF-8") return JSON.stringify(data);
                let newData = "";
                for (let k in data) {
                    if (data.hasOwnProperty(k) === true) {
                        newData +=
                            encodeURIComponent(k) +
                            "=" +
                            //encodeURIComponent(JSON.stringify(data[k])) +
                            encodeURIComponent(data[k]) +
                            "&";
                    }
                }
                return newData;
            }
        ]
    });
};
export default request;
