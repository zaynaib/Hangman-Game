


//variables
var wins = 0;
var numGuessRemain =10;
var lettersAlreadyGuessed = [];
var numberGuessesHTML = document.getElementById("numGuessElm");
var lettersAlreadyGuessedHTML = document.getElementById("guessLetterElm");
var wordisplayHTML = document.getElementById("wordisplay");


 // Creates an array that lists out all of the options.
 //this does not work with the same letter in different indices
    var hangmanChoices = ["kanye", "cardib","tink","twista","madonna"];

    //create a random generator for the hangman word
   
    function hangmanGenerator(arr){
        return hangmanChoices[Math.floor(Math.random() * arr.length)];

    };
    var hangmanWord = hangmanGenerator(hangmanChoices);

     /* var hangmanPlacementholders = [];
      for(var i = 0; i< hangmanWord.length; i++){
        hangmanPlacementholders.push("_"); 
        wordisplayHTML.textContent = "Current Word: " + hangmanPlacementholders.join(" ");
      }
      */

      function placeGenerator(str){
        var myArr = [];
        for(var i = 0; i< str.length; i++){
        myArr.push("_"); 
        wordisplayHTML.textContent = "Current Word: " + myArr.join(" ");
      }
        return myArr;
            };

      var hangmanPlacementholders = placeGenerator(hangmanWord);
      console.log(hangmanPlacementholders);


      
 
    //console.log(hangmanWord);
    //console.log(hangmanPlacementholders);
    
    




//user press enter to play game function


    document.onkeyup=function(event) {
        //gets the key from the user
      var keyPressed = event.key;
        //gets the index of the hangmanword
      var charIndex = hangmanWord.indexOf(keyPressed);

      if(numGuessRemain === 0){
        alert("You lose");
        startOver();

        /*alert("Press Enter to start over");
          if(keyPressed === "Enter"){
             startOver();
          }
          */
      }

        //check to see if the letter is inside the word
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
          console.log(hangmanPlacementholders);
         
        }

        var hangmanCompare = hangmanPlacementholders.join("");
        console.log(hangmanCompare);

       //if(hangmanPlacementholders.indexOf("_") === -1 ){
         if(hangmanCompare === hangmanWord){
            wins+=1;
            document.getElementById('winElm').textContent='Wins:'+wins;   
            hangmanCompare = "blank";
            console.log(hangmanCompare);
            startOver();

         }
         

       

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
        console.log("startOver");
        console.log(hangmanWord);

        
      }



        
      };

      
/*
      function startOver(){
        numGuessRemain =10;
        lettersAlreadyGuessed = [];
        hangmanWord = hangmanGenerator(hangmanChoices);
        numberGuessesHTML.textContent = "Number of Guesses Remaining: ";
        lettersAlreadyGuessedHTML.textContent = "Letters Already Guessed: ";
        wordisplayHTML.textContent = "Current Word: ";
        
      }
      */

     



        //main logic, startup code

  




    //functions

    

