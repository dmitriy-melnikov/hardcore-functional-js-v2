const {curry} = require('ramda');
const {log} = console;
const add = (x, y) => x + y;

const toPair = f => ([x, y]) => f(x, y);

const fromPair = f => (x, y) => f([x, y]);
//log(fromPair(toPair(add))(1,1));

//log(toPair(add)([1, 2]));

/*_______________________________________________________________________*/


//const curry = f => x => y => f(x, y);

const curryAdd = curry(add);

const increment = curryAdd(1);
const result = increment(2);
//log(result);


const uncurry = f => (x,y) => f(x)(y);

//log(uncurry(curry(add))(3,3));


const modulo = curry((x, y) => y % x);
const isOdd = modulo(2);  // (2, y) => 2 % y

//const result1 = isOdd(2);
//log(result1);

const filter = curry((f, xs) => xs.filter(f));
//const fn = (a, b) => a === b;
const filterWithFn = filter(isOdd);
const filterWithFnArgs = filterWithFn([1,2,3,4]);
//log(filterWithFnArgs);

//const getOdds = filter(isOdd)
/*______________________________________________________________*/


const replace = curry((regex, replacement, str) =>
	str.replace(regex, replacement)
);

const replaceVowels = replace(/[AEIOU]/ig, '!');

const result2 = replaceVowels('Hey I have words');

console.log(result2);
