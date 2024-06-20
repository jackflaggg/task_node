'use strict';

const add = require('./add');
const subtraction = require('./subtraction');
const division = require('./division');
const multiply = require('./multiply');

let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);
let operations = (process.argv[4]);

let result;
switch (operations) {
	case '+':
		result = add(num1, num2);
		break;
	case '-':
		result = subtraction(num1, num2);
		break;
	case '/':
		result = division(num1, num2);
		break;
	case '*':
		result = multiply(num1, num2);
		break
	default:
		result = 'Not Found! Invalid operations'
		break;
}
console.log(result);