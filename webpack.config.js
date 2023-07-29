const path = require('path')
// webpackの設定ファイル
module.exports = {
  // モジュールをバンドルする際の
  // エントリーポイント（起点）となる変数の命名と参照ファイルの設定
  entry: {
    bundle: './src/index.ts',
  },
  // 出力先のパス、今回は最終的にts→js似直したdistファイルのあるdistディレクトリを参照する
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    hot: true,
    // contentBase: path.join(__dirname, "dist"),  versionが新しくなったので書き直す必要がある
    // https://zenn.dev/kaito_takase/articles/abdb62bf8e352a
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/, //   \. → ドットエスケープ 、$末尾指定
      },
    ],
  },
}
