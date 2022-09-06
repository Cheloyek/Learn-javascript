function isEmpty(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false; //если у объекта есть свойства
  }
  return true; //если у объекта нет свойств
}
