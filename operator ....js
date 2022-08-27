const button = {
  width: 200,
  text: 'Buy'
}

const blueButton = {
  ...button, //разделяет объект на свойства
  color: 'blue' // добавляет к свойствам внутри объекта blueButton
}

//не разделяет объект на свойства, а добавляет к объекту объект
const bButton = {
  button,
  color: 'b'
}

console.log(button) // не меняется
console.log(blueButton) // свойства объекта button и добавление новых
console.table(blueButton) // выводит свойства объекта в виде таблицы
console.log(bButton)//{ button: { width: 200, text: 'Buy' }, color: 'b' }

const greenButton = {
  ...blueButton, 
  color: 'green' // у объекта blueButton уже есть свойство color, перезапишет его значение
}
console.log(greenButton)//{ width: 200, text: 'Buy', color: 'green' }

const yellowButton = {
  color: 'yellow', // значение blue не перезапишется на значение yellow
  ...blueButton // значение желтый будет перезаписано на blue
}
console.log(yellowButton) //{ color: 'blue', width: 200, text: 'Buy' }
