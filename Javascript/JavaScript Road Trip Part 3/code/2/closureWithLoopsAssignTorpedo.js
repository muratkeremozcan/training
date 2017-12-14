/*
function assignTorpedo(name, passengerArray) {
    var torpedoAssignment; // this will eventually hold the torpedo assignment function 
    for (var i = 0; i <= passengerArray.length; i++) { // loop that will check the entire passengerArray, looking for a passenger we will assign a torpedo to
        if (passengerArray[i] == name) { // if we find the passenger we are looking for
            torpedoAssignment = function() { // build a function that that closes the name variable and the loop counter i, assigns a person to the torpedo associated with their index value (adjusted for zero)
                alert("Ahoy, " + name + "!\n" + "Man your post at Torpedo # " + (i) + "!"); // closures bind their values at the very last moment which is the return of the outer function
            };
        }
    }
    return torpedoAssignment; // return the torpedoAssignment variable that holds the function expression/ the closure/ the inner function
}       //  THE MISTAKE HERE IS THIS: THE FUNCTION'S ACTUAL RETURN IS THE TRUE MOMENT OF CLOSURE, WHEN THE LOOP RUNS ALL THE WAY THROUGH, THAT'S WHY WE GET TORPEDO 9 INSTEAD OF 4 WHICH IS CHEWIE'S SPOT
*/

// HERE IS THE CORRECT WAY TO DO IT
function assignTorpedo(name, passengerArray) {
    // get rid of the variable that holds the closure
    // var torpedoAssignment; // this will eventually hold the torpedo assignment function 
    for (var i = 0; i <= passengerArray.length; i++) { // loop that will check the entire passengerArray, looking for a passenger we will assign a torpedo to
        if (passengerArray[i] == name) { // if we find the passenger we are looking for
            // torpedoAssignment = function() { // build a function that that closes the name variable and the loop counter i, assigns a person to the torpedo associated with their index value (adjusted for zero)
            return function() { // we want to return as soon as we find the passenger
                alert("Ahoy, " + name + "!\n" + "Man your post at Torpedo # " + (i + 1) + "!"); // closures bind their values at the very last moment which is the return of the outer function
            };
        }
    }
    // we don't want to return all the way at the end
    // return torpedoAssignment; // return the torpedoAssignment variable that holds the function expression/ the closure/ the inner function
} // THE LESSON TO LEARN HERE IS IF YOU'RE USING LOOPS IN THE CLOSURE, YOU WANT TO RETURN NOT ALL THE WAY AT THE END. Closures make sure they run fully, package is completed. You need to return before this happens


// HERE IS A SECOND WAY OF DOING IT RIGHT
function assignTorpedo2(passengerArray) { // we are going to pass in name variablle to the inner function
    return function(name) { // we will let the returned function deal with name 
        for (var i = 0; i <= passengerArray.length; i++) { // passengerArray is closed up in the inner function/closure
            if (passengerArray[i] == name) {
                alert("Ahoy, " + name + "!\n" + "Man your post at Torpedo # " + (i + 1) + "!");
            } // THE LESSON TO LEARN HERE IS NOT TO LET THE CLOSURE CHANGE PARAMETERS IF IT IS USING LOOPS, here passengerArray never changes
        }
    };
}

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "Rd-D2", "C-3PO", "Boba"]; // an array of passengers


var giveAssignment = assignTorpedo("Chewie", subPassengers); // call the function passing in a name and the passenger array, assign the function to a variable
giveAssignment(); // call the closure!

var giveAssignement2 = assignTorpedo2(subPassengers);
giveAssignement2("Chewie");