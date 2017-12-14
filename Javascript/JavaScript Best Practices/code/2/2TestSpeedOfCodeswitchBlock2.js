// USING NUMERICAL TIME DATA
/*
var rightNow = +new Date();  // adding + gives the value in milliseconds
var endTime = +new Date();   
var elapsedTime = endTime - rightNow;
console.log(elapsedTime);
*/

//This is the constructor
function SpeedTest(testImplement, testParams, repetitions) {
    this.testImplement = testImplement; // testImplement is the specific code we want to test for performance
    this.testParams = testParams; // testParams are the parameters our test code needs
    this.repetitions = repetitions || 10000; // the amount of repetition, we need that average. We give it a choice, if no repetions given then we do it 10000 times
    this.average = 0;
}
// BEST PRACTICE: add commonly used methods to prototypes!
SpeedTest.prototype = {
    startTest: function() { //we call this method to begin calculating an average speed for some test implementation
        var beginTime, endTime, sumTimes = 0; // the first 2 will take numerical Date objects. Also we're using commas between vars to make it faster. Sum variable will add up times for all the repetitions
        for (var i = 0, x = this.repetitions; i < x; i++) { // loop over the full amount of requested repetitions. ANOTHER BEST PRACTICE : NO REPETITIVE PROPERTY ACCESS
            beginTime = +new Date(); // start clock for this individual repetition
            this.testImplement(this.testParams); // WHERE IS THE TESTIMPLEMENT FUNCTION??? this is where we run the code for this repetition inside the loop. We pass the testParams into the testImplement function
            endTime = +new Date(); // stop clock
            sumTimes += endTime - beginTime; // get elapsed time and add it to the sum
        }
        this.average = sumTimes / this.repetitions; // average of all times divided by repetitions
        return console.log("Average executions across " + this.repetitions + ": " + this.average); // return message with an average tim
    }
};

function Knight(name, regiment) {
    this.name = name;
    this.regiment = regiment;

    switch (regiment) { // take some specific action based on the value of regiment
        case 1:
            this.weapon = "Braodsword";
            break;
        case 2:
            this.weapon = "Claymore";
            break;
        case 4: // cases don't have to be in order
            this.weapon = "Mace";
            break;
        case 5:
            this.weapon = "Warhammer";
            break;
        case 6:
            this.weapon = "Battle axe";
            break;
        case 3:
        case 7: // multipl cases can end up here
        case 8:
            this.weapon = "Morningstar";
            break;
        case "King": // case can be a string
            this.weapon = "Excalibur";
            break;
        default: // if it fits no case, it goes here
            alert(name + " has an inccorrect regiment");
            // no break statement needed at the last one, it's OPTIONAL
    }
}

var firstRegimentNewbs = ["Grimble Horsehead", "Jark Winterborn", "Bunder Ropefist", "Ernst Breadbaker", "Hoppidi hopp"];
var firstRegimentKnights = ["Murat", "Kerem", "Ozcan", "Chloe", "Ela", "Mila", "Leyla", "Jade"];
var listsForTests = [firstRegimentNewbs, firstRegimentKnights]; // both the arrays our testable code will need 

//  piece of code to test
var BP = function(listOfParams) { // wrap the code in its own anonymous function expression and assign it to a variable, so that we can pass it around as a set of code to be performance tested
    // since our SpeedTest lumps all the test code's important parameters into one testParams property, we need to modify the function expression and important data to use just one array of important stuff
    for (var i = 0, x = listOfParams[0].length; i < x; i++) { // adding all the new guys to the knight list 
        // to test this block, we need to be able to pass all of it into the SpeedTest constructor as its own function
        listOfParams[1].push(new Knight(listOfParams[0][i], 1));
    }
};

var BPtest = new SpeedTest(BP, listsForTests, 100000); // not passing in repetitions amount, so it's at 10k

BPtest.startTest(); // start the test