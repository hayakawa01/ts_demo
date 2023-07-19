README.md

## 環境構築

```
npm install --save-dev typescript ts-loader webpack webpack-cli webpack-dev-server
```

- `--save-dev`で開発環境にのみ`npm install`が走る
- 各パッケージの説明
  - typescript
    - TS を JS に変換するコンパイラ
  - ts-loader
    - webpack と連動して、コンパイラを起動する
  - webpack
    - 複数ファイルを 1 つにまとめる
  - webpack-cli
    - コマンドライン上で webpack をそうさできる
  - webpack-dev-server
    - webpack のビルドや web サーバー（ローカル環境）の起動
