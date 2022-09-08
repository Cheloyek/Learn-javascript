//.splice()
//arr.splice(index[, deleteCount, elem1, ..., elemN])
//index - начальная позиция, deleteCount - количество элементов

let arr = ["Я", "изучаю", "JavaScript"];
arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
alert( arr ); // осталось ["Я", "JavaScript"]
