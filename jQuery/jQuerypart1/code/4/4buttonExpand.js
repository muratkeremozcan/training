$(document).ready(function() { // this code runs with the DOM is ready
    // PART 4
    alert($('button').length); // debug: see if there is any button on the page when the alert gets run , this gives 1 button
    $('.confirmation').on('click', 'button', function() { // event handler. Grab the confirmation class, when there's a button inside of that which gets clicked, run the code
        $(this).closest('.confirmation').find('.ticket').slideDown('.ticket'); // search up the ancestors of the button to find the closest confirmation class, then search/find down the children for a class with name ticket
        // to show this unorderd list, we will use the .slideDown method, other methods are .slideUp(), .slideToggle()

        alert('Hello'); // debug: alert
        alert($('li').length); // debug:  to query how many nodes are on a page
    });



});