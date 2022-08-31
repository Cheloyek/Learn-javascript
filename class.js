class Comment {
  // constructor() - вызывается когда необходимо создать новый экземпляр класса
  constructor(text) {
    this.text = text
    this.votesQty = 0 //начальное количество голосов
  }
  //upvote() - наследуется каждым экземпляром класса
  upvote() {
    this.votesQty += 1 //функция, увеличивающая количество голосов на 1
  }
}


// Создание экземпляра при помощи - new
const firstComment = new Comment('First comment') // Comment - вызывает функцию constructor, которая создает новый экземпляр, наследующий все методы
//Comment.prototype.constructor === Comment
