function calculate(a, operator="", b) {
    
    // Start of If Else statement for arithmetic operation
    if (operator == "+") {
        var result = a + b;
    } else if (operator == "-") {
        var result = a - b;
    } else if (operator == "*") {
        var result = a * b;
    } else if (operator == "/") {
        var result = a / b;
    }
    return result;
}

// Logging out the results based on values given
console.log(calculate(4, "+", 6));
console.log(calculate(4, "-", 6));
console.log(calculate(2, "*", 0)); 
console.log(calculate(12, "/", 0)); 
