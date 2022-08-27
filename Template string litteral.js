const notTemplate = 'notTemplate'
const Template = 'Template' 
const string = 'string'
const litteral ='litteral'
const nottsl = notTemplate + ' ' + string + ' ' + litteral
const tsl = `${Template} ${string} ${litteral}` //позволяет на месте переменных использовать функции

console.log(nottsl)
console.log(tsl)
