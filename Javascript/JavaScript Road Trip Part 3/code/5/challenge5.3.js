var canyonCows = [
    { name: "Bessie", type: "cow", hadCalf: "Burt" },
    { name: "Donald", type: "bull", hadCalf: null },
    { name: "Esther", type: "calf", hadCalf: null },
    { name: "Burt", type: "calf", hadCalf: null },
    { name: "Sarah", type: "cow", hadCalf: "Esther" },
    { name: "Samson", type: "bull", hadCalf: null },
    { name: "Delilah", type: "cow", hadCalf: null }
];
var valleyCows = [
    { name: "Danielle", type: "cow", hadCalf: null },
    { name: "Brittany", type: "cow", hadCalf: "Christina" },
    { name: "Jordan", type: "bull", hadCalf: null },
    { name: "Trevor", type: "bull", hadCalf: null },
    { name: "Christina", type: "calf", hadCalf: null },
    { name: "Lucas", type: "bull", hadCalf: null }
];
var forestCows = [
    { name: "Legolas", type: "calf", hadCalf: null },
    { name: "Gimli", type: "bull", hadCalf: null },
    { name: "Arwen", type: "cow", hadCalf: null },
    { name: "Galadriel", type: "cow", hadCalf: null },
    { name: "Eowyn", type: "cow", hadCalf: "Legolas" }
];




Array.prototype.countCattle = function(kind) {
    var numKind = 0;
    for (var i = 0; i < this.length; i++) {
        if (this[i].type == kind) {
            numKind++;
        }
    }
    return numKind;
};

alert(canyonCows.countCattle("calf") + valleyCows.countCattle("bull") + forestCows.countCattle("cow"));