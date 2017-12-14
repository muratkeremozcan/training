$(document).ready(function() {
    $('button').on('click', function() {
        var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
        $(this).after(message); // challenge 3.13
        $(this).remove(); // challenge 3.12
    });
});