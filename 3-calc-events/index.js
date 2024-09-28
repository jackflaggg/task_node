'use strict';
const Calculator = require('./Calculator');
const args = process.argv.slice(2);
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);
const operation = args[0];

const calculator = new Calculator();

calculator.on('+', (num1, num2) => {
	console.log(`Сумма равна : ${num1 + num2}`)
})

calculator.on('*', (num1, num2) => {
	console.log(`Умножение чисел равно : ${num1 * num2}`)
})

calculator.on('/', (num1, num2) => {
	console.log(`Деление равно : ${num1 - num2}`)
})

calculator.on('-', (num1, num2) => {
	console.log(`Вычитание равно : ${num1 - num2}`)
})


calculator.emit(operation, num1, num2)