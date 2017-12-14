/*
// simple example
function Vacation(destination) { // a class
    this.details = function() { // a function
        console.log(destination);
    }
}

$(document).ready(function() {
    var paris = new Vacation('Paris');
    paris.details();
    var london = new Vacation('London');
    london.details();
});
*/

function Confirmation(el) {
    this.el = el; // save a reference to the passed in element
    this.ticket = this.el.find('.ticket'); // new variable ticket , which finds the ticket inside our current vacation
    var confirmation = this; //  because ajax callbacks set this to ajax's own this versus the function we're in 
    // helper methods
    this.loadConfirmation = function() {
        $.ajax('confirmation.html', {
            timeout: 3000, // after 3 seconds , calls the error callback 
            context: confirmation, // new option context, set equal to confirmation. Allows us to set the value of 'this' inside our callback
            success: function(response) { // , 2nd argument:   what to do if there is a successful response from the server 
                // you have to get past the error " Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https."
                this.ticket.html(response).slideDown(); // will target all tickets. find the ticket, load the html we got from the server into it, reveal it by calling the slideDown function

            }
        });
    };

    this.showBoardingPass = function(event) {
        event.preventDefault(); // prevent default behaviour of moving up
        $(this).hide(); // hide the link,  'this' is the link that was clicked
        confirmation.el.find('boarding-pass').show(); // show the image. Get the vacation element out of the confirmation function, fin the boarding pass image and show it


        console.log(this);
        console.log(confirmation);
    }

    // event handlers
    this.el.on('click', 'button', this.loadConfirmation); // listen for click events inside .confirmation, when they happen, check if the target was button and .view-boarding-pass
    this.el.on('click', 'view-boarding-pass', this.showBoardingPass); // and then run the helper methods

}

$(document).ready(function() {
    var paris = new Confirmation($('#paris')); // call our confirmation class passing in paris element
    var london = new Confirmation($('#london'));

});