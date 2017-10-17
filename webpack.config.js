import {
  paths
} from './gulpfile.babel.js/config';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
              plugins: ['transform-object-rest-spread'],
              cacheDirectory: true,
            },
          },
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"', 'sass-loader']
        })
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin(paths.stylesheets.dist),
  ],
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'index.js',
  }
};
