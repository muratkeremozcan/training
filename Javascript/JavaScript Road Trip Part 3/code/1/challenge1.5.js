var people = prompt("how many people?");
var rain = prompt("how much rain?");
var sharks = prompt("how many sharks?");

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
    var rainFear = numPeeps * rainInInches;
    var sharkFear = numSharks * numSharks * numSharks;
    var totalFear = sharkFear + rainFear;
    return totalFear;
};
/////////////////// previous exercise (it doesn't make sense without it, because where fearGenerated coming from?)


var fear = fearGenerated(people, rain, sharks);

var fearMessage = function() {
    if (fear < 200) {
        return confirm("Fear Level: LOW\nStill wanna ride?");
    } else if (fear >= 200 && fear <= 300) {
        return confirm("Fear Level: MEDIUM\nThink you'll make it?");
    } else {
        return confirm("Are you crazy?");
    }

};

function confirmRide(confirmToGo) {
    return confirmToGo();
}

// Call confirmRide with the fearMessage function
var startRide = confirmRide(fearMessage);