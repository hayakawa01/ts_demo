export default function primitiveSample() {
  console.log('-------------------------------------')
  let name: string = 'hayakawa'
  // name = 123 Type 'number' is not assignable to type 'string'.
  console.log('primitiveSample 1', typeof name, name)

  console.log('-------------------------------------')
  let age: number = 29
  console.log('primitiveSample 2', typeof age, age)

  console.log('-------------------------------------')
  // let isSingle: boolean = true
  let isSingle: boolean = age >= 25
  console.log('primitiveSample 2', typeof isSingle, isSingle)
}
