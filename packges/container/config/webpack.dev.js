const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common')
// const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const jsonPackage = require('../package.json');
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
            },
           // shared: jsonPackage.dependencies

        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
};


module.exports = merge(commonConfig, devConfig)

