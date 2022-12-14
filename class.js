class Comment {
  // constructor() - вызывается когда необходимо создать новый экземпляр класса
  constructor(text) {
    this.text = text
    this.votesQty = 0 //начальное количество голосов
  }
  //upvote() - наследуется каждым экземпляром класса
  upvote() {
    this.votesQty += 1 //функция, увеличивающая количество голосов на 1. this ссылается на конкретный экземпляр класса
  }
}


// Создание экземпляра при помощи - new
const firstComment = new Comment('First comment') // Comment - вызывает функцию constructor, которая создает новый экземпляр, наследующий все методы
//Comment.prototype.constructor === Comment
// при вызове firstComment.upvote() значение votesQty увеличится на 1, тк вызвали однократно. При следующем вызове firstComment.upvote() значение votesQty увеличится
const secondComment = new Comment ('Second comment') // создание второго экземпляра
//при вызове secondComment.upvote() значение votesQty увеличится на 1 для этого экземпляра
//secondComment.votesQty - покажет количество вызовов
