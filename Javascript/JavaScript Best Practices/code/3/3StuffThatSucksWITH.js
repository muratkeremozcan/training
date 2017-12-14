// WITH keyword is unreliable
var castle = { // an object
    soldiers: 866,
    capacity: 3000,
    keep: {
        soldiers: 19,
        capacity: 40,
        drawbridge: {
            soldiers: 8, // --> IT'S THIS ONE
            capacity: 20,
            open: function() {
                alert("rrrrrrBANG!");
            }
        }
    }
};
var reinforcements = 12;
// JUST DON'T USE WITH
with(castle.keep.drawbridge) { // do operations WITH the name of this data container (drawbridge) as the header syntax in each piece of data
    open(); // no object name is necessary when everythign in the object is treated as already local to the with block
    soldiers += reinforcements; // PROBLEM WITH WITH, WHICH SOLDIERS IS THIS? 866, 19 OR 8? HARD TO READ
    alert("drawbridge soldiers " + soldiers);
}

// INSTEAD JUST USE CACHED VARIABLES
var o = castle.keep.drawbridge;
o.open();
alert("This is how many soldiers " + o.soldiers);