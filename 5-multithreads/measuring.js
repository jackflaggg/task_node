const { PerformanceObserver, performance } = require('perf_hooks');

// Определяем observer для отслеживания событий производительности
const obs = new PerformanceObserver((items) => {
	items.getEntries().forEach((item) => {
		console.log(item);
	});
});

obs.observe({ entryTypes: ['measure'] });

["./linear.js", "./multithreading.js"].forEach(require);

obs.disconnect();