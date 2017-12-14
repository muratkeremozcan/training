var trainsOperational = 8;
var totalTrains = 12;


for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
    if (trainNumber <= trainsOperational) {
        console.log("Train # " + trainNumber + " is running");
    } else {
        console.log("Train # " + trainNumber + " is not operational");
    }

}