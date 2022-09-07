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

//неточности округления из-за Числового формата IEEE-754
alert( 0.1 + 0.2 == 0.3 ); // false
alert( 0.1 + 0.2 ); // 0.30000000000000004

//решается при помощи метода toFixed(n)
let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // 0.30 - строка

alert( +sum.toFixed(2) ); // 0.3 - число

//функции проверки infinity и NaN
//isNaN(value) преобразует значение в число и проверяет является ли оно NaN:
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

//isFinite(value) преобразует аргумент в число и возвращает true, если оно является обычным числом, т.е. не NaN/Infinity/-Infinity:
alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, потому что специальное значение: NaN
alert( isFinite(Infinity) ); // false, потому что специальное значение: Infinity

//isFinite используется для проверки содержится ли в строке число
let num = +prompt("Enter a number", '');
// вернёт true если будет введено число, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
alert( isFinite(num) );
