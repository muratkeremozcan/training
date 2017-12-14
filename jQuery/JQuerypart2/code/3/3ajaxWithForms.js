$('form').on('submit', function(event) { // listen for the submit even on the form. in the call back function...
    event.preventDefault(); // prevent the default bevaior, to submit an refresh the entire page
    var form = $(this);
    $.ajax('/book', { //  ajax request to the book url
        type: 'POST', // specify the type of the reques tto post. This will do a POST request to the server which is used for forms
        data: form.serialie(), // serialize is used to merge all form fields for submission . Pulls all data from the form and sends it along with the ajax request  
        // using data option to grab all the values , wrapping it up in a js object , and sending to the server
        //"destination": $('#destination').val(),
        //"quantity": $('#quantity').val()

        success: function(result) { // do something on the page when the ajax response comes back
            form.remove(); // remove the form 
            $('#vacation').hide().html(result).fadeIn(); // hid the current vacation div, populate it with the html result that was returned from the server, fade it back in
        }



    });

});