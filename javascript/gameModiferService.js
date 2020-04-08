class GameModiferService {
	/*
        takes game model class and increments wins
        input: GameModel instance
        output: GameMode instance with wins increment by 1 
    */
	incrementWins(gameModel) {
		gameModel.numWins(gameModel.numWins() + 1);
		return gameModel;
	}

	incrementLoss(gameModel) {
		gameModel.numLoss(gameModel.numLoss() + 1);
		return gameModel;
	}

	/*
        takes game model class and decrements number of guesses 
        input: GameModel instance
        output: GameModel instance with number of guesses decrement by 1 
    */
	decrementGuess(gameModel) {
		gameModel.numGuessesRemain(gameModel.numGuessesRemain() - 1);
		return gameModel;
	}

	/*
        takes game model class and chooses a word to be played for hangman game 
        input: GameModel instance
        output: A word for the user to guess
    */
	hangmanGuessWord(gameModel) {
		let wordChoicesList = gameModel.hangmanChoices();
		return wordChoicesList[Math.floor(Math.random() * wordChoicesList.length)];
	}

	//*****check if the letter is correct*****

	/*
        Takes user's input and finds the index of letter in a hangman word
        input: user input from event keypress
        output: the index location of letter inside word

    */
	findLetterIndex(letter, hangmanWord) {
		let letterIndex = hangmanWord.indexOf(letter);
		return letterIndex;
	}

	placeHolderGenerator(str) {
		let myArr = [];
		for (var i = 0; i < str.length; i++) {
			myArr.push('_');
			wordisplayHTML.textContent = 'Current Word: ' + myArr.join(' ');
		}
		return myArr;
	}

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

	//replace  blank space with the letter
	//check if all the spaces are filled
	//then win the game
	//resttart

	handleUSerInput(userInput, game) {}
}

module.exports = GameModiferService;
