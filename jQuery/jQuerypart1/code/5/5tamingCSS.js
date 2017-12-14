$(document).ready(function() { // this code runs with the DOM is ready

    $('#vacations').on('click', '.vacation', function() { // under vacations id, on clicking the class vacation , run the function
        // jQuery Object Methods:    .css(<attr>, <value>)     .css(<attr>)     .css(<object>)
        //$(this).css({ 'background-color': '#563', 'border-color': '1px solit #967' }); // passing a Javascript Object as an argument  to css. This signifies the vacation object
        //$(this).find('.price').show();
        // jQuery methods  .show()   and .hide()
        $(this).toggleClass('highlighted'); // instead of JS styling, put them in css, upon clicking add a class highlighted and set the css to highlighted classes
        // remember we can do addClass, removeClass and toggleClass
    });

});