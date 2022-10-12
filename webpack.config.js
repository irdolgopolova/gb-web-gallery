const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: resolve(__dirname, 'src', 'main.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: resolve(__dirname, 'src' ,'index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(mp[3|4])$/i,
                use: ['file-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'img-optimize-loader',
                    options: {
                        compress: {
                            mode: 'high',
                            webp: true,
                            gifsicle: true,
                            disableOnDevelopment: false
                        }
                    }
                }],
            },
        ]
    },
    devServer: {
        port: 3000
    }
};