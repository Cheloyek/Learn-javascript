// функция
let func = function(arg1, arg2, ...argN) {
  return expression;
};

//стрелочная функция
let func = (arg1, arg2, ...argN) => expression;


//стрелочная функция без аргумента
let sayHi = () => alert("Hello!");

sayHi();

//многострочные стрелочные функции
let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
  let result = a + b;
  return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
};

alert( sum(1, 2) ); // 3
