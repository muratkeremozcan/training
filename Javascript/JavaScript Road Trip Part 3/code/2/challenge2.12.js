function warningMaker(obstacle) {
    var count = 0;
    var zones = [];
    return function(number, location) {
        count++;
        var list = "";
        zones.push(location); // add each location to the zones array

        list = zones.join("\n"); // add each zone to the list string

        alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" +
            number + " have been spotted at the " + location + "!\n" +
            "This is alert #" + count + " today for " + obstacle + " danger.\n" +
            "Current danger zones are:\n" +
            list);
    };
}