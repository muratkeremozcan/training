// allRides parameter will be the array of the rides and their wait times
// passRides will be the array of the next available Fast Pass Rides
// pick will be the actual ride for which our customer would like a ticket
function buildTicket(allRides, passRides, pick) {
    if (passRides[0] == pick) { //check if the Fast Pass is the same as what the customer is picking
        var pass = passRides.shift(); // shift the Fast Pass array: take the front cell and store it in a variable
        return function() { // return a function expression with whatever ride they got a fast pass for
            alert("Quick! You've got a Fast Pass to " + pass + "!"); // notice the function expression is returned directly 
        };
    } else { // if the ride they're looking for is not available for Fast Pass,
        for (var i = 0; i < allRides.length; i++) { //cycle through all the rides 
            if (allRides[i][0] == pick) { // the ride names are contained within the first index [0] the wait time in the second index [1], check the ride names for what customer wants
                return function() { // return a different function
                    alert("A ticket is printing for " + pick + "!\n" + "Your wait time is about " + allRides[i][1] + " minutes.");
                };

            }
        }
    }
}

var parkRides = [
    ["Birch Bumpers", 40],
    ["Pines Plunge", 55],
    ["Cedar Coaster", 20],
    ["Ferris Wheel of Firs", 90]
]; // 4 subarrays inside an array
// ride name and wait time

var fastPassQueue = ["Cedar Coaster", "Pines Plunge", "Birch Bumpers", "Pines Plunge"];

var wantsRide = "Ferris Wheel of Firs"; //customer's desired ride

// version 1 of code
var ticket = buildTicket(parkRides, fastPassQueue, wantsRide); // When buildTicket returns the correct ticket function, we'll store it in a ticket
ticket(); // call the function contained in the ticket variable, we need the parentheses and a semicolon

// version 2
// buildTicket(parkRides, fastPassQueue, wantsRide)(); // what happens when we don't store the function in a variable? we call it immediately