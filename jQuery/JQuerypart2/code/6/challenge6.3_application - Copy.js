$(document).ready(function() {
    $('button').on('click', function() {
        var location = $('.location').text();
        var getPricePromise = Vacation.getPrice(location);
        getPricePromise.done(function(result) {
            $('.price').text(result.price);

        });
    });

});