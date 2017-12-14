// JSON : JS Object Notation. A standard way to format data
// AJax : asynchornous javascript and xml . A client side technique to get  data from server without having to refresh

$('form').on('submit', function(event) { // listen for the submit even on the form. in the call back function...
    event.preventDefault(); // prevent the default bevaior, to submit an refresh the entire page
    var form = $(this);
    $.ajax($('form').attr('action'), { //  ajax request to the book url   jQuery OBJECT METHODS: attr(<atribute>)  attr(<attribute>, <value>)
        type: 'POST', // specify the type of the reques tto post. This will do a POST request to the server which is used for forms
        data: form.serialie(), // serialize is used to merge all form fields for submission . Pulls all data from the form and sends it along with the ajax request  
        contentType: 'application/json', // gets sent with a request to the server, and tells the server to responde with JSON
        dataType: 'json', // parse the response as JSON
        success: function(result) { // do something on the page when the ajax response comes back
            form.remove(); // remove the form 
            var msg = $("<p></p>"); // starts out as paragraph tags for html
            msg.append("Destination: " + result.location + ". "); // append to this, destination , which will contain result.location (which is from the JS object from JSON)
            msg.append("Price: " + result.totalPrice + ". "); // append result
            msg.append("Nights: " + result.nights + ". ");
            msg.append("Confirmation: " + result.confirmation + ". ");

            //  <p>Destination: Paris. Price: $2196.00. Nights:4. Confirmation: 345feab. </p>
            $('#vacation').hide().html(result).fadeIn(); // create and add a DOM node
        }



    });

});