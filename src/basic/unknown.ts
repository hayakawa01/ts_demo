export default function unknownSample() {
  // unknown型：
  // APIの返り値を変数に代入する際に使用することが多い、
  // レスポンスの方に応じた処理が可能になる
  const maybeNumber: unknown = 10
  console.log('maybeNumber 1', typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === 10
  console.log('isFoo 1', typeof isFoo, isFoo)

  // const sum = maybeNumber + 20
  // unknown型と四則計算しようとするとエラーが発生する、
  // if文などで断定する必要がある
  if (typeof maybeNumber == 'number') {
    const sum = maybeNumber + 20
    console.log("typeof maybeNumber == 'number'", typeof sum, sum)
  }
}
