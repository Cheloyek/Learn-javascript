//export and import
//file 1
const sum = (a, b) => a + b
export default sum // экспортирует

const c = 1


//file 2
import sum from './file 1' //путь к файлу из которого импортируем
/* можно импортировать, но с другим названием функции
import sumNumbers from './file 1.js'
*/

const res = sum(1, 1)
console.log (res) // выведет сумму 2
console.log (c) // выдаст ошибку, импортировали только sum

//Пример экспорта нескольких переменных
//file 1
const one = 1
const two = 'two'

export {
  one,
  two
}

//file 2
import {
  one, // имена переменных должны совпадать
  //для переименования можно записать one as oneRenamed
  two
} from './file 1.js'

console.log(one) // 1
console/log(two) // 'two'
console.log(oneRenamed) // для примера с переименованием переменной при импорте
