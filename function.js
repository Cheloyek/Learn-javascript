let a = 2
let b = 3

function sum(a, b){
  const c = a + b
  console.log(c)
}

sum (a,b)
sum(3,7)

console.dir(sum)

function myFn() {}

myFn()

const personOne = {
  name: 'name1',
  age: 21
}

function increasePersonAge(person) {
  const updatedPerson = Object.assign({}, person)
  updatedPerson.age += 1
  return updatedPerson
}

const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatedPersonOne.age)
