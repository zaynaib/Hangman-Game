//import Model from './model';
const Model = require('./model');

//create a setup to test model classs

it('works', () => {
	let mario = new Model();
	expect(mario.hangmanChoices).toBeTruthy();
});

// let mario = new Model();
// console.log(mario);