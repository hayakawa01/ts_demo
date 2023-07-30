// import World from './world'
// const root = document.getElementById('root')
// const world = new World('Hello hogehoge!!!')
// world.sayHello(root)

// 第３回：型定義primitive
// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic/index'

// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

// 第4回：関数の型定義
import { logMessage, alwaysThrowError } from './function/basicFunc'
import { isUserSignIn, isUserSignIn2, sumProductsPrice } from './function/params'
logMessage('logMessage() 2023年7月29日')
// alwaysThrowError('alwaysThrowError never型関数')

isUserSignIn('001', 'ハヤカワ')
isUserSignIn('002', 'anonymous')
isUserSignIn('003')

isUserSignIn2('004')
isUserSignIn2('001')

const sum = sumProductsPrice(100, 200, 300, 400, 500, 600, 79)
console.log(sum)
