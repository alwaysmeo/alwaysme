<h1 align="center">
  <a href="https://www.alwaysme.org" target="_blank">Alwaysme-Design</a>
</h1>

### 💬 语言
-   简体中文 | [English](https://github.com/Alwaysmeo/alwaysme/blob/main/design/README_EN.md)

### 📌 简介
-   👻 此项目正处于开发测试阶段，切勿在生产环境中使用。
-   新拟态风格 Alwaysme UI 组件库，基于 Vue3 开发，支持 TypeScript。


### 💫 描述
-   **版本：** Vue >= 3.2.0
-   **注意：** Alwaysme-Design 不支持 IE 浏览器环境。

### 📦️ 安装

-   **推荐使用 npm 或 yarn 的方式进行包管理**
```bash
$ npm install @alwaysme/design
```
```bash
$ yarn add @alwaysme/design
```

### 🧑‍💻 使用

-   `/src/main.js` 文件中全局引入 `Alwaysme` 组件库

    ```javascript
    import { createApp } from 'vue'
    import App from './App.vue'

    import Alwaysme from '@alwaysme/design'
    import '@alwaysme/design/dist/style.css'
    createApp(App).use(Alwaysme).mount('#app')
    ```

-   如果是 TypeScript 项目，需在您的项目 `.d.ts` 文件中添加以下内容，以避免报错。无此文件可自行创建。

    ```typescript
    declare module '@alwaysme/design' {
        export function install(app: App): void
    }
    ```

###  📌 贡献者
-   <a href="https://github.com/Alwaysmeo" target="_blank"><img src="https://avatars.githubusercontent.com/u/62600916?v=4" height="52"></a>
