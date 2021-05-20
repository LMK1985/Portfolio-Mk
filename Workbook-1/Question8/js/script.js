// Declaring variables required
var answer = ["F", "O", "X"];
var solved = ["_", "_", "_"];

function predictLetter(letter = "") {

    let checker = answer.indexOf(letter.toUpperCase());       // Variable to check input letter (allow lower case) against answer

    // switch statement for achieving victory conditions
    switch(checker) {
        case -1:
            console.log("The letter entered is not found in the word: " + solved);
            break;
        case checker:
            solved.splice(checker, 1, letter.toUpperCase());      // Replace correctly solved letter
            console.log("Congratulations! You found a new letter in the word: " + solved); 
            break;
    }

    // If else statement for checking victory
    if ((answer.toString()) === (solved.toString())) {
        console.log("Well done, you have solved the word: " + answer + ". Thank you for playing!");
    } else {
        console.log("There are letters unfound, please continue trying.");
    }
}
