//.splice()
//arr.splice(index[, deleteCount, elem1, ..., elemN])
//index - начальная позиция, deleteCount - количество элементов

let arr = ["Я", "изучаю", "JavaScript"];
arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
alert( arr ); // осталось ["Я", "JavaScript"]

//замена элементов массива
let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, "Изучай", "JS");

alert( arr ) // теперь ["Изучай", "JS", "прямо", "сейчас"]
