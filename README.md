# AlwaysMe-Design-Vue3

### 📌 Desc

-   🔥 This project is in the development stage and should not be used in the production environment.

    👻 此项目正处于开发测试阶段，切勿在生产环境中使用。

### 💫 Start

-   **版本：** Vue >= 3.2.0

     **注意：** 由于 Vue3 不再支持 IE 浏览器环境，AlwaysMe 也不再支持 IE 浏览器环境。

### 📦️ Install

-   **推荐使用 npm 或 yarn 的方式进行包管理**

    `npm install @alwaysme/design-vue3`

    `yarn add @alwaysme/design-vue3`

### 🧑‍💻 Use

-   `/src/main.js` 文件中全局引入 `AlwaysMe` 组件库

    ```javascript
    import { createApp } from 'vue'
    import App from './App.vue'

    import AlwaysMe from '@alwaysme/design-vue3'
    import '@alwaysme/design-vue3/style.css'
    createApp(App).use(AlwaysMe).mount('#app')
    ```

-   如果是 TypeScript 项目，需在您的项目 `.d.ts` 文件中添加以下内容，以避免报错。无此文件可自行创建。

    ```typescript
    declare module '@alwaysme/design-vue3' {
        export function install(app: App): void
    }
    ```

###  📌 Contributors 贡献者
-   <a href="https://github.com/Alwaysmeo" target="_blank"><img src="https://avatars.githubusercontent.com/u/62600916?v=4" height="52" style="border-radius: 50%"></a>