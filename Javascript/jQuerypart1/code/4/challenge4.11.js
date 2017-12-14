function showPhotos() {
    $(this).find('span').slideToggle();
}

$(document).ready(function() {
    $('#tour').on('click', 'button', function() {
        $('.photos').slideToggle();
    });

    $('.photos').on('mouseenter', 'li', showPhotos);
    $('.photos').on('mouseleave', 'li', showPhotos);
});