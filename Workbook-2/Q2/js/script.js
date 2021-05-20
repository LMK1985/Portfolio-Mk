// Function to grab value from input element with ID newEmail and output it to element with ID steveMail
function changeEmail() {

    var newEmail = document.getElementById("newEmail").value;  
    var mailValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;   // Extra variable for validator feature
    var result = mailValidator.test(newEmail);                                                   // Extra variable to get validation result

        // If else statement to validate email entered by user
        if (result == true)
        {
            document.getElementById("steveMail").innerHTML = "Email: " + newEmail;    // Make changes to replace old email
            document.getElementById("msg").innerHTML = "   Email change was successful!" // Message to inform user email was changed successfully
        } else {
            document.getElementById("msg").innerHTML = "   Email change was unsuccessful. Please enter a valid email." // Message to inform user email was unsuccessful
        }

}