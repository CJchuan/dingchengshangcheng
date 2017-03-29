var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'//添加对样式表的处理,内联样式
      }
    ]
  },

  

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,

    proxy: {
          '/login': {
              target: 'http://10.2.158.246:3000',
              host: '10.2.158.246:3000',
              changeOrigin: true
          },

          "/upsession":{
              target: 'http://10.2.158.246:3000',
              host: '10.2.158.246:3000',
              changeOrigin: true
          },
          "/shopcar/add":{
              target: 'http://10.2.158.246:3000',
              host: '10.2.158.246:3000',
              changeOrigin: true
          }
<<<<<<< HEAD
=======
          // ,
          // "/shopcar/add":{
          //     target: 'http://10.2.158.246:3000',
          //     host: '10.2.158.246:3000',
          //     changeOrigin: true
          // }
>>>>>>> ef8b5750dd6f4d3e5a3f08bcdfc55854efa9eb34

    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
