const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
    mode: "production",
    entry: "./src/index.jsx", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './api/public/'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/',
        filename: "bundle.js"       // название создаваемого файла
    },

    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.(js|jsx)?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    "presets": ["@babel/preset-env", "@babel/preset-react"],
                    "plugins": ["@babel/plugin-proposal-class-properties"] // используемые плагины
                }

            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: './src/styles/style.css',
            chunkFilename: 'style.css',
        }),
    ]
}