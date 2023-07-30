README.md

## 1. 環境構築

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

## 2. 型定義（primitive, any, unknown)

## 3. 型定義を使用した関数の書き方(引数と返り値に型定義)

### 関数で使用する特別な型

#### void

`return` を持たない関数の戻り値

```
const logMessage = (message:string):void =>{
  console.log(message)
}
```

とか

### 関数で使用する特別な型

#### never

決して戻ることのない戻り値

```
const alwaysThrowError = (message:string):never =>{
  throw new Error(message)
}
```

とか、whileなどループで使用する可能性がある
