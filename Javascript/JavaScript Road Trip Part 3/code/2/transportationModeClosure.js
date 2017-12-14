function buildCoveTicketMaker(transport) {
    var passengerNumber = 0; // this is a local variable for the function, but you will see that the closure (the inner function) can modify it!
    return function(name) {
        passengerNumber++; // the inner function is modifying the outer functions local variable! any time a ticketmaker is called (submarine, battleship, seagull) we increment the passenger
        alert("Here is your transportation ticket via the " + transport + ".\n" + "Welcome to the Cold Closure Cove, " + name + "!" + "\nYou are passenger # " + passengerNumber + ".");
    }
}
// a closure is mostly used to make the creation of very similar functions very efficient, kind of like an interface
var getSubmarineTicket = buildCoveTicketMaker("Submarine");
var getBattleshipTicket = buildCoveTicketMaker("Battleship");
var getGiantSeagullTicket = buildCoveTicketMaker("Giant Seagull");
// once we assign the result of the function to a variable, what gets returned is the INNER FUNCTION

console.log(getSubmarineTicket); // the output for this is the innerfunction!
console.log(getSubmarineTicket()); // the variable STARTS ACTING LIKE THE INNER FUNCTION
console.log(getSubmarineTicket("Mario")); // since the variables start acting like the inner function, you can pass in the variables expected by the inner function
console.log(getSubmarineTicket("murat")); // the closure  (variable/function) gets called a second time and the incremented ticket number is displayed
console.log(getBattleshipTicket("Luigi"));
console.log(getGiantSeagullTicket("Bowser"));