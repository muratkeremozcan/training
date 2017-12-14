$(document).ready(function() {
    $('button').on('click', function() {
        var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
        $(this).closest('.tour').append(message);
        $(this).remove();
    });
});