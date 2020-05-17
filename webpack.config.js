const path = require('path');

module.exports = {
  mode: "development",

  entry: {
    app: './src/js/app.js',
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },


  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },

  devServer: {
    port: 8080,
    host: '0.0.0.0',
    hot: true,
    watchContentBase: true,
    contentBase: "./public"
  }
}