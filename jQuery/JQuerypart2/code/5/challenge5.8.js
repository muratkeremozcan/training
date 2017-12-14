$.fn.photofy = function() { // photofy plugin
    console.log(this);
};

$(document).ready(function() {
    $('.tour').photofy(); // call the photofy plugin for .tour html class 
});