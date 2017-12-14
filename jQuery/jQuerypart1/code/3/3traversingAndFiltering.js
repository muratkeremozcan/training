$(document).ready(function() { // this code runs with the DOM is ready
    // PART3

    $('.vacation').on('click', 'button', function() { // // here is one event handler  this runs when a button is clicked, under any class with value 'vacation', only when a button element is clicked
        // EVENT DELEGATION > targeting buttons only if it's inside a certain class

        var vacation = $(this).closest('.vacation'); // go to closest ancestor 'vacation' whereever you click the button
        var amount = vacation.data('price'); // closest ancestor which has the .vacation class, 'price' here reads from the data-price attribute
        var price = $('<p>From $' + amount + '</p>'); // create a <p> note with the price, send the html into the jQuery function, include amount var in the html

        vacation.append(price); // go to the closest ancestor 'vacation' , put in the price right after it

        $(this).remove(); //  this was $('button').remove, was removing all buttons. To remove onl the button being referenced , we do  this , remove the button being clicked on only
    });

    // COMMENT: with these 2  I CAN SEE THE DOM CHANGING BUT CAN'T REALLY SEE ANYTHING ON THE SCREEN
    $('#filters').on('click', '.onsale-filter', function() { // on clicking filters id > class with name onsale-filter, run the below
        $('.highlighted').removeClass('highlighted'); // remove the highlighted class before adding it back
        // find all vacations that are on sale & add a class onto these vacations
        $('.vacation').filter('.onsale').addClass('highlighted'); // find elements with a class of vacation, filter for class onsale under those, add class 'highliged' to them
        // here's some on CLASS MANIPULATION
        // .addClass(<class>)   ,  .removeClass(<class>)
    });

    $('#filters').on('click', '.expiring-filter', function() { // on clicking filters id > class with name expiring-filter, run the below
        $('.highlighted').removeClass('highlighted'); // remove the highlighted class before adding it back
        $('.vacation').filter('.expiring').addClass('highlighted'); // find elements with a class of vacation, filter for class expiring under those, add class 'highliged' to them
    });
});