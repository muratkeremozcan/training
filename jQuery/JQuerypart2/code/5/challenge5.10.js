$.fn.photofy = function() {
    this.each(function() { // loop over each .tour element, set  each one to this
        var tour = $(this); // this will be $('tour');
        tour.on('click.photofy', '.see-photos', function(event) { // event handler targets .see-photos
            event.preventDefault();
            tour.addClass('is-showing-photofy'); // the function addes the class .is-showing-photofy
        });
    });
}

$(document).ready(function() {
    $('.tour').photofy();
});