
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path')
//check dev

module.exports = {
    entry: path.resolve(__dirname, './src/app.jsx'),
    output: {
        filename: "./bundle/bundle.js",
        library: 'todolist'
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']

            }
        ]
    },
    devtool: NODE_ENV === 'development' ? 'source-map' : false,
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: '"ru"'
        }),
        // new UglifyJsPlugin({
        //     uglifyOptions: {
        //         ie8: false,
        //         ecma: 6,
        //         output: {
        //             comments: false,
        //             beautify: false,
        //         },
        //         compress: {
        //             drop_console: false,
        //             unsafe: true
        //         },
        //     }
        // }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        compress: true,
        hot: true,
        port: 8080,
    }
};

console.log(NODE_ENV);
