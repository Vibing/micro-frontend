const path = require('path');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    portal: 'src/portal.js'
  },
  output: {
    publicPath: 'http://localhost:9000/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'release')
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    modules: [__dirname, 'node_modules']
  },
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      },
      canPrint: true
    }),
    new webpack.DefinePlugin({
      __DEV__: true,
      STATIC_URL: JSON.stringify(
        'https://e-static.oss-cn-shanghai.aliyuncs.com'
      ),
      _URL_: JSON.stringify('http://api.qiyizhuan.com.cn/backend'), //api.mizhuanba.com
      TOKEN_KEY: JSON.stringify('token_key')
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../../dll/vendor-manifest.json')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.ejs'),
      templateParameters: {
        title: 'test'
      }
    }),
    // 该插件将把给定的 JS 或 CSS 文件添加到 webpack 配置的文件中，并将其放入资源列表 html webpack插件注入到生成的 html 中。
    new AddAssetHtmlPlugin([
      {
        // 要添加到编译中的文件的绝对路径，以及生成的HTML文件。支持 globby 字符串
        filepath: require.resolve('../../dll/vendor.dll.js')
      }
    ]),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/)
  ],
  devtool: 'source-map',
  externals: [],
  mode: 'development',
  devServer: {
    contentBase: './release',
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
};
