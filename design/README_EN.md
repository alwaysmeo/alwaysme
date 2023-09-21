<h1 align="center">
  <a href="https://www.alwaysme.org" target="_blank">Alwaysme-Design</a>
</h1>

### 💬 Language
-   [简体中文](https://github.com/Alwaysmeo/alwaysme/blob/main/design/README.md) | English


### 📌 Introduction
-   👻 This project is in the development stage and should not be used in the production environment.
-   Neumorphism-style Alwaysme UI component library, developed based on Vue3, supports TypeScript.

### 💫 Start
-   **Version** Vue >= 3.2.0
-   **Note：** Alwaysme-Design The IE browser environment is not supported.

### 📦️ Install

-   **Recommend using NPM or Yarn for package management**
```bash
$ npm install @alwaysme/design
```
```bash
$ yarn add @alwaysme/design
```

### 🧑‍💻 Use

-   `/src/main.js` global import in the file `Alwaysme` component library.

    ```javascript
    import { createApp } from 'vue'
    import App from './App.vue'

    import Alwaysme from '@alwaysme/design'
    import '@alwaysme/design/dist/style.css'
    createApp(App).use(Alwaysme).mount('#app')
    ```

-   If it is a TypeScript project, you need to add the following content to your project `.d.ts` file to avoid errors. You cannot create this file yourself.

    ```typescript
    declare module '@alwaysme/design' {
        export function install(app: App): void
    }
    ```

###  📌 Contributors
-   <a href="https://github.com/Alwaysmeo" target="_blank"><img src="https://avatars.githubusercontent.com/u/62600916?v=4" height="52"></a>
