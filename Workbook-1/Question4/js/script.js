// Writing helloWorld function based on requirements
function helloWorld(input = "") {
    
    // Switch with cases and default
    switch(input) {
        case "jp":
            var output = "Kon'nichiwa, Sekai";
            break;
        case "in":
            var output = "Namaste, Duniya";
            break;
        case "fr":
            var output = "Bonjour, Le monde";
            break;
        default:
            var output = "Hello, World";        // Default english
    }
    return output;
}