function warningMaker(obstacle) {
    var count = 0;
    return function(number, location) {
        count++;
        alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" +
            number + " have been spotted at the " + location + "!\n" +
            "This is alert #" + count + " today for " + obstacle + " danger.");
    };
}