/*
// how can we change the text of every li in this page
$("li").text("Orlando");
// how can we find elements by id?
$("#destinations")
// how can we find elements by class?
$(".promo")
////////////////////////////
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
///////////////////////
// 2.PART2 FILTERING BY TRAVERSING THE DOM
// kind of works the same as $("#destinations li").  First part is the selection , second part is the traversal
// $("#destinations").find("li")
// $("#destinations").first()
// $("#destinations").last()
// $("li").first();
// WALKING THE DOM: METHOD CHAINING
// $("li").first().next();
// $("li").last().prev();
// TRAVERSE UP TO THE DOM TO THE PARENT
// $("li").first().parent();
// $("li").last().parent();
// $("li").parent();
// TRAVERSE DOWN THE DOM TO THE CHILDREN
// all children
// $("#destinations").children()    
// all children that are list items
// $("#destinations").children("li")
// all children that are unordered lists
// $("#destinations").children("ul")
// li children of the ul children
// $("#destinations").children("ul").children("li")
)
*/
$(document).ready(function() {
    $("#destinations").children("ul").children("li").text("bombok yer");

});