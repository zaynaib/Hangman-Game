/*

 **** where model + view talk to one another ****

 Use key events to listen for the letters that your players will type.

calculate the number of guesses
calculate the number of wins


*/

const Model = require('./model');
const View = require('./view');
const GameModiferService = require('./gameModiferService');

class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	//select word to play the game

	selectHangmanWord(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	//hide the word with underscores

	placeGenerator(word) {
		let placeholders = [];

		for (let letter of word) {
			placeholders.push('_');
		}
		return placeholders;
	}

	//game play steps

	/*
    https://www.w3schools.com/jsref/obj_keyboardevent.asp

    - player can guess a letter right
     -- findMatches function
     -- replace underscores function ---*** create it

    - can guess a letter wrong
      -- decrement number of guesses
      -- checks to see if its zero

    - can play the same letter
      --if

    */

	//did the user guess right?

	//add event listners on keyup

	//find index of letter
	findLetterIndex(letter, hangmanWord) {
		//https://www.w3schools.com/jsref/jsref_includes.asp
		let isGuessRight = hangmanWord.indexOf(letter);

		return isGuessRight;
	}

	replaceUnderScore(keyIndex) {
		if (keyIndex != -1) {
			//replace underscore with letter
		} else {
			//decrement number of guesses
		}
	}

	handleUserInput = (userInput, game) => {
		GameModiferService.handleUserInput(userInput, game);
		return game;
	};

	//replace underscore with event

	//

	/*

    did the player win

    */

	/*
     
    did the player loose

    */

	/*
     game reset

    */

	/*
        game4.js lines 57 - 67

        input: index location of letter location of hangman word
        output: replaces letter to the view or decrement number of guesses from model

    */
	replaceUnderScore(gameModel, keyIndex) {
		if (keyIndex != -1) {
			//replace underscore with letter

			for (var i = 0; i < hangmanPlacementholders.length; i++) {
				if (hangmanWord[i] === keyPressed) {
					hangmanPlacementholders[i] = keyPressed;
					wordisplayHTML.textContent = 'Current Word: ' + hangmanPlacementholders.join(' ');
					lettersAlreadyGuessedHTML.textContent =
						'Letters Already Guessed: ' + lettersAlreadyGuessed.join(' ');
				} //end of nested if loop inside of for loop
			} //end of for loop
			numberGuessesHTML.textContent = 'Number of Guesses Remaining: ' + numGuessRemain;
		} else {
			//decrement number of guesses
			this.decrementGuess(gameModel);
		}
	}
}

// const testView = new Controller();
// console.log(testView.placeGenerator('ho!'));
// const app = new Controller(new Model(), new View())

module.exports = Controller;
