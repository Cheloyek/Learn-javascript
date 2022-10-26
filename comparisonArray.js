function checkExam(arr1, arr2) {
    let array3 = []
    for (let i = 0; i < arr2.length; i++) {
        if  (arr2[i] === '' ) {
            array3.push(+'0')
            console.log(`array2[i] === clear array1[i]: ${arr1[i]} array2[i]: ${arr2[i]} return '0'`)
        } else if (arr1[i] === arr2[i] && arr2[i] !== '') {
            array3.push(+'4')
            console.log(`array1[i] === array2[i]: array1[i]: ${arr2[i]} array2[i]: ${arr1[i]} return '+4'`)
        } else if ( arr2[i] !== arr1[i] && arr2[i] !== '') {
            array3.push(-'1')
            console.log(`array1[i] !== array2[i]: array1[i]: ${arr2[i]} array2[i]: ${arr1[i]} return '-1'`)
        }
        // (array1[i] !== array2[i] && array2[i] !== '')
    }
    console.log('length ' + array3.length)
    console.log(array3)
    let sum = 0;
    for(let j = 0; j < array3.length; j++){
        sum += array3[j];
    }
    if (sum < 0) {sum = 0}
    console.log(sum)
    return sum
}
// 4 + 4 + (-1) + 0
checkExam([ 'a', 'a', 'b', 'b' ], [ 'a', 'c', 'b', 'd' ])
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])