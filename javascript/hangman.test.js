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

it('checks to see if GameModel.js chooses random word', () => {
	let str = gameService.placeHolderGenerator('apple');
	expect(str).toBe('_ _ _ _ _');
});

// const myModel = new GameModel();
// console.log(myModel.numLoss);

// myModel.numLoss = 1;
// console.log(myModel.numLoss);
//console.log(myModel.hangmanChoices);
