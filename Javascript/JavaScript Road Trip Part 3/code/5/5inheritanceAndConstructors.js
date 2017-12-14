var shoe = { size: undefined, gender: undefined, construction: undefined }; // set these to undefined to make it generic

// using inheritance, we can create new objects with our existing objects as prototypes
var magicShoe = Object.create(shoe); // what you pass in to the create method will be the prototype for the new object

console.log(Object.prototype.isPrototypeOf(shoe)); // is shoe a prototype of Object property? (true)
console.log(magicShoe.isPrototypeOf(shoe)); // is shoe a prototype of magicShoe? (false)
console.log(shoe.isPrototypeOf(magicShoe)); // is magicShoe a prototype of shoe? (true)
console.log(Object.prototype.isPrototypeOf(magicShoe)); // is magicShoe a prototype of Object property? (yes, goes 2 levels up)

// add new properties to the new object
magicShoe.jewels = "ruby";
magicShoe.travelAction = "click heels";
magicShoe.actionsRequired = 3;

console.log(magicShoe); // all the new properties have been added! */
console.log(shoe); // the Object magicShoe inherited all its properties from shoe

// THIS TAKES TOO LONG, BETTER TO MAKE A CLASS
var mensBoot = Object.create(shoe);
mensBoot.size = 12;
mensBoot.gender = "men";
mensBoot.construction = "boot";
console.log(mensBoot);

var flipFlop = Object.create(shoe);
flipFlop.size = 5;
flipFlop.gender = "women";
flipFlop.construction = "flipflop";