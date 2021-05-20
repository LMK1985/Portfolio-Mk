$(function(){   // Function to ready document
    
    $.ajax({
        url: "wb2.json",
        dataType: 'json',  
        success: function(data) {

            var movieList = [data];             // Variable array to store Data obtained
            var filteredList = movieList[0];    // Array variable declaration for easier access to index 0 where all data is
            var finalmovieList = [];            // Array for final sorted content

            filteredList.sort(function(a, b) {  // Sort array by ratings
                return b.ratings - a.ratings;
            });

            var text = "";                      // For adding of array contents to this text variable
            // For each array index, get the values of title and ratings                    
            $.each(filteredList, function(key, value) {
                var movie = "<strong>Movie Title</strong> - " + value.title + " ===>" + "<strong> Ratings</strong> - " + value.ratings; // Variable to store whole html line for each movie
                finalmovieList.push(movie); // Adding formated individual movies to final array
            });
     
            for (i = 0; i < finalmovieList.length; i++) {   // For loop to add up all the movies into text varible for easy DOM manipulation later
                text += `<p class="movies">${finalmovieList[i]}</p>`;  // Storing each movie into paragraphs and add into text variable
            }

            $('#movieContainer').html(`${text}`);   // DOM HTML command line to output all the sorted movies to movieContainer division
        },
            error(xhr, status, error) {     // Function for error message and error handling
                console.log(error);
            }
        });
});
