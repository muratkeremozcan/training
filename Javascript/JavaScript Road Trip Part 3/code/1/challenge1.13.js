var puzzlers = [
    function(a) { return 8 * a - 10; },
    function(a) { return (a - 3) * (a - 3) * (a - 3); },
    function(a) { return a * a + 4; },
    function(a) { return a % 5; }
];
var start = 2;

// build applyAndEmpty function expression here
var applyAndEmpty = function(input, puzzlersQueue) {
    var length = puzzlersQueue.length; // puzzlersQueue.length is the original size of the array, but as we shift the array is gettin smaller so we need a variable 'length' here
    for (var i = 0; i < length; i++) {
        var function_returned = puzzlersQueue.shift(); // here we get the FUNCTION take out the first cell, pass it to another variable.
        var result = function_returned(input); // here we get the RETURN value of the function
        input = result; // here we set the input ( which is 'a' ) as the input for the next function, so the new input can get used
    }
    return input; // the final return
};

alert(applyAndEmpty(start, puzzlers));


// challenge 1.14 nonsense... 
//puzzlers[1](3); // 2nd position, passed in 3, this is the 'array index'

//puzzlers[3](9); // 3rd position, passed in 9 , this is the the 'passed in value'

//alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));