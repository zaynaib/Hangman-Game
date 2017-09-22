


//variable
var wins = 0;

var numGuessRemain =10;
var lettersAlreadyGuessed = [];
var numberGuessesHTML = document.getElementById("numGuessElm");
var lettersAlreadyGuessedHTML = document.getElementById("guessLetterElm");
var wordisplayHTML = document.getElementById("wordisplay");


 
 //numberGuessesHTML.textContent= "Number of Guesses Remaining: " + numGuessRemain;




 // Creates an array that lists out all of the options.
 //this does not work with the same letter in different indices
    var hangmanChoices = ["mario", "luigi","browser","peach","toad","yoshi","daisy","waluigi", "bowser jr","koopalings"];

    //create a random generator for the hangman word
    //var hangmanWord = hangmanChoices[Math.floor(Math.random() * hangmanChoices.length)];
    function hangmanGenerator(arr){
        return hangmanChoices[Math.floor(Math.random() * hangmanChoices.length)];

    };

    var hangmanWord = hangmanGenerator(hangmanChoices);
    console.log(hangmanWord)

    var hangmanPlacementholders = [];
    
    for(var i = 0; i< hangmanWord.length; i++){
        hangmanPlacementholders.push("_"); 
        wordisplayHTML.textContent = "Current Word: " + hangmanPlacementholders.join(" ");      
    
  }
  console.log(hangmanPlacementholders);



//user press enter to play game function


    document.onkeyup=function(event) {
        //gets the key from the user
        var keyPressed = event.key.toLowerCase();
        //gets the index of the hangmanword
        var charIndex = hangmanWord.indexOf(keyPressed);

      if(numGuessRemain === 0){
        alert("You lose");
        
      }


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

            }
            

            
          }
          numberGuessesHTML.textContent = "Number of Guesses Remaining: " + numGuessRemain;
        }


       

      if(hangmanPlacementholders.indexOf("_") === -1){
          wins += 1;
          document.getElementById('winElm').textContent='Wins:'+wins;      
          alert("You Won! " + hangmanWord);
                   
          }
    
       console.log(hangmanPlacementholders);
        
      };

     



        //main logic, startup code

  




    //functions

    

