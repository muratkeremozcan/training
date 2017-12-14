// a function expression, it is only called when this line is reached, as opposed to  function being loaded into memory at the beginning of starting an application
var diff = function(a, b) { // no need for a function name: Anonymous Function
    return a * a - b * b;
};

console.log(diff(9, 5)); // we only call the variable, not the name of the function inside it
console.log(diff); // you can check inside a function's contents