'use strict';

const operations = {
	'+': require('./add'),
	'-': require('./subtraction'),
	'/': require('./division'),
	'*': require('./multiply'),
}
const numberOne = parseFloat(process.argv[2]);
const numberTwo = parseFloat(process.argv[3]);
const symbolOp = process.argv[4]


console.log(operations[symbolOp](numberOne, numberTwo));


