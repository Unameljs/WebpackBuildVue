# webpack构建vue3

### webpack及开发环境
```bash
pnpm add webpack #安装webpack
pnpm add webpack-cli #安装webpack-cli
pnpm add webpack-dev-server #安装开发环境 在package.json中使用
```

### html模板插件
```bash
pnpm add html-webpack-plugin #webpack配置文件中使用
```

### vue-loader与@vue-compiler-sfc解析vue以及sfc文件即是单文件组件(.vue文件)
```bash
pnpm add vue-loader@next #webpack配置文件中使用
pnpm add @vue-compiler-sfc #webpack配置文件中使用
```

### clean-webpack-plugin
```bash
pnpm add clean-webpack-plugin #每次打包前，先清空dist文件夹
```

### style-loader与css-loader
```bash
pnpm add style-loader #解析style样式
pnpm add css-loader #解析css文件
```

### less-loader 也可以配置less
```bash
pnpm add less #安装less
pnpm add less-loader #解析less文件
```

### typescript
```bash
pnpm add typescript
pnpm add ts-loader #解析ts
```

### friendly-errors-webpack-plugin 优化终端日志样式
```bash
pnpm add friendly-errors-webpack-plugin
```

### 通过CND引入Vue，将大大减小打包文件体积，843k变84k
```
在webpack配置文件中，然后在index.html文件引入cdn就能正常使用
```# WebpackBuildVue
