


//variable
var wins = 0;
var numGuessRemain =15;
var lettersAlreadyGuessed = [];



 // Creates an array that lists out all of the options.
 //this does not work with the same letter in different indices
    var hangmanChoices = ["kanye", "cardib","tink"];

    //create a random generator for the hangman word
    var hangmanWord = hangmanChoices[Math.floor(Math.random() * hangmanChoices.length)];
    console.log(hangmanWord)

    var hangmanPlacementholders = [];
    
    for(var i = 0; i< hangmanWord.length; i++){
        hangmanPlacementholders.push("_");       
    
  }



//user press enter to play game function


    document.onkeyup=function(event) {
        var keyPressed = event.key;
        var charIndex = hangmanWord.indexOf(keyPressed);
        if(charIndex === -1){
            alert("Try Again");
            lettersAlreadyGuessed.push(keyPressed);
            console.log(lettersAlreadyGuessed);
            numGuessRemain=numGuessRemain-1;
        }
        else{
          lettersAlreadyGuessed.push(keyPressed);
          numGuessRemain = numGuessRemain-1;
          for(var i=0;i<hangmanPlacementholders.length;i++){
            if(hangmanWord[i] === keyPressed){
              hangmanPlacementholders[i] = keyPressed;
              //console.log(keyPressed);
            }
             
          }
        }
        console.log(hangmanPlacementholders);
      };

     



        //main logic, startup code

  




    //functions

    

