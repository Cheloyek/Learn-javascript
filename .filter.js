function filterRangeInPlace(arr, a, b) {
  console.log( arr.filter(item => (item >= a && item <= b)))
}
filterRangeInPlace([5, 3, 8, 9], 1, 7)
