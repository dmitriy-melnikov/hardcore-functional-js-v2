const Box = require("./1");
/*const Box = x => (
	{
		map: f => Box(f(x)),
		fold: f => f(x),
		toString: `Box(${x})`
	});*/


const first = xs => xs[0];

const halfTheFirstLargeNumber = xs => {
  const found = xs.filter(x => x >= 20);
  const answer = first(found) / 2;
  return `The answer is ${answer}`;
};

const compose = (f, g) => x => Box(x).map(g).fold(f);

const halfTheFirstLargeNumber_ = xs =>
	Box(xs)
		.map(xs => xs.filter(x => x >= 20))
		.map(found => first(found) / 2)
		.fold(answer => `The answer is ${answer}`);


const res = halfTheFirstLargeNumber([1, 4, 50]);
const res1 = halfTheFirstLargeNumber_([1, 4, 50]);
console.log(res);
console.log(res1);
