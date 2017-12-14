var trainsOperational = 8;
var totalTrains = 12;

for (var trainNumber = 1; trainNumber <= trainsOperational; trainNumber++) {
    console.log("Train # " + trainNumber + " is running")

}

//stopped trains are 9 10 11 12 
for (var stoppedTrain = trainsOperational + 1; stoppedTrain <= totalTrains; stoppedTrain++) {
    console.log("Train # " + stoppedTrain + " is not operational");

}