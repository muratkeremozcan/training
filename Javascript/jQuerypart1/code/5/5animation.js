$(document).ready(function() { // this code runs with the DOM is ready

    $('#vacations').on('click', '.vacation', function() { // under vacations id, on clicking the class vacation , run the function
        $(this).toggleClass('highlighted'); // instead of JS styling, put them in css, upon clicking add a class highlighted and set the css to highlighted classes


        // COUDN'T MAKE ANIMATION WORK in js , just do it in CSS  , and still doesn't work
        /*
        // qQuery methods: animate(<object>)
        if ($(this).hasClass('highlighted')) { // check to see if a node has specific class
            //$(this).animate({ top: "=10px" }); // if it has animate it up
            $(this).animate({ 'top': '-10px' }, 'fast');
        } else {
            $(this).animate({ 'top': "0px" }, 'fast'); // if it does not , animate it down
        }
*/
    });

});