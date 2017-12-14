// AJax : asynchornous javascript and xml . A client side technique to get  data from server without having to refresh

$(document).ready(function() { // this code runs with the DOM is ready

    // AJAX Method:  $.ajax(url[, settings])

    $('.confirmation').on('click', 'button', function() { // 
        $.ajax('http://example.org/confirmation.html', { // calling the url
            success: function(response) { // , 2nd argument:   what to do if there is a successful response from the server 
                // you have to get past the error " Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https."
                $('.ticket').html(response).slideDown(); //find the ticket, load the html we got from the server into it, reveal it by calling the slideDown function
            },
            // data: { "confNum": 1234 } // requesting a confirmation number. This is the ajax data option. This is just a JS object of keys and values

            //PART2 Ajax OPTIONS
            error: function(request, errorType, errorMessage) { // Runs this callback if there is  timeout, abort, or server error 
                alert('Error: ' + errorType + ' with message: ' + errorMessage);
            },
            timeout: 3000, // after 3 seconds , calls the error callback 
            beforeSend: function() { // runs before the ajax request fires off
                $('.confirmation').addClass('is-loading');
            },
            compelete: function() { // runs after bot hsuccess and error
                $('.confirmation').removeClass('is-loading');
            }
        });
    });
    /*
    // alternative is to use get function, which also ddoesnt work until you get that chrome extension
    $.get('confirmation.html', function(response) {
        $('.ticket').html(response).slideDown();
    });
*/




    $('.confirmation').on('click', 'button', function() {
        $(this).closest('.confirmation').find('.ticket').slideDown();
    });
    // the below didn't really work 
    $('confirmation').on('click', '.view-boarding-pass', function() { // listen for click events inside .confirmation, when they happen, check if the target was .view-boarding-pass
        $(this).find('img').show();
    });


});