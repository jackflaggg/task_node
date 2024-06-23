'use strict'
const notifier = require('node-notifier');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Введите время через пробел (часы минуты секунды): ', (input) => {
	const [hours, minutes, seconds] = input.split(' ').map(elem => parseFloat(elem));
	let remainingTime = hours * 3600 + minutes* 60 + seconds;
	const downInterval = setInterval(() => {
		const hoursDisplay = Math.floor(remainingTime/3600);
		const minutesDisplay = Math.floor((remainingTime % 3600)/60);
		const secondsDisplay = Math.floor(remainingTime % 60);

		console.log(`${hoursDisplay} часов, ${minutesDisplay} минут, ${secondsDisplay} секунд`);
		remainingTime -= 1;

		if (remainingTime < 0) {
			clearInterval(downInterval);
			console.log('Обратный отсчет завершен!')
			rl.close();
			notifier.notify({
				title: 'Greetings',
				message: 'Обратный отсчет завершен!'
			});
		}
	}, 1000)
})
