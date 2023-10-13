/**
 * webpack配置文件
 */

const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')//html模板
const {CleanWebpackPlugin} = require('clean-webpack-plugin')//清空dist文件夹
const {VueLoaderPlugin} = require('vue-loader/dist/index')//vue-loader解析vue
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

//引入智能提示文件
const {configuration} = require('webpack')

/**
 * @type {configuration}
 */

const config = {
    mode:"development",//不会压缩打包后文件的代码
    entry:"./src/main.ts",//入口文件
    module:{
        //处理文件
        rules:[
            {
                test:/\.vue$/,
                use:"vue-loader"
            },
            {
                test: /\.less$/, //解析 less
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.css$/, //解析css
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.ts$/,  //解析ts
                loader: "ts-loader",
                options: {
                    configFile: path.resolve(process.cwd(), 'tsconfig.json'),
                    appendTsSuffixTo: [/\.vue$/]
                },
            }
        ]
    },
    output:{//出口文件
        filename:"[hash].js",
        path:path.resolve(__dirname,'dist')//输出的目录
    },
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'src')//配置别名
        },
        extensions:['.vue','.ts','.js']//自动补全后缀
    },
    stats:"errors-only",//去除终端无用提示
    devServer:{
        port:9001,//指定开发环境端口
        open:true,//自动打开网页
    },
    plugins:[
        new htmlWebpackPlugin({
            template:"./public/index.html"//模板所在目录
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo:{ //美化样式
                messages:['You application is running here http://localhost:9001']
            }
        })
    ],
    externals: {
        vue: "Vue" //CDN 引入
    },
}

module.exports = config