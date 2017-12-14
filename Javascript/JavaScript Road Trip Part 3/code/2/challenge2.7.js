function warningMaker(obstacle) {
    return function(numObstacles, locationObstacle) { // set parameters
        alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" +
            numObstacles + " have been spotted at the " + locationObstacle + "!");
    };
}

// here is 2.8
var killerPenguinAlert = warningMaker("killer penguin");
var polarBearAlert = warningMaker("polar bear");
var icebergAlert = warningMaker("iceberg");
var flashBlizzardAlert = warningMaker("flash blizzard");
var snowYetiAlert = warningMaker("snow yeti");

// call the two functions here
killerPenguinAlert(6, "Ice Caves");
snowYetiAlert(1, "Blizzard Beach");