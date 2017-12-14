// DOM : document object model : tree structure created by the browser to find HTML elements using JS to interact with the DOM
// why use qQuery? Because each browser has a slightly different DOM interface. jQuery helps communicate with all browsers, using the same code where has with JS you would need different code for each browser.
/*
jQuery(document); // document : DOM
jQuery("h1"); // to find the h1 
jQuery("p"); // 

// SHORT way : replace qQuery with $ 
$(document); // document : DOM
$("p"); // to find p
$("h1"); // to find the h1 
///////////////////////////
$("h1").text(); // to find the text inside h1
$("h1").text("Where to?"); // to modify the text in h1

*/
// listening for document ready: the below will only run once the DOM is "ready"
jQuery(document).ready(function() {
    $("h1").text("Where to?"); // to modify the text in h1
});