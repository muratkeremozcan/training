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