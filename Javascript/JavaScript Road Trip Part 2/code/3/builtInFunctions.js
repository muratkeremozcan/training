var trainsOperational = 11;
var totalTrains = 12;
var dayOfWeek = "Friday";


// getting the user name
var gotName = false; // boolean to identify if we have the user's name or not
while (gotName == false) {
    var userName = prompt("What is the user name?"); // this is just so that Cancelling returns object and does not let it progress further, otherwiser everything is a string: "object", "number"
    alert(typeof userName);

    if (typeof userName == "string") {
        if (confirm("Are you sure your name is " + userName + "?")) {
            // if the confirm returns TRUE, send alert to screen
            alert("Hello " + userName + "!");
            gotName = true; //exit the loop
        }
    } else { // in case the user hits cancel on name entry
        alert("That's not a valid entry!");
    }
}



/*
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