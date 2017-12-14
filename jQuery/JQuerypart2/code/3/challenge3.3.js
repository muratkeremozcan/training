$(document).ready(function() {
    $('form').on('submit', function(event) { // on submitting the form...
        event.preventDefault(); // prevents browser from submitting prematurely
        $.ajax('/book', { // .. do an ajax post request to the server's /book url
            type: 'POST',
            data: $('form').serialize(), // use serialize to merge all form fields for submission
            success: function(response) { // success is called with the HTML result
                $('.tour').html(response); // set the html of the tour element as the result/answer of the ajax request to the server 
            }
        });
    });
});