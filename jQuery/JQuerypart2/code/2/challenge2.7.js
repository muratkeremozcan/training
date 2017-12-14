function Tour(el) { // el for element
    this.el = el; // save a reference to the passed in el
    console.log(el);
}

$(document).ready(function() {
    var tour = new Tour($('#paris')); // the DOM element in jQuery  is passed in
});