function nameToggle() {
    var name = document.getElementById("name"); // Grab element with ID name
    
    // If else statement to toggle display type of element with ID name from none to block and vice-versa
    if (name.style.display === "none") {
        name.style.display = "block";
    } else {
        name.style.display = "none";
    }
}

function emailToggle() {
    var email = document.getElementById("email"); // Grab element with ID email
    
    // If else statement to toggle display type of element with ID email from none to block and vice-versa
    if (email.style.display === "none") {
        email.style.display = "block";
    } else {
        email.style.display = "none";
    }
}

function phoneToggle() {
    var phone = document.getElementById("phone"); // Grab element with ID phone
    
    // If else statement to toggle display type of element with ID phone from none to block and vice-versa
    if (phone.style.display === "none") {
        phone.style.display = "block";
    } else {
        phone.style.display = "none";
    }
}

function telegramToggle() {
    var telegram = document.getElementById("telegram"); // Grab element with ID telegram
    
    // If else statement to toggle display type of element with ID telegram from none to block and vice-versa
    if (telegram.style.display === "none") {
        telegram.style.display = "block";
    } else {
        telegram.style.display = "none";
    }
}

// Function to change profile background color and background color change message (2 types of color)

function bgOrange() {
    let bg1 = "#FF9900";
    document.getElementById("profileContainer").style.backgroundColor = bg1;
    document.getElementById("profileContainer").style.color = "black";
    document.getElementById("bgCurrent").innerHTML = "Your current background colour code is: " + bg1;
}
function bgPurple() {
    let bg2 = "#7B2CF1";
    document.getElementById("profileContainer").style.backgroundColor = bg2;
    document.getElementById("profileContainer").style.color = "white";      // Fonts white to make it more visible
    document.getElementById("bgCurrent").innerHTML = "Your current background colour code is: " + bg2;
}