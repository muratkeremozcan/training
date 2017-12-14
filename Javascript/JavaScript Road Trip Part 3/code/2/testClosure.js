function testClosure() {
    var x = 4; // a function's local variables are not available, once the function scope is closed!!

    function closeX() {
        return x; // the inner function can access the outer function's variables. 
    } //  The scope goes as GLOBAL > function > inner function
    return closeX;
}

var checkLocalX = testClosure(); // assign the result of the function testClosure to a variable
//console.log(checkLocalX); // what gets returned is the function closeX! 

checkLocalX(); // when you call checkLocalX , it just is called like a function(), you get 4
console.log(checkLocalX()); // display the 4
// testClosure function finished operating, but its local variable is BOUND within checkLocalX as a closure