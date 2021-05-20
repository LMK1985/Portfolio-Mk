// Declaring of variables for user number, loop counter and total sum
var usernum = parseInt(prompt("Enter a number to find out it's average from 0 to itself.")); 
let loopcount = 1;
let sum = 0;

// While loop for addition
while (loopcount <= usernum) {
    sum += loopcount;
    loopcount++;
}

// Calculation for getting average
var average = sum / (usernum + 1);
console.log("The average from 0 to " + usernum + " is " + average);