$(document).ready(function() {
    // Get Weather
    $('button').on('show.weather', function() { // custom event name, not listening for anything
        var results = $(this).closest('li').find('.results');
        results.append('<p>Weather: 74&deg;</p>');
        $(this).off('show.weather');
    });

    // Show Photos
    $('button').on('click.photos', function() {
        var tour = $(this).closest('li');
        var results = tour.find('.results');
        results.append('<p><img src="/assets/photos/' + tour.data('loc') + '.jpg" /></p>');
        $(this).off('click.photos');
        $(this).trigger('show.weather'); // trigger that callz the custom event above
    });
});