const fs = require('fs');
const {Task, Either, Id }= require('../types');
const {Right, Left, fromNullable} = Either;
const { List, Map } = require('immutable-ext');
const {error, log} = console;

const greaterThan5 = x =>
  x.length > 5 ? Right(x) : Left('not greater than 5');

const looksLikeEmail = x =>
  x.match(/@/ig) ? Right(x) : Left('not an email');

const email = "blahh@yadda.com";
const res = List([greaterThan5, looksLikeEmail])
	.traverse(Either.of, v => v(email))
	.fold(error, x => log(x.toJS()));

log(res);

