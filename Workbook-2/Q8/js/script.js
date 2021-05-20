$(() => {   // Function to ready document

    $('[data-toggle="tooltip"]').tooltip();    // Initialize all the Bootstrap tooltips
    $('.seat').tooltip({container: 'i'});   // Append tooltip positioning to icons
    var seatselected = 0;   // Global variable to track number of seats selected

    // Function to control toggling of classes from .seat(default) to .selected upon user click input
    $('i.seat').on('click', function() {
        var title = $(this).attr('data-bs-original-title');   // Variable for tooltip title
        $(this).toggleClass('selected');   // toggling of classes of selected seats

        // If else statement to toggle tooltip title and seats selected
        if (title == 'Available') {
            $(this).attr('data-bs-original-title', 'Selected').tooltip('show');   // Change tooltip title 
            seatselected++;                                                       // Add 1 to seats selected
            $('#progressnum').text(seatselected + ' selected');                   // Updated seats selected number
            $('#progressbar').attr('style' , `width: ${seatselected * 33.5}%`);   // Add progress bar width
        } else {
            $(this).attr('data-bs-original-title', 'Available').tooltip('show');  // All lines here in else{} basically undo everything above
            seatselected--;
            $('#progressnum').text(seatselected + ' selected');
            $('#progressbar').attr('style' , `width: ${seatselected * 33.5}%`);
        }
            // This if statement will complete|stop the seat selection program
        if (seatselected == 2) {   // Another if statement to change booking status and end seat selection on() events with off().
            $('#selectmsg').text('2 seats have been selected')
            $('#bookStatus').text('Booked').css({    // Set book status message and CSS
                'background-color': 'green',
                'color': 'white',
            });
            $('#progressbar').removeClass('progress-bar-animated bg-warning').addClass('bg-success');   // Set progress bar CSS and stop animation   
            $('#specialmsg').html('for Steve and <strong>"Friend"</strong><i class="bi bi-heart-fill text-danger"></i>');
            $('i.selected').addClass('taken').removeClass('selected seat');   // Set selected class to taken after 2 seats selected
            $('i').off();   // Shut off all .on() events
        }
    });

});