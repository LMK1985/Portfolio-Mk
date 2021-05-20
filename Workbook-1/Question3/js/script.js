// Array to store numbers
var numbers = [];

// Loop for prompt to get numbers
for (loopcount = 1; loopcount <= 2; loopcount++) {
    numbers.push(parseInt(prompt("Please enter number " + loopcount + " :", "Please choose number in the range of 0-20")));
}
    
// Sort array in ascending order via function and log
numbers.sort(function(a, b){return a - b});
console.log(numbers);