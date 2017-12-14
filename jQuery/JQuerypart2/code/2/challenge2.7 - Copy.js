function Tour(price) {
    console.log("A new Tour was created");
    this.cost = function(nights) { // when you declare a method within a function(class in C#)... 
        console.log(price * nights);
    };
}
$(document).ready(function() {
    var tour = new Tour(100); // 100 because the price is 100
    tour.cost(4); // because the nights is 4
});