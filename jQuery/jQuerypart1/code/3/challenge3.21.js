$(document).ready(function() {
    $('button').on('click', function() {
        var tour = $(this).closest('.tour');
        var discount = tour.data('discount'); // finds the closest .tour class, gets the 'discount' stored in the data attribute of that tour (data-discount attribute) and assigns it to a discount variable
        var message = $('<span>Call 1-555-jquery-air for a ' + discount + ' discount.</span>'); // challenge 3.18
        tour.append(message);
        $(this).remove();
    });
    $(document).ready(function() {
        $('#filters').on('click', '.on-sale', function() { // #filters id, click on the .on-sale class ...

            $('.tour').filter('.on-sale').addClass('highlight'); //challenge 3.22 // for classes of .tour, filter by the ones which also have a class of .on-sale, add a .highlight class to them
        });
    });

});