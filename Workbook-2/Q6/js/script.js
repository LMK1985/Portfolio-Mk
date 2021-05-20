// I understand there is a much easier way to do Question 6 if I hard code the profiles in html and just use DOM to filter/hide them, but wanted a challenge to create 
// something that can be used even when adding more persons. Hope the penalty on the extra steps are not too heavy. Thank you for the understanding.

$(function() {   // Function to ready document

    // Constructor class to simplify object creation
    class Person {
        constructor(firstName, lastName, email, phone, telegram, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + " " + this.lastName;
            this.email = email;
            this.phone = phone;
            this.telegram = telegram;
            this.age = age;
        }
    }

    // Creation of all objects => Profiles/friends
    var john = new Person('John', 'Lim', 'john.lim@gmail.com', 91234567, '@john.lim', 28);
    var terry = new Person('Terry', 'Tan', 'terry.tan@gmail.com', 98765433, '@terry.tan', 23);
    var dan = new Person('Dan', 'Lee', 'dan.lee@gmail.com', 81932742, '@dan.lee', 25);
    var joey = new Person('Joey', 'Meng', 'joey.meng@tvb.com.hk', 852021070, '@joey.meng', 50);   // No girls, thus added one to add as friend
    var Persons = [john, terry, dan, joey];   // Storing all Person objects into Persons array for easier data manipulation

    // Call function display() on each of the objects in array Persons
    var i = 0;   //loopcounter to set profile ID
    Persons.forEach(display);

    // Function to display each profile, taking in object properties from each object
    function display({fullName, email, phone, telegram, age}) {
        $("#profileContainer").append(
        `<p id="profile${i}">
        Full Name: <strong>${fullName}</strong><br/>
        Email: ${email}<br/>
        Phone: ${phone}<br/>
        Telegram: ${telegram}<br/>
        Age: ${age}<br/>
        <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#Modal">Add Friend</button>
        </p>`
        );  // Rendering output object properties and "add friend" button in a HTML <p> tag into div profileContainer. Button triggers #Modal
        i++;    // Adding 1 to loopcount
    }

    $("#filter").on("click", function() {
        var j = 0;   //loopcounter to track profile ID
        var status = $("#filter").text();   // variable to get button.text for clear filter later

        // Execute checkAge() on object array Persons
        Persons.forEach(checkAge);
        
        // Function to find and filter out persons with age greater than 25 and hide them
        function checkAge({age}) {

            // If else statement for filter and display conditions
            if (age <= 25) {
                $(`#profile${j}`).css("display", "none");
            }
            if (status == "Filter Friends") {
                $("#filter").text("Clear Filter");
            } else {
                $("#filter").text("Filter Friends");
                $("p").css("display", "block");
            }
            j++;   // Adding 1 to loopcount
        }
    });
    
});