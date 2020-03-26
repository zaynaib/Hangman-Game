//Variables
var wins = 0;
var numGuessRemain =10;
var lettersAlreadyGuessed = [];
var numberGuessesHTML = document.getElementById("numGuessElm");
var lettersAlreadyGuessedHTML = document.getElementById("guessLetterElm");
var wordisplayHTML = document.getElementById("wordisplay");

// Creates an array that lists out all of the options.
//this does not work with the same letter in different indices
var hangmanChoices = ["mario", "luigi","browser","peach","toad","yoshi","daisy","waluigi", "bowser jr","koopalings"];

//create a random generator for the hangman word
   
function hangmanGenerator(arr){
  return hangmanChoices[Math.floor(Math.random() * arr.length)];
};

var hangmanWord = hangmanGenerator(hangmanChoices);


function placeGenerator(str){
  var myArr = [];
  for(var i = 0; i< str.length; i++){
    myArr.push("_"); 
    wordisplayHTML.textContent = "Current Word: " + myArr.join(" ");
  }
  return myArr;
};


var hangmanPlacementholders = placeGenerator(hangmanWord);

document.onkeyup=function(event) {
  //gets the key that the user presses
  var keyPressed = event.key;

  //gets the index of the letter of computer chosen hangman word
  var charIndex = hangmanWord.indexOf(keyPressed);

  //if the user has no more guess then they lose. hahahaha!
  if(numGuessRemain === 0){
    alert("You lose");
    startOver();
  }

  //check to see if the letter is not inside the word 
  if(charIndex === -1){
    lettersAlreadyGuessed.push(keyPressed); 
    numGuessRemain=numGuessRemain-1; //decrement number of guesses
    alert("Try Again! You are wack."); //pop alert try again 
    numberGuessesHTML.textContent = "Number of Guesses Remaining: " + numGuessRemain;
    lettersAlreadyGuessedHTML.textContent = "Letters Already Guessed: " + lettersAlreadyGuessed.join(" ");
    }

    else{
      lettersAlreadyGuessed.push(keyPressed);
      numGuessRemain = numGuessRemain-1;
      for(var i=0;i<hangmanPlacementholders.length;i++){
        if(hangmanWord[i] === keyPressed){
          hangmanPlacementholders[i] = keyPressed;
          wordisplayHTML.textContent = "Current Word: " + hangmanPlacementholders.join(" "); 
          lettersAlreadyGuessedHTML.textContent = "Letters Already Guessed: " + lettersAlreadyGuessed.join(" ");
          }//end of nested if loop inside of for loop
            
        }//end of for loop
        numberGuessesHTML.textContent = "Number of Guesses Remaining: " + numGuessRemain;
         
        }//end of else statement

        //joins the word that the user is guessing
        var hangmanCompare = hangmanPlacementholders.join("");
        
        //checks to see if the user's guess is exactly equal to the computer generated word
        if(hangmanCompare === hangmanWord){
          wins+=1; //increment win
          document.getElementById('winElm').textContent='Wins:'+wins; //show win up to the DOM
          hangmanCompare = "blank"; //reset the user's guess to a black slate so it won't meet the condition
          startOver(); //start the game over

         }
         

       
      //This function resets all the variables to start the game over
      function startOver(){
        keyPressed = "";
        numGuessRemain =10;
        lettersAlreadyGuessed = [];
        myPlaceholders =[];
        hangmanWord = hangmanGenerator(hangmanChoices);
        hangmanPlacementholders = placeGenerator(hangmanWord); 
        numberGuessesHTML.textContent = "Number of Guesses Remaining: ";
        lettersAlreadyGuessedHTML.textContent = "Letters Already Guessed: ";
        wordisplayHTML.textContent = "Current Word: ";
        
      }



        
      };

      


     



        //main logic, startup code

  




    //functions

    

