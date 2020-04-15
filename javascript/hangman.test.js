const Model = require('./model');
const Service = require('./gameModiferService');
const View = require('./view');
const ViewService = require('./gameViewService');

//setup
let gameModel = new Model();
let gameService = new Service();
let gameView = new View();

beforeEach(() => {
	gameModel;
	gameService;
	gameView;
});

// //teardown
// afterEach(() => {
// 	clearCityDatabase();
// });

it('checks to see if class is instantiated ', () => {
	expect(gameModel.hangmanChoices).toBeTruthy();
});

describe('GameService utilities modules', () => {
	it('checks to see if letter is in the string', () => {
		expect(gameService.findLetterIndex('q', 'apple')).toBe(-1);
		expect(gameService.findLetterIndex('a', 'apple')).toBe(0);
	});

	it('checks if the number of losses gets incremented in the model', () => {
		gameService.incrementLoss(gameModel);
		expect(gameModel.numLoss).toBe(1);
	});

	it('checks if the number of wins gets incremented in the model', () => {
		gameService.incrementWins(gameModel);
		expect(gameModel.numWins).toBe(1);
	});

	it('checks to see if GameModel.js chooses random word', () => {
		gameService.hangmanGuessWord(gameModel);
		expect(gameModel.guessWord).toBeTruthy();
	});
});

describe('Word Display utility functions', () => {
	// gameModel.guessWord = 'apple';
	// gameService.placeHolderGenerator(gameModel);
	it('checks to see if Game service creates an array of blank spaces', () => {
		gameModel.guessWord = 'apple';
		gameService.placeHolderGenerator(gameModel);
		expect(gameModel.wordDisplay).toStrictEqual(['_', '_', '_', '_', '_']);
	});

	it('checks to see if Game Service replaces blank spaces', () => {
		gameService.letterDisplay('a', gameModel);
		expect(gameModel.wordDisplay).toStrictEqual(['a', '_', '_', '_', '_']);
	});

	it('checks to see if Game Service replaces blank spaces on muliple occurs of the same letter', () => {
		gameService.letterDisplay('p', gameModel);
		expect(gameModel.wordDisplay).toStrictEqual(['a', 'p', 'p', '_', '_']);
	});

	it('checks to see if letterDisplay does not make any changes if user inputs wrong letter', () => {
		gameService.letterDisplay('x', gameModel);
		expect(gameModel.wordDisplay).toStrictEqual(['a', 'p', 'p', '_', '_']);
	});
});

describe('win/loose', () => {
	gameModel.guessWord = 'apple';
	gameService.checkWinOrLoose(gameModel);

	it('checks to see if player wins', () => {
		gameModel.wordDisplay = ['a', 'p', 'p', 'l', 'e'];
		let result = gameService.checkWinOrLoose(gameModel);
		expect(result).toBe('You have won the game :)');
	});

	it('checks to see if player wins', () => {
		gameModel.wordDisplay = ['a', 'p', 'p', 'l', '_'];
		let result = gameService.checkWinOrLoose(gameModel);
		expect(result).toBe('You got more chances to win');
	});

	it('checks to see if player wins', () => {
		gameModel.wordDisplay = ['a', 'p', 'p', 'l', '_'];
		gameModel.numGuessesRemain = 0;
		let result = gameService.checkWinOrLoose(gameModel);
		expect(result).toBe('You have lost the game :(');
	});
});
describe('View utilities', () => {
	// Set up our document body
	document.body.innerHTML = '<div id="root">' + '  <span id="username" />' + '  <button id="button" />' + '</div>';
	let title = gameView.createElement('h1');
	title.innerHTML = 'Hangman Mario';
	let root = gameView.getElement('#root');
	gameView.appendElement(root, title);

	it('checks if the element is created', () => {
		expect(title).toBeTruthy();
	});

	it('checks element is added to the DOM', () => {
		expect(gameView.getElement('h1').innerHTML).toEqual('Hangman Mario');
	});

	it('allows the text of an element to be reset', () => {
		gameView.setElement(title, 'honey dew is not bad');
		expect(title.innerHTML).toEqual('honey dew is not bad');
	});


	describe('Handle Input', () => {
		it('checks to see if it will return the right text', () => {
			gameModel.guessWord = 'apple';

			let result = gameService.handleUserInput('a', gameModel);

			expect(result).toBe('You got more chances to win');
		});

		it('checks to see if it will return the right text with wrong input', () => {
			gameModel.guessWord = 'apple';

			let result = gameService.handleUserInput('x', gameModel);

			expect(result).toBe('You got more chances to win');
		});


		it('checks to see if it will return the right text with wrong input and no more guesses', () => {
			gameModel.guessWord = 'apple';
			gameModel.numGuessesRemain = 0;

			let result = gameService.handleUserInput('x', gameModel);

			expect(result).toBe('You have lost the game :(');
		});


	});
});