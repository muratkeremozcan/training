$(document).ready(function() {
    $('#nights').on('keyup', function() {
        var nights = +$(this).val();
        var dailyPrice = +$(this).closest('.tour').data('daily-price');
        $('#total').text(nights * dailyPrice);
        $('#nights-count').text($(this).val());
    });

    $('#nights').on('focus', function() { // challenge 4.16
        $(this).val(7);
    });
});