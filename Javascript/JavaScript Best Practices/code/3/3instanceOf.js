// what if we need to verify an object's class?
// instanceof operator is used to examine the type of object that your code is using
// InstanceOf helps in TYPE-CHECKING AN INSTANCE OF A CLASS created by “new” keyword.

function Armor(location) { //an armor constructor
    this.location = location;
}
Armor.prototype = {
    putOn: function() { // any armor anywhere can call the putOn function 
        alert("Your armor is on.");
    }
}; // Armor prototype will become the parent prototype for LeatherArmor and ChainMail

function LeatherArmor(bodyStyle, numBuckles, numSpaulders) { //constructor for LeatherArmor
    this.bodyStyle = bodyStyle;
    this.numBuckles = numBuckles;
    this.numSpaulders = numSpaulders;
} // OBJECT.CREATE takes in a prototype upon which to base the newly created object
LeatherArmor.prototype = Object.create(Armor.prototype); // create an object of the specified Armor prototype.

function ChainMail(metal, linkDiameter, hashHood, skirtLength) { //constructor for ChainMail
    this.metal = metal;
    this.linkDiameter = linkDiameter;
    this.hashHood = hashHood;
    this.skirtLength = skirtLength;
} // OBJECT.CREATE takes in a prototype upon which to base the newly created object
ChainMail.prototype = Object.create(Armor.prototype); // create an object of the specified Armor prototype.

function assignKnightsArmor(knights, armorAvail) { // pass in both lists
    var x = knights.length;
    var y = armorAvail.length;
    for (var i = 0; i < x; i++) { // loop through all knights
        for (var j = 0; j < y; j++) { // loop through all the armors
            if (armorAvail[j] instanceof ChainMail) { // is the armor of type/instanceof ChainMail class
                // assign a new armor property to the knight being looked at
                knights[i].armor = armorAvail.splice(j, 1)[0]; // if it is Chainmail, we splice it out of the armor array and give it to the Knight
                y--; // since we modified the armor array, we adjust our cached length
                break; // since the current Knight has some armor now, we can break out of the inner most for loop
            }
        }
    }
}
// InstanceOf helps in TYPE-CHECKING AN INSTANCE OF A CLASS created by “new” keyword.
var armorList = [new LeatherArmor("tight", 55, 2), new ChainMail("metal", 2, true, 36),
    new LeatherArmor("bodyStyle", "numBuckles", "numSpaulders"), new ChainMail("metal", "linkDiameter", "hashHood", "skirtLength")
]; // list of armor
var newbs = ["Knight1", "Knight2", "Knight3"]; // list of knights

assignKnightsArmor(newbs, armorList);
console.log(armorList);
console.log(newbs);

var kingsMail = new ChainMail("gold", 2, true, 40); // instantiate a variable of type ChainMail with the passed in values
console.log(kingsMail);
console.log(kingsMail instanceof Armor); // is kingsMail variable an instance of Armor?
console.log(kingsMail instanceof ChainMail); // is kingsMail variable an instance of ChainMail?
console.log(kingsMail instanceof LeatherArmor); // is kingsMail variable an instance of LeatherArmor?