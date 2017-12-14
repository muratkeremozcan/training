$(document).ready(function() {
    $('#nights').on('keyup', function() {
        $('#nights-count').text($(this).val()); // challenge 4.14
    });
});