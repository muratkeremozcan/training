var isArthur = true;
var isKing = false;
var isArcher = true;
var weapon;
var helmet;

// multiple statements within a ternary response are grouped in () and seperated by ,
// these can be NESTED . Kind of like binary tree
isArthur && isKing ? (weapon = "Excalibur", helmet = "Goosewhite") : // first check if Arthur && King
    isArcher ? (weapon = "Longbow", helmet = "Mail Helm") : // if not Arthur && King, check if Archer or not archer
    (weapon = "Longsword", helmet = "IronHelm");

console.log("Current weapon: " + weapon + "\nCurrent helmet: " + helmet);