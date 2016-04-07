var path = require('path');
var webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require('./package.json').version)
    }),
    // Per https://github.com/dailymotion/hls.js/issues/187
    new webpack.NormalModuleReplacementPlugin(/^webworkify$/, 'webworkify-webpack')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: { cacheDirectory: true }
        // config in .babelrc
      },
      {
        test: /\.s?css$/,
        loaders: ['css', 'sass?includePaths[]='
          + path.resolve(__dirname, './node_modules/compass-mixins/lib')
          + '&includePaths[]='
          + path.resolve(__dirname, './src/scss')
        ],
        include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, './node_modules/clappr/src')],
      },
      {
        test: /\.(png|woff|eot|ttf|swf|cur)/, loader: 'url-loader?limit=1'
      },
      {
        test: /\.svg/, loader: 'svg-inline'
      },
      {
        test: /\.html/, loader: 'html?minimize=false'
      }
    ],
  },
  resolve: {
    external: { Clappr: 'Clappr' },
    root: path.resolve(__dirname, 'src'),
    extensions: ['', '.js'],
  }
};
