$(document).ready(function() {
    $('button').on('click', function() {
        var tour = $(this).parent();
        var location = tour.data('location');
        var resultDiv = tour.find('.results').empty();

        $.when(
            Vacation.getPrice(location),
            Photo.getPhoto(location)
        ).then(function(priceResult, photoResult) {
            $('<p>$' + priceResult + '</p>').appendTo(resultDiv);
            $('<img />').attr('src', photoResult).appendTo(resultDiv);
        });



    });
});