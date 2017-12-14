var isArthur = true;
var isKing = true;
var weapon;
var helmet;

// multiple statements within a ternary response are grouped in () and seperated by ,
isArthur && isKing ? (weapon = "Excalibur", helmet = "Goosewhite") :
    (weapon = "Longsword", helmet = "IronHelm");
console.log("Current weapon: " + weapon + "\nCurrent helmet: " + helmet);