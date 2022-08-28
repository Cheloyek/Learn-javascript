const fnWithError = () => {
  throw new Error('Some error') // гененрирует ошибку
}

fnWithError ()

console.log(fnWithError ())