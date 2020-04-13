/*

 **** where model + view talk to one another ****

 Use key events to listen for the letters that your players will type.

calculate the number of guesses
calculate the number of wins


*/

class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;

		//initial guess word for the game
		//hangmanGuessWord call from gameModifierServices.js
	}

	//set initial game stats for the game
	setGameText(gameModel, gameView) {
		gameView.setElement(gameView.title, 'HangMan Mario');
		gameView.setElement(gameView.wordDisplayHTML, `Current Word: ${gameModel.wordDisplay.join(' ')}`);
		gameView.setElement(gameView.numberGuessHTML, `Number of Guesses Remaining ${gameModel.numGuessesRemain}`);
		gameView.setElement(
			gameView.lettersAlreadyGuessedHTML,
			`Letters Already Guessed ${gameModel.lettersAlreadyGuessed}`
		);
		gameView.setElement(gameView.winElm, `Wins ${gameModel.numWins}`);
	}

	//takes a view and append html element to the app setup game view
	setupGameBoard(gameView) {
		gameView.appendView(gameView.app, gameView.title);
		gameView.appendView(gameView.app, gameView.wordDisplay);
		gameView.appendView(gameView.app, gameView.numberGuessHTML);
		gameView.appendView(gameView.app, gameView.lettersAlreadyGuessedHTML);
		gameView.appendView(gameView.app, gameView.winElm);
	}

	gamePlay() {}

	/*
        1. Setup hangman game board game
            -dom elements
            -choose a word
            -run placeGenerator _ _ _ _
            -test the letter checker function in gameModifer
            -test handle userinput
            -checkWinOrLoose function
            -run handleInput
        2. create startOver in GameModifer

        ! Handle Input test
        ! Add event listenr to controller
        !Figure out how to work with gameModiferService Layer


    */
}

const Model = require('./model');
const View = require('./view');
const GameModiferService = require('./gameModiferService');

const testView = new Controller(Model, View);
// console.log(testView.placeGenerator('ho!'));
// const app = new Controller(new Model(), new View())

module.exports = Controller;
