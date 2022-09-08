function camelize (str){
  return str
  .split('-') // разбивает строку формата 'my-long-word' на массив ['my', 'long', 'word']
  .map ((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)) // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
  .join('') // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}


console.log(camelize('my-short-string'))
