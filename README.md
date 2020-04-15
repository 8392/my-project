<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-16 21:10:33
 * @LastEditors  : yanxin
 * @LastEditTime : 2020-02-14 11:36:54
 -->
# pit

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 命名规范
js相关 驼峰法命名
文件夹 kebab-case
vue组建命名 除index.vue之外 PascalCase
### 动态生成路由
路由前置守卫判断有无token,无token跳转登录页获取，有token则去获取路由
退出登录 重置token等信息 重置路由
