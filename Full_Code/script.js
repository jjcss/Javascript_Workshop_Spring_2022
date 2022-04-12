//set global variables - 3

//Random number 1-100 that the user has to guess
let randomNum = Math.trunc (Math.random() * 100) + 1;
// start the score of every new user at 10
let score = 10;
// set highscord of every new user at 0
let highscore = 0;
//

//function to changeMsg based on score (ex: text if user guesses the number correctly)
function changeMsg(text) {
    document.querySelector(".letGuessing").textContent = text;
}

//addEventListener function for checkBtn
document.querySelector(".checkBtn").addEventListener("click", function() {
    //Variable that will save the number that the user inputs
    let inputUser = Number(document.querySelector(".input2").value);

    // If the user doesn't enter a number (ex: not letters or other symbols)
    if (!inputUser) {
        changeMsg("Please enter a valid number");
    }

    // If the number the user enters equals the correct number
    else if (inputUser === randomNum) {
        changeMsg("⭐︎Correct!");

        document.querySelector("body").style.background = "linear-gradient(to right, #0F455B, #1CDC9C)";

        document.querySelector(".input").textContent = randomNum;

        questionColor = document.querySelector(".input");
        questionColor.style.background = "#DC7045";

        document.querySelector(".checkBtn").disabled = true;
        document.querySelector(".input2").disabled = "true";

        // If the score of the user is greater then the current highscore, then we want to change the highscore to the current users score
        if (score > highscore) {
            highscore = score;

            //change 
            document.querySelector(".highscore").textContent = highscore;
        }
    }

    // If number the user enters doesn't equal to the correct number
    else if (inputUser != randomNum) {
        // if the current score == 0
        if (score == 0) {
            // Display message the the user has lost
            changeMsg("You lose!");

            //write code to end game
            //disable checkBtn and input2
            document.querySelector(".checkBtn").disabled = true;
            document.querySelector(".input2").disabled = "true";

            //change body background to red
            document.querySelector("body").style.background = "linear-gradient(to right, red, black)";

        }

        // Else, if the current score is anything but 0
        else {
            // if the number the user enters is greater than the random number, then show a message of "too high", else show a message of "too low".
            //subtract users current score by 1
            inputUser > randomNum ? changeMsg("⇧Too high") : changeMsg("⇓Too low");
            score --;

            //change score to update score value
            document.querySelector(".score").textContent = score;
        } 
    }

});

//play button listener to restart game
document.querySelector(".play").addEventListener("click", function() {
    //keep same global variables (except highscore)
    randomNum = Math.trunc (Math.random() * 100) + 1;
    score = 10; 

    //change score back to 10
    document.querySelector(".score").textContent = score;

    //enable input2
    document.querySelector(".input2").disabled = false;

    //change message back to starter message
    changeMsg("Let's start guessing...");

    //change middle ? text back to starter "?" message
    document.querySelector(".input").textContent = "?";

    //enable check button
    document.querySelector(".checkBtn").disabled = false;

    //change background body color back to starter color
    document.querySelector("body").style.background = "linear-gradient(to right, purple, #DC7045)";

    //change middle ? text background color back to starter color(white);
    document.querySelector(".input").style.background = "white";
     
})

//The end
