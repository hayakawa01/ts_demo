export default function notExistSample() {
  let name = null
  console.log('notExistSample 1', typeof name, name)
  name = 'ハヤカワ'
  if (!name) {
    console.log('吾輩は猫である、名前はまだ' + name)
  } else {
    console.log('吾輩は猫である、名前は' + name)
  }
  // null よりもundefinedを使用すること
  let age = undefined
  console.log('notExistSample 1', typeof age, age)
  if (!age) {
    console.log('吾輩は猫である、年齢は' + age)
  } else {
    console.log('吾輩は猫である、年齢は' + age + '歳')
  }
}
