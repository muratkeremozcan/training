$('.update-available-flights').on('click', function() {
    $.getJSON('/flights/late', function(result) {
        var flightElements = $.map(result, function(flightItem, index) {
            return $('<li>' + flightItem.flightNumber + '-' + flightItem.time + '</li>');
        });
        $('.flight-times').html(flightElements);
    });
});