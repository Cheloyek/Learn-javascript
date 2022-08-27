let a
let b

function myFn() {
  let b
  a = true
  b = 10
  console.log(a) // print 'true' - change global a
  console.log(b) // print '10' - it`s local b
}

myFn()

console.log(a) // print 'true'
console.log(b) // print 'undefined' - it`s global b