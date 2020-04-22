/*

 **** where model + view talk to one another ****

*/

class Controller {
	constructor(model, view, service) {
		this.model = model;
		this.view = view;
		this.service = service;

		//initial guess word for the game
		//hangmanGuessWord call from gameModifierServices.js

		this.view.bindgetElement(this.getElement);
	}

	//set initial game stats for the
	initGame() {
		//gameservices hangmnGuessWord
		//gameServices placeHodlerGenerator
	}

	setGameText() {
		console.log(this.view.app);
		let root = this.view.getElement('#root');

		// this.view.setElement(this.view.title, 'HangMan Mario');
		// this.view.appendElement(root, this.view.title);
		// this.view.setElement(this.view.wordDisplayHTML, `Current Word: ${this.view.wordDisplay.join(' ')}`);
		// this.view.setElement(this.view.numberGuessHTML, `Number of Guesses Remaining ${this.view.numGuessesRemain}`);
		// this.view.setElement(
		//     this.view.lettersAlreadyGuessedHTML,
		//     `Letters Already Guessed ${this.view.lettersAlreadyGuessed}`
		// );
		// this.view.setElement(this.view.winElm, `Wins ${this.view.numWins}`);
		// this.view.getElement('');
	}

	// //takes a view and append html element to the app setup game view
	// setupGameBoard(gameView) {
	//     this.view.appendElement(this.view.app, this.view.title);
	//     this.view.appendElement(this.view.app, this.view.wordDisplay);
	//     this.view.appendElement(this.view.app, this.view.numberGuessHTML);
	//     this.view.appendElement(this.view.app, this.view.lettersAlreadyGuessedHTML);
	//     this.view.appendElement(this.view.app, this.view.winElm);
	// }

	// gameLogic(this.model) {
	//     document.addEventListener('keydown', function (event) {
	//         let keyPressed = event.key;
	//         gameService.handleInput(keyPressed, this.model);
	//     });
	// }

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
       // ! Add event listenr to controller document onkeyup
        !Figure out how to work with gameModiferService Layer


    */
}
console.log('hello');

const Model = require('./model.js');
const View = require('./view');
const Service = require('./gameModiferService');

const testView = new Controller(Model, View, Service);
testView.setGameText();
console.log(Model.guessWord);
// console.log(testView.app);
// testView.setGameText(Model, View);
// testView.setupGameBoard(View);
// console.log(testView.setupGameBoard('ho!'));
// const app = new Controller(new Model(), new View());

module.exports = Controller;
