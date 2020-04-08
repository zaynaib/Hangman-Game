//import Model from './model';
const Model = require('./model');
const Service = require('./gameModiferService');

//create a setup to test model classs

it('works', () => {
	let mario = new Model();
	expect(mario.hangmanChoices).toBeTruthy();
});

it('findLetterIndex', () => {
	let myGame = new Service();
	expect(myGame.findLetterIndex('q', 'apple')).toBe(-1);
})