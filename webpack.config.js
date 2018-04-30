const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path')


const src = path.resolve(__dirname, './src/app.jsx');

module.exports = {
  entry: src,
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
        test: /\.(js|jsx)$/,
        include: src,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: [
            [
              'env',
              {
                modules: false,
                targets: ['last 2 versions']
              }
            ],
            'react',
            'stage-2'
          ],
          plugins: [
            'transform-runtime'
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
      // {
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ["@babel/preset-env", "@babel/preset-react"],
      //       plugins: ["babel-plugin-transform-runtime"]
      //     }
      //   }
      // },
      
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
