const { curry, compose } = require('ramda');
const { log } = console;
const toUpper = x => x.toUpperCase();
const exclaim = x => x + '!';

//const compose = (f, g) => x => f(g(x));
const first = xs => xs[0];

const concat = curry((x, y) => y + x);

const logger = curry((tag, x) => (log(tag, x), x));

const res = compose(first, compose(exclaim, toUpper));
const shout = compose(concat('!'), logger('here:'), toUpper, logger('start:'), first);
//log(res('hi'));
const resR = compose(first, exclaim, toUpper);
//log(resR('cool'));
log(shout('hello'));
