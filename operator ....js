const button = {
  width: 200,
  text: 'Buy'
}

const blueButton = {
  ...button, //разделяет объект на свойства
  color: 'blue' // добавляет к свойствам внутри объекта blueButton
}

console.log(button) // не меняется
console.log(blueButton) // свойства объекта button и добавление новых
console.table(blueButton) // выводит свойства объекта в виде таблицы