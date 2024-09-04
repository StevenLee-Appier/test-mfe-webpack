const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

 module.exports = {
    entry: {
        app: "./index.jsx"
    },
    output: {

    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                        '@babel/preset-env', 
                        { targets: "defaults" }
                    ],
                    [
                        "@babel/preset-react",
                        { "runtime": "automatic" }
                    ],
                  ]
                }
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.mjs'],
    },
    devServer: {
        port: 3008
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'host',
            filename: 'remoteEntry.js',
            remotes: {
              aixon: 'aixon@http://localhost:8888/remoteEntry.js'
            },
            shared: {
                'react-dom': {
                    singleton: true,
                    requiredVersion: '^17.0.2',
                },
                react: {
                    singleton: true,
                    requiredVersion: '^17.0.2',
                },          
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "index.html"),
        })
    ]
 }