$(document).ready(function() {
    // create a <p> note with the price
    var price = $('<p>From $3.99</p>'); // send the html into the jQuery function

    // ways to add the price node into the DOM:
    // $('.vacation').append(price)   // adds as the last child of the li
    // $('.vacation').prepend(price)  // add as the first child of the li
    // $('.vacation').after(price)    // adds after the li
    // $('.vacation').before(price)   // adds before the li

    // $('.vacation').append(price); // adds as the last child of vacation class
    // alternative to the above
    price.appendTo($('.vacation'));

    // how do we remove the button node from the DOM?
    $('button').remove(); // remove the button 

    // more methods you should now about does the same adding operation
    // price.appendTo($('.vacation'))   // adds as the last child of the li
    // price.prependTo($('.vacation'))  // add as the first child of the li
    // price.insertAfter($('.vacation'))    // adds after the li
    // pire.insertBefore($('.vacation'))   // adds before the li

});