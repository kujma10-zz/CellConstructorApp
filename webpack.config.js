module.exports = {
  entry: './js/main.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    port: 3090
  },
  module: {
    noParse: /node_modules\/matter-js\/build\/matter.js/,
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }

};
