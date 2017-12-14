function capacityStatus(numPassengers, capacity) {


    var noSeats = function() { // 1st, vars get hoisted to the top, with undefined values
        alert("No seats remain!"); // since this code is used in the if statements, it has to be on top
        return false;
    }
    var seatsAvail = function() { // 1st, vars get hoisted to the top, with undefined values
        alert("There are remaining seats " + (capacity - numPassengers)); // since this code is used in the if statements, it has to be on top
        return true;
    }
    if (numPassengers == capacity) {
        noSeats(); // since this code calls the results of the above functions, it needs to be on the bottom
    } else if (numPassengers < capacity) { // since this code calls the results of the above functions, it needs to be on the bottom
        seatsAvail();
    } else {
        alert("More passengers than capacity!")
    }

}

capacityStatus(59, 60);

// INSTEAD OF FUNCTION EXPRESSIONS, YOU CAN HAVE JUST FUNCTIONS AND THIS CAN STILL WORK
function capacityStatus2(numPassengers, capacity) {

    if (numPassengers == capacity) { // the CONDITIONALS fall to the bottom because they're the executable code 
        noSeats();
    } else if (numPassengers < capacity) {
        seatsAvail();
    } else {
        alert("More passengers than capacity!")
    }

    function noSeats() { // 1st, FUNCTIONS get hoisted to the top, waiting to be used
        alert("No seats remain!");
        return false;
    }

    function seatsAvail() { // 1st, FUNCTIONS get hoisted to the top, waiting to be used
        alert("There are remaining seats " + (capacity - numPassengers));
        return true;
    }

}

capacityStatus2(55, 60);