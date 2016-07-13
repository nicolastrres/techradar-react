var config = {
  entry: './public/scripts/app.js',
  output: {
    path: './public/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query:
      {
          presets:['es2015', 'react']
      }
    },
    {
        test: /^((?!\.global).)*\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        ]
      }]
  }
}

module.exports = config
