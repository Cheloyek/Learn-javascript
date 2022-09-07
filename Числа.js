//метод toString(base) - возвращает строковое представление числа num в системе счисления base.
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

//если необходимо вызвать метод непосредственно на числе то используется 123456..toString(36) или (123456).toString(36)

//метод toFixed(n) - округляет число до n знаков после запятой и возвращает строковое представление результата.
let num = 12.34;
alert( num.toFixed(1) ); // "12.3"
//Округляет значение до ближайшего числа, как в большую, так и в меньшую сторону, аналогично методу Math.round
let num = 12.36;
alert( num.toFixed(1) ); // "12.4"

//Преобразовать строку в число: "+" перед строкой или Number()
