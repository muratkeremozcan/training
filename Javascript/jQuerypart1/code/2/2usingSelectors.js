/*
// how can we change the text of every li in this page
$("li").text("Orlando");
// how can we find elements by id?
$("#destinations")
// how can we find elements by class?
$(".promo")
// 2.PART1
// select all li under destinations (decendant selector)
$("#destinations li)
// select a class under an id
$("#destinations .promo")
// select the ul under destinations
$("#destinations ul")
// select the li under the ul under destinations
$("#destinations ul li")
// select only direct decendants , not grandchildren
$("#destinations > li")
// select multiple, different elements
$(".promo, #france") 
// select first item in the ul, and then last item
$("#destinations li:first")
$("#destinations li:last")
$("#destinations li:odd")
$("#destinations li:even")
*/
$(document).ready(function() {
    $("#destinations li:even").text("bombok yerler");
});