$(document).ready(function() {
    $('button').on('click', function() {
        var tour = $(this).closest('.tour');
        var discount = tour.data('discount'); // finds the closest .tour class, gets the 'discount' stored in the data attribute of that tour (data-discount attribute) and assigns it to a discount variable
        var message = $('<span>Call 1-555-jquery-air for a ' + discount + ' discount.</span>'); // challenge 3.18
        tour.append(message);
        $(this).remove();
    });
});