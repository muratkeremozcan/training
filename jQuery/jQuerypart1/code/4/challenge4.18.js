$(document).ready(function() {
    $('.see-photos').on('click', function() { //challenge 4.18
        $(this).closest('.tour').find('.photos').slideToggle(); // challenge 4.19
        event.stopPropagation(); // challenge 4.20
        event.preventDefault(); // challenge 4.21
    });
    $('.tour').on('click', function() {
        alert('This event handler should not be called.');
    });
});