function operation(num) {

    // Half operation on argument taken
    let halfnum = num / 2;
    // Square of result 1
    let squareres1 = halfnum ** 2;
    // Area of circle with radius = result 2
    let circlearea = Math.PI * squareres1 * squareres1;
    // Percentage of area over squared result
    let percent = circlearea / (circlearea ** 2);

    // Return float to percent limit to 2 decimals
    return parseFloat(percent * 100).toFixed(2)+"%";
}
