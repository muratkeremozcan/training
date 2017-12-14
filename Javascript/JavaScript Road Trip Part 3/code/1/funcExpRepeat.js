var sweetAnnouncement = function() {
    alert("ATTENTION!\n CUPCAKES. \n\n...THAT IS ALL.");
}; // function expression assigned to variable sweetAnnouncement
sweetAnnouncement(); // call the variable

var fruits = ["Apple", "Orange", "Pineapple", "Cranberry", "Pomegranate"]; // array

var fruitJuice = fruits.map(function(fruit) { // function expression itself as a parameter for the map method passing itself as parameter to the map method,
    return "\n" + fruit + " juice"; // the map method applies the function to every cell of our array and then builds a new array
}); // every cell is represented by the parameter fruit
alert(fruitJuice);