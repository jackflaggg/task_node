'use strict'

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function countdown(secondsRemaining) {
	if (secondsRemaining >= 0) {
		const hoursDisplay = Math.trunc(secondsRemaining / 3600);
		const minutesDisplay = Math.trunc((secondsRemaining % 3600) / 60);
		const secondsDisplay = Math.trunc(secondsRemaining % 60);

		console.log(`${hoursDisplay} часов, ${minutesDisplay} минут, ${secondsDisplay} секунд`);
		setTimeout(() => countdown(secondsRemaining - 1), 1000);
	} else {
		console.log('Обратный отсчет завершен!');
		rl.close();
	}
}


rl.question('Введите время через пробел (часы минуты секунды): ', (input) => {
	const [hours, minutes, seconds] = input.split(' ').map(Number);
	const totalSeconds = hours * 3600 + minutes * 60 + seconds;
	countdown(totalSeconds);
});