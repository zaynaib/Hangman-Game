//What is the data of this app?
//MVC resource https://www.taniarascia.com/javascript-mvc-todo-app/
/*
 - the words for the hangman game
 - how many wins the player have
 - how many losses the player have
 - the number of guesses

*/

class Model {
	constructor() {
		//List of hangman guesses for the game
		this.hangmanChoices = [
			'mario',
			'lugi',
			'browser',
			'peach',
			'toad',
			'yoshi',
			'daisy',
			'waluigi',
			'bowser',
			'koopalings',
		];

		this.numGuessesRemain = 10;
		this.numWins = 0;
		this.numLoss = 0;
	}

	get hangmanChoices() {
		return this.hangmanChoices;
	}

	get numGuessesRemain() {
		return this.numGuessesRemain;
	}

	get numWins() {
		return this.numWins;
	}

	get numLoss() {
		return this.numLoss;
	}

	set numGuessesRemain(numberOfGuesses) {
		this.numGuessesRemain = numberOfGuesses;
	}

	set numWins(numberOfWins) {
		this.numWins = numberOfWins;
	}

	set numLoss(numberOfLoss) {
		this.numLoss = numberOfLoss;
	}
}

module.exports = Model;
