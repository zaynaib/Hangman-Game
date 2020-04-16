const Model = require('./model');

class GameModiferService {
	constructor() {}
	/*
        takes game model class and increments wins
        input: GameModel instance
        output: GameModel instance with wins increment by 1 
    */
	incrementWins(gameModel) {
		gameModel.numWins = gameModel.numWins + 1;
		return gameModel;
	}

	incrementLoss(gameModel) {
		gameModel.numLoss = gameModel.numLoss + 1;
		return gameModel;
	}

	/*
        takes game model class and decrements number of guesses 
        input: GameModel instance
        output: GameModel instance with number of guesses decrement by 1 
    */
	decrementGuess(gameModel) {
		gameModel.numGuessesRemain = gameModel.numGuessesRemain - 1;
		return gameModel;
	}

	/*
        takes game model class and chooses a word to be played for hangman game 
        input: GameModel instance
        output: A word for the user to guess
    */
	hangmanGuessWord(gameModel) {
		let wordChoicesList = gameModel.hangmanChoices;
		gameModel.guessWord = wordChoicesList[Math.floor(Math.random() * wordChoicesList.length)];
		return gameModel;
	}

	/*
        Takes user's input checks to see if letter exsists in index hangman word
        input: user input from event keypress
        output: the index location of letter inside word or -1 if letter is not in word

    */
	findLetterIndex(letter, hangmanWord) {
		let letterIndex = hangmanWord.indexOf(letter);
		return letterIndex;
	}

	/*
		Creates underscores to be hide the word from the user

	*/

	placeHolderGenerator(gameModel) {
		for (let i = 0; i < gameModel.guessWord.length; i++) {
			gameModel.wordDisplay.push('_');
		}
		return gameModel.wordDisplay;
	}

	/*
		When user guesses correct word the letter will be revealed in the view

	*/

	letterDisplay(keyPressed, gameModel) {
		const wordDisplay = gameModel.wordDisplay;
		const guessWord = gameModel.guessWord;
		let letterIndex = this.findLetterIndex(keyPressed, guessWord);

		if (letterIndex != -1) {
			for (let i = 0; i < guessWord.length; i++) {
				if (guessWord[i] === keyPressed) {
					wordDisplay[i] = keyPressed;
				}
			}
		}

		return wordDisplay;
	}

	checkWinOrLoose(game) {
		let hangmanWordCompare = game.wordDisplay.join('');
		// console.log(hangmanWordCompare);
		// console.log(game.guessWord);

		if (hangmanWordCompare != game.guessWord && game.numGuessesRemain == 0) {
			this.incrementLoss(game); //increment win
			return 'You have lost the game :(';
		} else if (hangmanWordCompare === game.guessWord) {
			this.incrementWins(game); //increment win
			return 'You have won the game :)';
		} else {
			return 'You got more chances to win';
		}
	}

	/*
		Every input from the user reduces the number of guesses
		Handles all the game logic for the user input
		controller method
    */

	handleUserInput(userInput, gameModel) {
		this.decrementGuess(gameModel);

		const hangmanWord = gameModel.guessWord;

		this.letterDisplay(userInput, gameModel);
		return this.checkWinOrLoose(gameModel);
	}

	gameLogic(gameModel) {
		document.addEventListener('keydown', function (event) {
			let keyPressed = event.key;
			this.handleInput(keyPressed, gameModel);
		});
	}

	startOver() {}
}

/*
let gameModel = new Model();
let gameService = new GameModiferService();
gameService.incrementLoss(gameModel);
console.log(gameModel.numWins);
console.log(gameModel.hangmanChoices);
console.log(gameModel.wordDisplay);

gameModel.guessWord = 'apple';
console.log(gameService.placeHolderGenerator(gameModel));
console.log(gameModel.wordDisplay, 'orginal display');

console.log(gameService.letterDisplay('p', gameModel));
console.log(gameModel.wordDisplay, '@@@@@');

console.log(gameService.handleUserInput('a', gameModel));
console.log(gameService.handleUserInput('l', gameModel));

console.log(gameService.handleUserInput('q', gameModel));
*/

// console.log(gameService.checkWinOrLoose(gameModel));
// console.log(gameService.letterDisplay('a', gameModel));
// console.log(gameService.checkWinOrLoose(gameModel));

// console.log(gameService.letterDisplay('l', gameModel));
// console.log(gameService.checkWinOrLoose(gameModel));

// console.log(gameService.letterDisplay('e', gameModel));
// console.log(gameService.checkWinOrLoose(gameModel));

module.exports = GameModiferService;
