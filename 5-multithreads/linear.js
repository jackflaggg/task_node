'use strict';

const linearArray = Array.from({ length: 300000}, (_, t) => t);
let resultLinear = 0;

console.time('test');
for (let i = 0; i < linearArray.length; ++i) {
	if (i % 3 === 0){
		resultLinear += 1;
	}
}
console.timeEnd('test');
console.log('Итоговое количество чисел, делящихся на 3 без остатка:', resultLinear);
