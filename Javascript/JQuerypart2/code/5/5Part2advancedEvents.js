// JSON : JS Object Notation. A standard way to format data
// AJax : asynchornous javascript and xml . A client side technique to get  data from server without having to refresh

/*
function showPrice() {
    console.log('The price is: ');
}
*/
// another way of declaring a function
var showPrice = function() {
    var vacation = $(this).closest('.vacation'); // around where you click the button, find the closest vacation class,
    var price = vacation.data('price'); // find the data attribute in that vacation, grab the price  (data-PRICE), set it to a variable called price
    var details = $('<p>Book 3 days for $' + (3 * price) + '</p>'); // create a new DOM element which triples the price, sets it to details variable
    vacation.append(details); // append  the DOM element into the vacation list item

};

$(document).ready(function() {

    // declare the event handler on the show price button
    $('.vacation').on('click.price', 'button', showPrice); // we are namespacing the click event: the button is now called 'click.price' not just  button

    // this part is for making the link show all prices.  
    $('.vacation').on('show.price', showPrice); // declare the custom event: this is a custom event called show.price which gets triggered on the vacation list item, and calls the showPrice function. We will use this for the trigger event

    $('.show-prices').on('click', function(event) { // listen for the click event on the show-prices link

        event.preventDefault(); // when the link is clicked, prevent default (page moving up)

        $('.vacation').trigger('show.price'); // trigger show.price on all of the vacations. If we declared the namespace  ( 3 lines above ) we can call the trigger function on it
    });


});

// our typical event handler syntax :
// $(<DOM element>).on("<event>.<namespace>", <method>)
// the event handler can also be custom, we can come up with a name for the event:
// $('.vacation').on('show.price', showPrice);   // this is a custom event called show which gets triggered on the vacation list item, and calls the showPrice function
// to trigger this event on all vacations:
// $('.vacation').trigger('show.price');
// ex:  $('.vacation:last').trigger('show.price');