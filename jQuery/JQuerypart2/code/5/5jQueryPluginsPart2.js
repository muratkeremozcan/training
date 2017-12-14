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


//  PART 5: SETTING UP A PLUGIN
$.fn.priceify = function(options) { // .fn makes this method available to all jQuery objects
    // need to use each   : each(<function>)
    this.each(function() { // loop over each .vacation element, setting each one to 'this'. We need this so the below don't apply to everything at once, just what we click. THIS DIDN'T REALLY WORK so I commented it out
        var settings = $.extend({ days: 3 }, options); //set the default number of days to 3, and the 2nd parameter is the options object we pass to the function. So default is 3, and if there is an options it is set to options 
        var vacation = $(this); //  'this' will be $('.vacation')  so  var vacation =  $('.vacation') . THIS IS POINTING TO ALL THE VACATION ELEMENTS
        vacation.on('click.priceify', 'button', function() { // create a click-handler for when the button gets pushed
            var price = vacation.data('price'); // find the data attribute in that vacation, grab the price  (data-PRICE), set it to a variable called price
            var details = $('<p>Book ' + options.days + ' days for $' + (options.days * price) + '</p>'); // create a new DOM element which triples the price, sets it to details variable
            $(this).hide(); // hide the button
            vacation.append(details); // append  the DOM element into the vacation list item
        });
    });
};

$(document).ready(function() {

    $('.vacation').priceify({ days: 5 }); // priceify all vacations at once , let's make our plugin accept and argument ( days:5 )
    // what if we want to call without any argument and we want it to default to 3?
    // UTILITY METHOD :  $.extend(target[, object1][, objectn])   will combine all objects




    /*
    // declare the event handler on the show price button
    $('.vacation').on('click.price', 'button', showPrice); // we are namespacing the click event: the button is now called 'click.price' not just  button
    */

    // this part is for making the link show all prices.  
    $('.vacation').on('show.price', showPrice); // declare the custom event: this is a custom event called show.price which gets triggered on the vacation list item, and calls the showPrice function. We will use this for the trigger event

    $('.show-prices').on('click', function(event) { // listen for the click event on the show-prices link

        event.preventDefault(); // when the link is clicked, prevent default (page moving up)

        $('.vacation').trigger('show.price'); // trigger show.price on all of the vacations. If we declared the namespace  ( 3 lines above ) we can call the trigger function on it
    });


});