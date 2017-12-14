/*
var trainsOperational = 11;
var totalTrains = 12;
var dayOfWeek = "Friday"

if (trainsOperational > 0) { //if there are any running trains

    if (trainsOperational == totalTrains) { //if all trains are running
        console.log("All trains are running!")
    } else { // execute existing loop code covering the status of the trains

        for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
            if (trainNumber <= trainsOperational && trainNumber != 3 && trainNumber != 10 && trainNumber != 12) {
                console.log("Train # " + trainNumber + " is running");
            } else if (trainNumber == 10 || trainNumber == 12) {
                console.log("Train # " + trainNumber + " begins running at noon");
            } else if (trainNumber == 3 && dayOfWeek == "Sunday") {
                console.log("Train number 3 is running!")
            } else {
                console.log("Train # " + trainNumber + " is not operational");
            }

        }
    }
} else {
    console.log("There are no running trains")
}
*/

function makeList() {
    var passengers = ["Gregg Pollack", "Aimee Simone", "Thomas Meeks", "Oliver Lacan", "Jon Friskics", "Ashley Smith"];
    passengers[2] = "Eric Allam"; //setting a value in an array
    passengers.length; // gives the lenght of the array (last index + 1)
    passengers.pop(); //deletes the last position and returns it
    passengers.push("Adam Rensel"); // adds on top of the last cell

    var comboArray1 = ["one", "fish", 2, "fish"]; // arrays can have numbers and strings
    var poisson = "fish"; // you can insert a variable into an array
    var comboArray2 = ["Red", poisson, "Blue", poisson];
    var arrayOfArrays = [comboArray1, comboArray2]; // array of arrays, 2 dimentional array
    console.log(arrayOfArrays);
    console.log(arrayOfArrays[0]);
    console.log(arrayOfArrays[1][2]);
    console.log(arrayOfArrays[0][1]);
}

// adding passenger 'name' to an array of passengers 'list'
function addPassenger(name, list) {
    if (list.length == 0) { // if the array is empty, just push the name to the array
        list.push(name);
        return list;
    } else { // if it's not empty
        for (i = 0; i < list.length; i++) { // go through each element in the array
            if (list[i] == undefined) { // if the spot is empty
                list[i] = name; // add the name to that empty spot
                return list; // return the array and exit the function
            } else if (i == list.length - 1) { // if the end of the list is reached
                list.push(name); // add the passenger to the end of the list, increasing the list's 
                return list; // return the array and exit the function
            }
        }
    }


}

function removePassenger(name, list) {
    if (list.length == 0) { // if list is empty
        console.log("The list is empty");
        return list;
    } else { // if the list is not empty
        for (i = 0; i < list.length; i++) { // go through each element in the array
            if (list[i] == name) { // if the cell we are looking at is the name we are wanting to erase
                list[i] = undefined; // erase that name
                return list; // return the updated array and exit 
            } else if (i == list.length - 1) { // if the end of the list is reached
                console.log("Passenger not found!");
            }
        }
    }
    return list; // if the list was empty or if we never found the passenger, we just return the same list
}


makeList();

var passengerList = []; // initialize an empty array to be the passenger list

passengerList = addPassenger("BOO BOO", passengerList);
passengerList = addPassenger("Ashley Smith", passengerList);
passengerList = addPassenger("Jon Friskics", passengerList);

passengerList = removePassenger("Ashley Smith", passengerList);
passengerList = addPassenger("Murat Ozcan", passengerList); // add to the empty spot

console.log(passengerList);