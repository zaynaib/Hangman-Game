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

    */

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
    //replace  blank space with the letter
    //check if all the spaces are filled
    //then win the game
    //resttart

    handleUSerInput(userInput, game) {

    }

}