$(document).ready(function() {
    $('.tour').on('mouseenter', function() {
        // $(this).css({ 'background-color': '#252b30', 'font-weight': 'bold' });  // challenge 5.6
        // $(this).find('.photos').show();  // challenge 5.5
        $(this).addClass('highlight'); // challenge 5.6
    });
    $('.tour').on('mouseleave', function() { // challenge 5.6
        $(this).removeClass('highlight');
    });

});