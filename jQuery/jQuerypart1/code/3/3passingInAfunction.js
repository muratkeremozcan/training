$(document).ready(function() { // this code runs with the DOM is ready
    // PART2
    $('button').on('click', function() { // this runs when a button is clicked. Target all buttons in the DOM, watch for clicks, run the code inside the function
        var price = $('<p>From $399.99</p>'); // create a <p> note with the pricesend the html into the jQuery function
        $('.vacation').append(price); // adds as the last child of vacation class
        $('button').remove(); // remove the button 
    });
});