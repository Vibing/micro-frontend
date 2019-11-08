const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['react', 'react-dom', 'mobx', 'mobx-react', 'react-loadable']
  },
  output: {
    path: path.resolve(__dirname, 'dll'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.DllPlugin({
      context: __dirname,
      /**
       * path
       * 定义 manifest 文件生成的位置
       * [name]的部分由entry的名字替换
       */
      path: path.join(__dirname, 'dll', '[name]-manifest.json'),
      /**
       * name
       * static bundle 输出到那个全局变量上
       * 和 output.library 一样即可。
       */
      name: '[name]_library'
    })
  ]
};
