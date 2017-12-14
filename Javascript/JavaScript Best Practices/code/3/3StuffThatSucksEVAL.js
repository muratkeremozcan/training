// eval keywoard can effect legibility, ability to debug and performance
/*
function assignRegimentMotto(number, motto) {
    eval("regiment" + number + ".motto = '" + motto + "'");
} // eval method takes all the pieces of the string and puts them together into 1 string

// assignRegimentMotto(2, "The Best of the Best");
// regiment2.motto = 'The Best of the Best'

// assignRegimentMotto(1, "The King's Own"); // what if there was an appostrophe
// regiment1.motto = "The King's"   // the resulting code will be invalid because the extra apostrophe  which makes the compiler think the string is complete
*/

// instead of eval , use data structures like arrays
var regiments = ["regiment1", "regiment2"]; // no need to number the variable name if your objects are already in order
function assignRegimentMotto(number, motto) {
    regiments[number].motto = motto; // instead of eval, use the associate nature of the array
}