var numbers = [12, 4, 3, 9, 8, 6, 10, 1];
var results = numbers.map(function(arrayCell) { // function expression, itself as a parameter for the map method, passes itself as a parameter
    return arrayCell * 2; // to every cell of the numbers array (every cell being represented by the parameter arrayCell), applies *2 to every cell of the resulting array
}); // called results

console.log(results);