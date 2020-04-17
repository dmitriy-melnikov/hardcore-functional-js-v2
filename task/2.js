const fs = require('fs');
const {Task} = require('../types');

const {error, log} = console;

const logIt = x => {
	log('step ', x);
	return x;
};

const readFile = (path, enc) =>
	Task((rej, res) =>
		fs.readFile(path, enc, (err, contents) =>
			err ? rej(err) : res(contents)
		)
	);


const writeFile = (path, contents) =>
	Task((rej, res) => fs.writeFile(path, contents, (err, contents) =>
		err ? rej(err) : res(contents))
	);


const app = () =>
	readFile('config.json', 'utf-8')
		.map(contents => contents.replace(/3/g, '7'))
		.chain(cont => writeFile('config1.json', cont))
		.map(logIt);

log(app().fork);
app().fork(error, log);