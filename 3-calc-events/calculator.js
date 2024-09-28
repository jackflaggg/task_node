const EventEmmiter = require('events');

class Calculator extends EventEmmiter {
	add(num1, num2){
		this.emit('add', num1, num2);
	}

	multiply(num1, num2){
		this.emit('multiply', num1, num2);
	}

	division(num1, num2){
		this.emit('division', num1, num2);
	}

	substraction(num1, num2){
		this.emit('substraction', num1, num2);
	}
}

module.exports = Calculator;