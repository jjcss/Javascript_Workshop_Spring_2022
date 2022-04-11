/*
    Javascript Basics
    ---Make sure your HTML file is connected to this file
    This code below must go on yout HTML file. src stands for source and inside you must enter the name of this JS file.
        <script src="script.js"></script>

    ---All lines of code end with a ---> ;
    ---Creating a comment using "//"

    ---Inititalizing variables example
    let variableName = 10; // for one variable
    let x = 5, let y = 15, let z = 40; //many vars in one line
    let name = "Leandro" // for a string variable

    ---Printing out variables
    let name = "Leandro"; // setting a variable
    console.log(name); // ouputs Leandro

    ---Initializing constants - like a variable but you can't change it's value once it has been set. Example:
    const x = 5;
    x = 10; // Error! constant cannot be changed.

    --- If and else statements example
    let num = 2 //initialize variable
    let num2 = 4 //initialize variable

    if (num === num2) { // if statement
        console.log("They're equal"); // print statement
    }

    else if (num2 > num2) { // else if statement
        console.log("num2 is greater"); // print statement
    }

    else { // else statement
        console.log("num is lower"): // print statement
    }

    *Note:
    == ----> compare for equality after doing any necessary type conversions
    === ----> will not do the conversion, so if two values are not the same type
    
    ---Creating functions with parameter
    function nameOfFunction(parameterName) { //function
        console.log(parameterName); // print out parameter
    }

    Calling Function:
    nameOfFunction("Just made a function"); //prints Just made a function

    ---Creating functions with no parameter
    function newFunction() {
        console.log("made a new function");
    }

    Calling function:
    newFunction(); // prints made a new function

    ---Query Selectors - returns the first element that matches a CSS selector and manipulates that element to do what you want it to do.

    Selecting an HTML element with query Selector
        HTML Code:
        <p> Hi, this is my first time writing Javascript </p> // paragraph tag with text

        Javascript Code:
        document.querySelector("p"); // selecting the paragraph tag

        Explanation:
        Query selector is a built in function of Javascript that in this case is locating the paragraph tag in our html code simply by having "p" inside of it. 

    Selecting an HTML element by it's class name using query Selector
        HTML Code:
        <button class="checkBtn"> Check </button> // button with a class name of checkBtn

        Javascript Code:
        document.querySelector(".checkBtn"); // selecting the element that has name of checkBtn

        Explanation:
        Query selector is looking in our HTML code for an element that has the class name of "checkBtn"

    Using Query Selectors to manipulate HTML code from our Javascript file

        ---Changing the Text of an HTML element
        HTML Code:
        <p class="guess"> Good morning, CSS Club </p> //paragraph tag with some text and a class name of "guess"

        Javascript Code:
        document.querySelector(".guess").textContent = "Good afternoon, CSS Club";

        Explanation:
        Adding ".textContent" at the end of our Query Selector allowed us to change the text of the paragraph element with the class name of "guess" to any text we'd like.

        ---Changing the color of an HTML element
        HTML Code:
        <body> .... </body> //body tag with random code inside

        Javascript Code:
        document.querySelector("body").style.background = "red";

        Explanation:
        Adding ".style.background" to the end of our Query Selector allowed us to change the bacground color of our body tag to the color red

        ---Disabling input and button tags in HTML code from our Javascript file
        HTML Code:
        <input class="inputTag" type="text"> //input tag with class name of "inputTag"

        <button class="btn"> Check </button> // button tag with class name of "btn"

        Javascript Code:
        document.querySelector(".inputTag").disabled = "true";
        document.querySelector(".btn").disabled = true;

        Explanation:
        Adding .disabled to the end of Query Selector that is selecting an input or button tag will disable it if you set it equal to "true". You can also set it active by setting it to "false"

    ---Event Listeners With query Selectors
        ---addEventListener() method attaches an event handler to the specified element.

        HTML Code:
        <button class="btn"> Check </button> // button tag with class name of "btn"

        Javascript Code:
        document.querySelector(".btn").addEventListener("click", function() {
            // logic for when the user clicks this button element with the class name of ".checkBtn".
        });

        Explanation:
        Adding .addEventListener("click", function() {}); at the end of the Query Selector allows us to pay attention to a click of the button tag element with the class name of "btn". Therefore, anytime the "btn" tag element is clicked, we will be able to write some logic to manipulate other elements inside of the function.
*/



// ******************** Start Demo Code Below ************************

//set global variables - 3

//Random number 1-100 that the user has to guess

// start the score of every new user at 10

// set highscord of every new user at 0

//

//function to changeMsg based on score (ex: text if user guesses the number correctly)


//addEventListener function for checkBtn
document.querySelector(".checkBtn").addEventListener("click", function() {
    //Variable that will save the number that the user inputs

    // If the user doesn't enter a number (ex: not letters or other symbols)
    if () {
        
    }

    // If the number the user enters equals the correct number
    else if () {
        

        // If the score of the user is greater then the current highscore, then we want to change the highscore to the current users score

    }

    // If number the user enters doesn't equal to the correct number
    else if () {
        // if the current score == 0
        if () {
            // Display message the the user has lost

            //write code to end game
            //disable checkBtn and input2

            //change body background to red

        }

        // Else, if the current score is anything but 0
        else {
            // if the number the user enters is greater than the random number, then show a message of "too high", else show a message of "too low".
            //subtract users current score by 1
            

            //change score to update score value
            
        } 
    }

});

//play button listener to restart game
document.querySelector(".play").addEventListener("click", function() {
    //reinitialize randomNumber and the score
    

    //change score back to 10

    //enable input2 again

    //change message back to starter message

    //change middle ? text back to starter "?" message

    //enable check button

    //change background body color back to starter color

    //change middle ? text background color back to starter color(white);
     
})

//The end
