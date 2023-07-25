module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended', // ESlintの推奨チェック項目43個くらいあるらしい 'plugin:@typescript-eslint/recommended', // TypeScriptでチェックされる項目をLintから除外する設定
    'prettier', // prettierのextendsは他のextendsより後に記述する
    // 'prettier/@typescript-eslint', 最新ではTSにも対応したのでコメントアウト
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser', // parser → 解析ツール
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json', // TypeScriptのLint時に参照するconfigファイルを指定
  },
  root: true, // 上位ディレクトリにある他のeslintrcを参照しないようにする
  rules: {},
}
