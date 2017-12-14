$(document).ready(function() {
    $('button').on('click', function() { // $('.tour').on('click', function() {}  // challenge 3.9

        var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
        $('.usa').append(message);
        $('button').remove();


    });
});