# AlwaysMe-Design

## Desc

-   💡 This project is in the development stage and should not be used in the production environment.
-   👻 此项目正处于开发测试阶段，切勿在生产环境中使用。

## 快速开始

-	**版本：**Vue >= 3.2.0
-   **注意：**由于 Vue3 不再支持 IE 浏览器环境，AlwaysMe 也不再支持 IE 浏览器环境。

-   ## 安装

-   `/src/main.js` 文件中全局引入 `ALwaysMe` 组件库

    ```javascript
    import { createApp } from 'vue'
    import App from './App.vue'

    import ALwaysMe from 'alwaysme'
    import 'alwaysme/style.css'
    createApp(App).use(ALwaysMe).mount('#app')
    ```
