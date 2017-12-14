var forestCows = [
    { name: "Legolas", type: "calf", hadCalf: null },
    { name: "Gimli", type: "bull", hadCalf: null },
    { name: "Arwen", type: "cow", hadCalf: null },
    { name: "Galadriel", type: "cow", hadCalf: null },
    { name: "Eowyn", type: "cow", hadCalf: "Legolas" }
];

Object.prototype.noCalvesYet = function() {
    if (this.type == "cow" && this.hadCalf == null) {
        return true;
    } else {
        return false;
    }

};

Array.prototype.countForBreeding = function() {
    var numToBreed = 0;
    for (var i = 0; i < this.length; i++) {
        if (this[i].noCalvesYet()) {
            numToBreed++;
        }
    }
    return numToBreed;
};