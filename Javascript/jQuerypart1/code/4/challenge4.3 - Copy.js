$(document).ready(function() {
    // alert($('img').length); // challenge 4.3
    $('#tour').on('click', 'button', function() { // challenge 4.4
        // $(this).find('.photos').slideDown(); // challenge 4.5
        $('.photos').slideToggle(); // challenge 4.6
    });
    $('.photos').on('mouseenter', 'li', function() {
        $(this).find('span').slideToggle();
    });
});