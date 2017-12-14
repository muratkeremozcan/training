$(document).ready(function() {
    // Get Weather
    $('button').on('click.weather', function() { // the namespacing makes sure we are working with the right thing
        var results = $(this).closest('li').find('.results');
        results.append('<p>Weather: 74&deg;</p>');
        $(this).off('click.weather');
    });

    // Show Photos
    $('button').on('click.photos', function() {
        var tour = $(this).closest('li');
        var results = tour.find('.results');
        results.append('<p><img src="/assets/photos/' + tour.data('loc') + '.jpg" /></p>');
        $(this).off('click.photos');
    });
});