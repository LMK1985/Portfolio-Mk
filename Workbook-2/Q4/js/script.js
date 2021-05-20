$(function() {   // Function to ready document
    
    $(".btn").on("click", function() {    // Function on click to check age set and append/update
        let age = $("#age").val();   // For retrieving age entered in input
        let addedage = $("#addedage").text();   // For retrieving previously set age

        // If else statement for age validation. Age cannot be anything else other than 1 to 150 years old.
        if (isNaN(age) || age < 1 || age > 150) {
            $("#msg").text("Invalid age entered. Please enter a valid age!");   // Error msg
        } else {
            $("#msg").text("Age successfully entered and updated!");   // Success msg

            // Nested if else statement to determine whether to append or update the element ID addedage
            if (addedage != "") {
                $("#addedage").text("Age: " + age);
            } else {
                $("#profileContainer").append(` <p id="addedage">Age: ${age}</p> `);   // Command line to add new Paragraph Age:
            }
        }
    });
    
});