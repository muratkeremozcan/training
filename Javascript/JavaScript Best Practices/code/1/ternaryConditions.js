var isArthur = true;
var isKing = true;
// var weapon;    // Ternary condition allowed this to be on one line
/*
if (isArthur) {
    weapon = "Excalibur";
} else {
    weapon = "Longsword";
} */
////////////////////////////////////////////////////////////////////////////////////////////////
// TERNARY CONDITION (to make it faster)    :  someCondition ? pickThisIfTrue : pickThisIfFalse;

//var weapon = isArthur ? "Excalibur" : "LongSword"; // add var weapon assignment later
//console.log("Current weapon is " + weapon);
// CAN REDUCE TO EVEN 1 line

console.log("Current weapon is " + (isArthur && isKing ? "Excalibur" : "LongSword"));
// ternaries can take action
isArthur && isKing ? alert("Hail Arthur, King of the Britons") : alert("Charge on ye Knight, for the glory of the King!");
// ternaries can have a function expression
isArthur && isKing ? function() {
        alert("Function: Hail Arthur, King of the Britons!");
        console.log("Function: Current weapon is Excalubir");
    }() : // remember that if you want to get an immediately invoked function expression, you need to add the () behind that expression to call that expression
    function() {
        alert("Function: Charge on ye Knight, for the glory of the King!");
        console.log("Function: Current weapon is Longsword");
    }(); // remember that if you want to get an immediately invoked function expression, you need to add the () behind that expression to call that expression