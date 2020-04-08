class GameModiferService {

    /*
        takes game model class and increments wins
        input: GameModel instance
        output: GameMode instance with wins increment by 1 
    */
    incrementWins(gameModel) {
        gameModel.numWins(gameModel.numWins() + 1);
        return gameModel

    }

    /*
        takes game model class and increments wins
        input: GameModel instance
        output: GameMode instance with number of guesses decrement by 1 
    */
    decrementGuess(gameModel) {
        gameModel.numGuessesRemain(gameModel.numGuessesRemain() - 1);
        return gameModel
    }

    //check if the letter is correct

    /*
        takes game model class and increments wins
        input: user input from event keypress
        output: the index location of letter inside word

    */

    findLetterIndex(letter, hangmanWord) {
        let letterIndex = hangmanWord.indexOf(letter);
        return letterIndex;
    }

    /*
        takes game model class and increments wins
        input: index location of letter location of hangman word
        output: replaces letter to the view or decrement number of guesses from model

    */


    replaceUnderScore(keyIndex) {
        if (keyIndex != -1) {
            //replace underscore with letter
        } else {
            //decrement number of guesses
        }
    }
    //replace  blank space with the letter
    //check if all the spaces are filled
    //then win the game
    //resttart

    handleUSerInput(userInput, game) {

    }

}

let myGame = new GameModiferService()
console.log(myGame.findLetterIndex('q', 'apple'))

module.exports = GameModiferService;