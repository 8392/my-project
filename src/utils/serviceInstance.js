import api from "@/api";
import _ajax from "./request";

// console.log(api);
let arr = [];
for (var i in api) {
    api[i].forEach(curr => {
        arr.push(curr);
    });
}
// console.log(arr);

class ServiceInstance {
    constructor(options) {
        this.server = {};
        this.info = {};
        this.build(options);
    }
    build(options) {
        Object.keys(options).map(once => {
            // let apiName = options[once]['name'] + "/" + options[once]['namespace']
            let apiName = options[once]["name"];
            Object.defineProperty(this.server, apiName, {
                value(params, attach, headers) {
                    options[once].url = (!!attach && options[once].url + "/" + attach) || options[once].url;
                    let allParams = options[once];
                    allParams["params"] = params || {};
                    let addHeaders = headers || {};
                    allParams["header"] = Object.assign({}, options[once]["header"], addHeaders); //合并请求头
                    return _ajax(allParams);
                }
            });
            Object.defineProperty(this.info, apiName, {
                value: options[once]
            });
        });
    }
}
export default new ServiceInstance(arr);
