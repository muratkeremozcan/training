$.fn.photofy = function(options) {
    this.each(function() {
        var show = function(e) {
            e.preventDefault();
            settings.tour
                .addClass('is-showing-photofy')
                .find('.photos')
                .find('li:gt(' + (settings.photos - 1) + ')')
                .hide();
        };
        var settings = $.extend({
            count: 3,
            tour: $(this)
        }, options);
        settings.tour.on('click.photofy', '.see-photos', show);
        settings.tour.on('show.photofy', show);
    });
}

$(document).ready(function() {
    $('.tour').photofy({ count: 1 });

    $('.show-photos').on('click', function(e) {
        e.preventDefault();
        $('.tour').trigger('show.photofy');
    });
});