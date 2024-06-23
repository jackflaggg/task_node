'use strict';
const os = require('os');
const {Worker, isMainThread, workerData, parentPort} = require('worker_threads');

console.time('test');
function countDivisibleByThreeInRange(start, end) {
	let count = 0;
	for (let i = start; i <= end; i++) {
		if (i % 3 === 0) {
			count++;
		}
	}
	return count;
}

if (isMainThread) {
	const countCore = os.cpus().length;
	const sizeArray = Math.floor(300000/countCore);
	const promises = [];

	for (let i = 0; i < countCore; i++) {
		const start = i * sizeArray + 1;
		const end = (i + 1) * sizeArray;
		const worker = new Worker(__filename, {workerData: {start, end}});
		const onePromise = new Promise((resolve, reject) => {
			worker.on('message', resolve);
			worker.on('error', reject);
			worker.on('exit', exit => {
				if (exit !== 0) reject(new Error(`Worker stopped with exit code ${exit}`));
			});
		})
		promises.push(onePromise);
	}
	Promise.all(promises)
		.then(result => {
		const totalDivisibleByThree = result.reduce((acc, val) => acc + val, 0);
			console.timeEnd('test');
		console.log('Итоговое количество чисел, делящихся на 3 без остатка:', totalDivisibleByThree);

	})
		.catch(err => {
			console.error(err);
		})
} else {
	const {start, end} = workerData;
	const result = countDivisibleByThreeInRange(start, end);
	parentPort.postMessage(result);
}




