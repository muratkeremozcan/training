/*
var armory = {
    addSword: function(sword) { // our armory object will initially contain a function property for adding swords
        this.swords = this.swords ? this.swords : []; // if this.swords (swords property) currently exists, then the list it contains stays the same, if it doesn't exist we make an empty array, and pass it to the this.swords
        this.swords.push(sword); // we add new sword to our swords property/array
    }
};  
*/
// UsiNG LOGICAL ASSIGNMENT we can eliminiate a read of sword property
var armory = {
    addSword: function(sword) { // our armory object will initially contain a function property for adding swords
        this.swords = this.swords || []; // when used in assignment, the OR operator will try to select the first 'truthy value'
        this.swords.push(sword); // we add new sword to our swords property/array
    }
};

armory.addSword("Broadsword");
armory.addSword("Katana");
armory.addSword("Claymore");

console.log(armory.swords)

armory.retrieveSword = function(request) {
    return (this.swords.indexOf(request) >= 0) ? // checking to see of the swords array holds the sword being asked for, if it doesn't find it returns a -1
        this.swords.splice(this.swords.indexOf(request), 1)[0] : alert("No " + request + " baby");
    // if the sword is available we remove it from the array, take it out (if the 1 was 2 we would take it out and the next index)
    // since we get an array back (the sword), we'll access the zeroth index of that array and get the string 
    // splice method can remove elements anywhere in an array, by first passing in the index you'd like to start at, followed by how many times you want to remove, and returns those removed in their own array
};

var armoryIsOpen = true;
var isKnight = true;

var weapon = armoryIsOpen && isKnight && armory.retrieveSword("Katana");
console.log(weapon);
var weapon = armoryIsOpen && isKnight && armory.retrieveSword("Claymore");
console.log(weapon);