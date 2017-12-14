var totalGen = 19;
var totalMW = 0;


for (var generator = 1; generator <= totalGen; generator++) {

    if (generator % 2 == 0) {
        if (generator <= 4) {
            totalMW += 62;
            console.log("Generator #" + generator + " is on, adding 62 MW, for a total of " + totalMW + " MW!");

        } else if (generator > 4 && generator <= 19) {
            totalMW += 124;
            console.log("Generator #" + generator + " is on, adding 124 MW, for a total of " + totalMW + " MW!");

        }
    } else {
        console.log("Generator #" + generator + " is off.");
    }
}