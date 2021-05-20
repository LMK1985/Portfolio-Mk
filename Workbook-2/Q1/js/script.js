// Creating person object with properties required
var person = {
    firstName: "Steve",
    lastName: "Tan",
    email: "<a href='mailto:steve.tan@gmail.com'>steve.tan@gmail.com</a>", // Link to mailto function as requested
    phone: 93851853,
    telegram: "@steve.tan",
    fullName: function() {return this.firstName + " " + this.lastName;}
};

// Function to grab object properties and display to element with ID showPerson
function showPerson() {
    document.getElementById("showPerson").innerHTML = "Full Name : " + person.fullName() + "<br>" + 
    "Email : " + person.email + "<br>" + "Phone : " + person.phone + "<br>" + "Telegram : " + person.telegram;
}