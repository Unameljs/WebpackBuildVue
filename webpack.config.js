/**
 * webpack配置文件
 */

const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')//html模板
const {CleanWebpackPlugin} = require('clean-webpack-plugin')//清空dist文件夹
const {VueLoaderPlugin} = require('vue-loader/dist/index')//vue-loader解析vue
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const {configuration} = require('webpack')

/**
 * @type {configuration}
 */

const config = {
    mode:"development",
    entry:"./src/main.ts",
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:"vue-loader"
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    configFile: path.resolve(process.cwd(), 'tsconfig.json'),
                    appendTsSuffixTo: [/\.vue$/]
                },
            }
        ]
    },
    output:{
        filename:"[hash].js",
        path:path.resolve(__dirname,'dist')
    },
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'src')
        },
        extensions:['.vue','.ts','.js']
    },
    stats:"errors-only",
    devServer:{
        port:9001,
        open:true,
    },
    plugins:[
        new htmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo:{
                messages:['You application is running here http://localhost:9001']
            }
        })
    ],
    externals: {
        vue: "Vue"
    },
}

module.exports = config
