$(document).ready(function() {
    $('.tour').on('mouseenter', function() {
        // $(this).css({ 'background-color': '#252b30', 'font-weight': 'bold' });  // challenge 5.6
        // $(this).find('.photos').show();  // challenge 5.5
        $(this).addClass('highlight'); // challenge 5.6
        $(this).find('.per-night').animate({ 'opacity': '1', 'top': '-14px' }, 'fast'); // challenge 5.8, 5.9, 5.10
    });
    $('.tour').on('mouseleave', function() { // challenge 5.6
        $(this).removeClass('highlight');
        $(this).find('.per-night').animate({ 'top': '0px', 'opacity': '0' }, 'fast'); // challenge 5.11
    });

});