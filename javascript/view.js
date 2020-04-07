/*
    What goes into the view? 
    ******************
    Neither the controller nor the model should know
    anything about the DOM, HTML elements, CSS, or
    any of that. Anything relating to it should be
    in the view.


    We're going to create the view by manipulating the DOM
    - the document object model
    ******************



*/

class View {
    constructor() {}

    //helper methods to retrieve an element and create an element

    // Create an element with an optional CSS class
    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }

    // Retrieve an element from the DOM
    getElement(selector) {
            const element = document.querySelector(selector)

            return element
        }



        <
        h1 class = "h1 ml-4" > Hangman Mario < /h1> <
        div id = "wrapper mt-2"
    class = "container" >
        <
        p class = "h2" > Press Any Key To Get Started! < /p> <
        p class = "h2"
    id = "winElm" > Wins < /p> <
        div class = "h2"
    id = "wordisplay" > < /div> <
        p class = "h2"
    id = "numGuessElm" > < /p> <
        p class = "h2"
    id = "guessLetterElm" > Letters Already Guessed < /p> <
        /div>



}

const testView = new View()
console.log(testView.placeGenerator('ho!'));


module.exports = View;