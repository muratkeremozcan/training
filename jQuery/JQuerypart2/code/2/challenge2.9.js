function Tour(el) {
    var tour = this; // variable for current tour, this is so that we can set 'this' as the function's this versus ajax's this
    this.el = el; // save reference to the passed in element so we can use it within the ajax call
    this.fetchPhotos = function() { // helper method
        $.ajax('/photos.html', {
            context: tour, // allows us to set the value of "this" inside the callbacks to the function Tour
            data: { location: el.data('location') }, // taking the data from the current tour because we are  passing either '#paris' or '#london' here, so this has to match that
            success: function(response) {
                this.el.find('.photos').html(response).fadeIn(); // under current context (this Tour function's passed in #paris or #london) find photos
            },
            error: function() {
                this.el.find('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>'); // under current context (this Tour function's passed in #paris or #london) find photos
            },
            timeout: 3000,
            beforeSend: function() {
                this.el.addClass('is-fetching'); // targeting only the current #paris/#london with this.el
            },
            complete: function() {
                this.el.removeClass('is-fetching'); // targeting only the current #paris/#london with this.el
            }
        });
    }
    this.el.on('click', 'button', this.fetchPhotos); // event handler  
}
$(document).ready(function() {
    var paris = new Tour($('#paris')); // passing in query object
    var london = new Tour($('#london'));
});