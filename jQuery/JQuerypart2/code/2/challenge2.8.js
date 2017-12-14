function Tour(el) {
    this.el = el;
    this.fetchPhotos = function() {};
    this.el.on('click', 'button', this.fetchPhotos);
}
$(document).ready(function() {
    var paris = new Tour($('#paris'));
});