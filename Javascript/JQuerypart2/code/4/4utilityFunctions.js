// JSON : JS Object Notation. A standard way to format data
// AJax : asynchornous javascript and xml . A client side technique to get  data from server without having to refresh

$('button').on('click', function() { // click handler the button.
    $.ajax('/cities/favorite/1', { //  The callback function is going to do an ajax call
        contentType: 'application/json',
        dataType: 'json',
        success: function(result) { // on success return a JSON (with image and name)
            $.each(result, function(index, city) { // each jQuery method helps us iterate through the divs  . $.each(collection, function(<index>, <object>) {} ) 
                var favorite = $('.favorite-' + index); // grab the favorite div
                favorite.find('p').html(city.name); // find paragraph, populate with the name of the city from the result
                favorite.find('img') // find the image in our div
                    .attr('src', city.image); // populate teh source attribute with our image returned from the server
            });
        }

    });


});

// check the video for explanation of the difference
//  $.each(collection, function(<index>, <object>) {} )    // think iof collection like an array.  $.each runs the function for each item in the array, but returns the original array unchanged 
/// map utility  : map returns an array
// $.map(collection, fucntion (<item>, <index> {} ); //  //  $.map runs the function for each item in the array and creates a new array from the returned results