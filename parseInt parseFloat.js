//parseInt - используется для возврата целого числа из строки
alert( parseInt('100px') ); // 100
alert( parseInt('12.3em') ); // 12, вернётся только целая часть

//parseFloat - используется для возврата числа с дробью из строки
alert( parseFloat('12.5em') ); // 12.5
alert( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке