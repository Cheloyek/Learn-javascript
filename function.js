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
  const updatedPerson = Object.assign({}, person) // updatedPerson = personOne
  updatedPerson.age += 1 // age у updatedPerson = age+1 у personOne
  return updatedPerson // возвращает updatedPerson = personOne
}

const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne.age) // оригинальный объект не изменится
console.log(updatedPersonOne.age)

//callback function
function anotherFunction() {
  console.log('This is anotherFunction')
}

function fnWithCallback(callbackFunction){
  callbackFunction()
}
fnWithCallback(anotherFunction)

function printMyName() {
console.log('Name')
}

setTimeout(printMyName, 1000) // вызовет функцию через 1 сек.
