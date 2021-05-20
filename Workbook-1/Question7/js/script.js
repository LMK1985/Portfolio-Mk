
function min() {

    // Declare output variable
    var minnum = Infinity;  

    // For loop running through all input arguments entered
    for(var inputnum in arguments) {

        // If statement that replaces output variable with smallest argument recevied when looping. First input will always be default smallest due to comparison against infinity.
        if(arguments[inputnum] < minnum) {
            minnum = arguments[inputnum];
        }
    }
    return minnum;
}

// Log function with required inputs
console.log(min(4.5, 5));
console.log(min(19, 9));
console.log(min(1, 1));