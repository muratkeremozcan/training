// AJax : asynchornous javascript and xml . A client side technique to get  data from server without having to refresh

// refactoring to objects

var confirmation = {
    init: function() { // our init method creates our event handlers
        // our event handlers     within init we can run all the code that was in our document ready function
        $('.confirmation').on('click', 'button', function() { // 
            $.ajax('http://example.org/confirmation.html', { // calling the url
                timeout: 3000, // after 3 seconds , calls the error callback 
                success: function(response) { // , 2nd argument:   what to do if there is a successful response from the server 
                    // you have to get past the error " Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https."
                    $('.ticket').html(response).slideDown(); //find the ticket, load the html we got from the server into it, reveal it by calling the slideDown function
                },
                error: function(request, errorType, errorMessage) { // Runs this callback if there is  timeout, abort, or server error 
                    alert('Error: ' + errorType + ' with message: ' + errorMessage);
                },
                beforeSend: function() { // runs before the ajax request fires off
                    $('.confirmation').addClass('is-loading');
                },
                compelete: function() { // runs after bot hsuccess and error
                    $('.confirmation').removeClass('is-loading');
                }
            });
        });
        // the below didn't really work 
        $('confirmation').on('click', '.view-boarding-pass', function(event) { // listen for click events inside .confirmation, when they happen, check if the target was .view-boarding-pass
            event.preventDefault(); // prevent default behaviour of moving up
            $('.view-boarding-pass').hide(); // hid the link 
            $('boarding-pass').show(); // show the image
        });

    }
};



$(document).ready(function() { // this code runs with the DOM is ready
    confirmation.init();

});