$(document).ready(function() { // this code runs with the DOM is ready
    // PART 4c
    // here's a list of KEYBOARD EVENTS: keypress, keydown, keyup
    // here's a list of FORM EVENTS: blur, selet, foucs, submit, change
    $('.vacation').on('keyup', '.quantity', function() { // under the vacation class,  when someone releases a key, run the function on the quantitiy class 
        // get the price for this vacation
        var price = +$(this).closest('.vacation').data('price'); // 'this' class ".quantity" is the  search for the closest ancestor with the class vacation, get the price drom data attribute, it retuns the string of 399.99. Convert to number by adding + in the beginning       

        // get the quantity entered
        // helper methods:  .val(<new value>)  to set the input value , .val() to ge the input value
        var quantity = +$(this).val(); // sets quantity to a string , depending on what direction +1 or -1 the value.. We use $ because it is a jQuery object

        // set the total to price * quantity
        $('#total').text(price * quantity); // fetch the span total, se the text to price x quantity (instead of the 399.99 there) , you can pass a number or a string to the .text() method


    });

});