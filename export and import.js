//export and import
//file 1
const sum = (a, b) => a + b
export default sum // экспортирует

const c = 1


//file 2
import sum from './file 1' //путь к файлу из которого импортируем
/* можно импортировать, но с другим названием функции
import sumNumbers from './file 1'
*/

const res = sum(1, 1)
console.log (res) // выведет сумму 2
console.log (c) // выдаст ошибку, импортировали только sum
