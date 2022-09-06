//если ссылки на объект не достаточно, можно применить клонирование объекта
//variant 1
let user = {
  name: "John",
  age: 30
};

let clone = {}; // новый пустой объект

// копирование всех свойств user в clone
for (let key in user) {
  clone[key] = user[key];
}

// теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete"; // изменение данных в клоне

alert( user.name ); // John в первоначальном объекте


//variant 2
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);
