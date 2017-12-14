$(document).ready(function() {
    $('.tour').on('click', function() { // click anywhere on the tour
        var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
        $(this).append(message); // at the end of the .tour class append the span message
        $(this).find('button').remove(); // within the .tour class, fin the button and remove it
    });
});