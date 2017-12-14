$(document).ready(function() {
    $('form').on('submit', function(event) { // on submitting the form...
        event.preventDefault(); // prevents browser from submitting prematurely
        //$.ajax('/book', { // .. do an ajax post request to the server's /book url
        $.ajax($('form').attr('action'), { // instead of hard coding the url, yo ucan go the the orm element, grab the attribute 'action's value (which is /book)
            // type: 'POST',
            type: $('form').attr('method'), // you can also get the method from the html
            dataType: 'json', // parse the response as json
            data: $('form').serialize(), // use serialize to merge all form fields for submission
            success: function(response) { // success is called with the HTML result
                $('.tour').html('<p></p>') // focus on the tour class, add the following html to i
                    .find('p') // find p under tour class
                    .append('Trip to ' + response.description) // append all
                    .append(' at $' + response.price)
                    .append(' for ' + response.nights + ' nights')
                    .append('. Confirmation: ' + response.confirmation);
            },
            contentType: 'application/json' // ask server to response in json
        });
    });
});