$('.update-available-flights').on('click', function() {
    $.getJSON('/flights/late', function(result) { // get the json data
        $.map(result, function(flightItem, index) { // on the data, for each index apply the function 
            console.log(flightItem);
        });
    });
});