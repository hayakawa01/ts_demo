export default function anySample() {
  // any型は使わない、TSの意味がなくなるから
  let name: any = 'hayakawa'
  let age: any = false
  console.log('anySample 1', typeof name, name)
  console.log('anySample 2', typeof age, age)
}
