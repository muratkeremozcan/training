$(document).ready(function() { // this code runs with the DOM is ready

    $('.vacation').on('click', '.expand', function(event) { // fetch the vacation class, listen for a click event on the expand class' html element (which is a link). we add the event parameter to function here to prevent href="#" from refreshing to the to of the page
        event.preventDefault(); // to prevent the default behavior of the browser which is popping up to the top of the page because of href="#"
        // find the comments ul
        // show the comments ul
        $(this).closest('.vacation').find('.comments').fadeToggle(); // 'this will give you the expand class, find the closest vacation class to it, under that search for comments class, when we click the link toggle the comments 
        // jQUERY Object Methods :   .fadeIn()  .fadeOut()  .fadeToggle()


    });

});