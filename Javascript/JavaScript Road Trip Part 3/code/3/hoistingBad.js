function getMysteryNumber() {

    function chooseMystery() { // the first declared function get hoisted
        return 12;
    }

    return chooseMystery();

    function chooseMystery() { // and then this is the 2nd one hoisted and OVERWRITES the first function
        return 7;
    }
}

console.log(getMysteryNumber());


// the correct way of hoisting
function getMysteryNumber2() {

    var chooseMystery = function() { // 1st this variable gets hoisted
        return 12; // 3rd this get executed   
    }

    return chooseMystery(); // 4th this get executed and returns 3rd exectuion

    var chooseMystery = function() { // 2nd this varilable gets hoisted and overwrites the first
        return 7; // this never gets executed because at 4th it already returned
    }
}

console.log(getMysteryNumber2());

// what if we move return to the top?
function getMysteryNumber3() {

    return chooseMystery(); // 3rd this get executed   Executable code that is at most top

    var chooseMystery = function() { // 1st this variable gets hoisted
        return 12; // this is never reached   
    }



    var chooseMystery = function() { // 2nd this varilable gets hoisted and overwrites the first
        return 7; // this is never reached   
    }
}

console.log(getMysteryNumber3());