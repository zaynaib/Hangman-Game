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
		gameModel.numGuessesRemain = gameModel.numGuessesRemain() - 1;
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

	//get some input from the user
	//decrement guesses + add to lettersAlreadyGuessed

	//*****check if the letter is correct*****
	//if its correct reveal the letter
	//else display try again

	//replace  blank space with the letter
	//check if all the spaces are filled
	//then win the game
	//resttart

	/*
        Takes user's input and finds the index of letter in a hangman word
        input: user input from event keypress
        output: the index location of letter inside word

    */
	findLetterIndex(letter, hangmanWord) {
		let letterIndex = hangmanWord.indexOf(letter);
		return letterIndex;
	}

	placeHolderGenerator(gameModel) {
		for (let i = 0; i < gameModel.guessWord.length; i++) {
			gameModel.wordDisplay.push('_');
		}
		return gameModel.wordDisplay;
	}

	//replaces underscores with letters
	//takes a
	// letterDisplay(keyPressed, wordDisplay, guessWord) {
	// 	for (let i = 0; i < wordDisplay.length; i++) {
	// 		if (guessWord[i] === keyPressed) {
	// 			wordDisplay[i] = keyPressed;
	// 		}
	// 	} //end of for loop
	// 	return wordDisplay;
	// }

	letterDisplay(keyPressed, gameModel) {
		const wordDisplay = gameModel.wordDisplay;
		const guessWord = gameModel.guessWord;
		for (let i = 0; i < guessWord.length; i++) {
			if (guessWord[i] === keyPressed) {
				wordDisplay[i] = keyPressed;
			}
		} //end of for loop
		return wordDisplay;
	}

	/*
        Every input from the user reduces the number of guesses
        Checks to see if the letter is in the word

    */
	handleUserInput(userInput, gameModel) {
		this.decrementGuess(gameModel);
		const hangmanWord = gameModel.guessWord;
		const wordDisplay = gameModel.wordDisplay;

		let letterIndex = this.findLetterIndex(userInput, hangmanWord);

		if (letterIndex === -1) {
			console.log('Try Again');
			//add to letters already guessed
		} else {
			console.log('replace the placeholders with the letters');
			//add letters already guessed
			//check to see if they won the game
			letterChecker(userInput, game.wordDisplay, game.guessWord);
		} //ele end
	}

	checkWinOrLoose(game) {
		//joins the word that the user is guessing
		let hangmanWordCompare = game.wordDisplay.join('');

		//checks to see if the user's guess is exactly equal to the computer generated word
		if (hangmanWordCompare === game.guessWord) {
			this.incrementWins(game); //increment win
		} else {
			this.incrementLoss(game); //increment win
		}
	}

	startOver() {}
}

let gameModel = new Model();
let gameService = new GameModiferService();
gameService.incrementLoss(gameModel);
// console.log(gameModel.numWins);
// console.log(gameModel.hangmanChoices);
// console.log(gameModel.wordDisplay);

gameModel.guessWord = 'apple';
console.log(gameService.placeHolderGenerator(gameModel));
console.log(gameModel.wordDisplay, 'orginal display');

console.log(gameService.letterDisplay('p', gameModel));
console.log(gameModel.wordDisplay, '@@@@@');
module.exports = GameModiferService;
