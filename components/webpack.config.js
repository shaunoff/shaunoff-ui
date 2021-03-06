const path = require('path')

module.exports = {
  entry: './src/index.ts',
  output: {
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'index.js',
    library: '@shaunoff-ui/components',
    libraryTarget: 'umd',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      react: path.join(__dirname, '..', '..', '..', 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.css$/i,
      //   include: path.resolve(__dirname, 'style'),
      //   use: ['style-loader', 'css-loader', 'postcss-loader'],
      // },
    ],
  },
}
