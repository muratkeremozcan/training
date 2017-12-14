$(document).ready(function() {
    $('#tour').on('click', 'button', function() {
        $.get('/photos.html', function(response) {
            $('.photos').html(response).fadeIn(); // challenge 1.4
        });
    });
});