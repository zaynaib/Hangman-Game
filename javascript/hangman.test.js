//import Model from './model';
const Model = require('./model');
const Service = require('./gameModiferService');

//setup

let gameModel = new Model();
let gameService = new Service();

beforeEach(() => {
	gameModel;
	gameService;
});

// //teardown
// afterEach(() => {
// 	clearCityDatabase();
// });

//create a setup to test model classs

describe('Tweet utilities module', () => {});

it('checks to see if class is instantiated ', () => {
	expect(gameModel.hangmanChoices).toBeTruthy();
});

it('checks to see if letter is in the string', () => {
	expect(gameService.findLetterIndex('q', 'apple')).toBe(-1);
	expect(gameService.findLetterIndex('a', 'apple')).toBe(0);
});

it('checks if the number of wins gets incremented in the model', () => {
	gameService.incrementLoss(gameModel);
	expect(gameModel.numLoss).toBe(1);
});

it('checks to see if GameModel.js chooses random word', () => {
	gameService.hangmanGuessWord(gameModel);
	expect(gameModel.guessWord).toBeTruthy();
});

describe('Word Display utility functions', () => {
	it('checks to see if Game service creates an array of blank spaces', () => {
		let str = gameService.placeHolderGenerator('apple');
		expect(str).toStrictEqual(['_', '_', '_', '_', '_']);
	});

	it('checks to see if Game Service replaces blank spaces', () => {
		let str = gameService.letterChecker('a', ['_', '_', '_', '_', '_'], 'apple');
		expect(str).toStrictEqual(['a', '_', '_', '_', '_']);
	});

	it('checks to see if Game Service replaces blank spaces on muliple occurs of the same letter', () => {
		let str = gameService.letterChecker('p', ['_', '_', '_', '_', '_'], 'apple');
		expect(str).toStrictEqual(['_', 'p', 'p', '_', '_']);
	});
});
