$(document).ready(function() {
    // Get Weather
    $('button').on('click', function() {
        var results = $(this).closest('li').find('.results');
        results.append('<p>Weather: 74&deg;</p>');
        $(this).off('click'); // after having clicked it once, and the above happened, turn it off
    });

});