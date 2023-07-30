// オプションパラメータをもつ関数
export const isUserSignIn = (userId: string, username?: string): boolean => {
  if (userId === '001') {
    console.log('管理者→' + username)
    return true
  } else {
    console.log('管理者でログインしていません、')
    return false
  }
}

// デフォルトパラメータをもつ関数
export const isUserSignIn2 = (userId: string, username = 'NO NAME'): boolean => {
  if (userId === '001') {
    console.log('管理者→' + username)
    return true
  } else {
    console.log('管理者でログインしていません' + username)
    return false
  }
}

// レストパラメータを使用する関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevPotal: number, productsPrice: number) => {
    return prevPotal + productsPrice
  }, 0)
}

// 呼び出しシグネチャ（省略記法）
// リアクトの関すコンポーネントでしょくつかうおあのうだｋそｓぢｆｋがあるので覚えておいていいかも！
type LogMessage = (message: string) => void

export const logMessage4: LogMessage = (message) => {
  console.log('void', message)
}
