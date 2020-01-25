const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const buildFolder = "build";

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, buildFolder),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules/'),
                use: ['babel-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, buildFolder),
        port: 9000
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "src/index.html"
        })
    ]
}