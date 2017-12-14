$(document).ready(function() {
    $('#tour').on('click', 'button', function() {
        $.ajax('/photos.html', {
            success: function(response) { // challenge 1.3
                $('.photos').html(response).fadeIn(); // challenge 1.4
            }
        });
    });
});