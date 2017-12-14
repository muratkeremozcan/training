$(document).ready(function() { // this code runs with the DOM is ready
    // PART2
    $('button').on('click', function() { // this runs when a button is clicked. Target all buttons in the DOM, watch for clicks, run the code inside the function
        var price = $('<p>From $399.99</p>'); // create a <p> note with the pricesend the html into the jQuery function

        //$('.vacation').after(price); // would add price after any button (duplicates)
        // $(this).after(price); // this refers to the button, here it adds price after the clicked button only
        $(this).closest('.vacation').append(price); // alternative to the above, walk up the DOM to find the ancestor with the class of 'vacation' and append onto that the price node. 

        $(this).remove(); //  this was $('button').remove, was removing all buttons. To remove onl the button being referenced , we do  this , remove the button being clicked on only

    });
});