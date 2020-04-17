const { compose } = require('ramda');
const { Task } = require('../types');
const { log, error } = console;
const logIt = x => {
	log(`x from Task`, x);
	return x;
};

const t1 = Task((rej, res) => res(2))
	.map(logIt)
	//.map(two => two + 1)
	.chain(two => Task.of(two + 1))
	.map(logIt)
	.map(three => three * 2);

t1.fork(error, logIt);