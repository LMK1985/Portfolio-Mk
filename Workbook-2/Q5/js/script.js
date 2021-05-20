$(function () { // Function to ready document

    // On click of button with class .btn, all 3 anchors with the 3 different IDs will have their href updated with real links
    $(".btn").on("click", function() {
        $("#email").attr("href", "mailto:steve.tan@gmail.com");
        $("#phone").attr("href", "tel:6593851853");
        $("#telegram").attr("href", "https://t.me/steve.tan");
        $("#msg").text("Your links have been successfully updated!");   // Message to inform of successful change of links 
    });

});