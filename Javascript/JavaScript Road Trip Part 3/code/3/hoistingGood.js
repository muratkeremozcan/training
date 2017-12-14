function sumOfSquares(a, b) { // first the variables and functions get hoisted in memory,   var x = undefined and the function add(c,d)
    var x = add(a * a, b * b); // the the executable code here (on the right side of assignment)
    return x; // and here, get executed AFTER HOISTING

    function add(c, d) {
        var a = c + d;
        return a;
    }

}

console.log(sumOfSquares(2, 2));