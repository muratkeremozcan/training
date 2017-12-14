function countEntries(KnightResponses, value) {
    var count = 0,
        x = KnightResponses.length;
    for (var i = 0; i < x; i++) {
        if (KnightResponses[i] === value) { // always be careful in comparisons, OFTEN === is best
            count++;
        }

    }
    return count;
}

var fields = ["Jason Millhouse", "1", "12", true, true, false]; // we want to know how many completed tasks are true, the "1" here gives true if == is used instead of ===
var numCompletedTasks = countEntries(fields, true);
console.log(numCompletedTasks);