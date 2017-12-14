// in JS, you define a class as a function
function Shoe(shoeSize, shoeColor, forGender, constructStyle) { // CAPITALIZING A FUNCTION'S NAME DISTINGUES IT AS A MAKER OF AN ENTIRE CLASS OF OBJECTS, A CONSTRUCTOR
    // the CONSTRUCTOR will construct a new instance of a shoe with these properties  
    this.size = shoeSize;
    this.color = shoeColor;
    this.gender = forGender;
    this.construction = constructStyle; // THIS keyword inside a constructor will  refer to the new instance of the class that is being made

    // since functions do not change between instances of Shoe, we should put them in a Shoe prototype so that they're stored in only one location that all Shoes can access
    // this.putOn = function() { alert("Shoe's on!"); }; // functions (right) assigned as  function expressions (left)
    // this.takeOff = function() { alert("Uh, what's that smell?"); };
} // we are going to build a new secret Object within the constructor (constuctor function) 's prototype property. 
// this will tell every instance of Shoe to inherit from this Object
// every time we call .prototype  (Array.prototype, String.prototype, Objec.prototype) we called it as a property of a class' constructor
Shoe.prototype = { // we build 2 properties. Just like building Object literal, we set each function as a PROPETY in the Prototype Object
    putOn: function() { alert("Your " + this.construction + " is on!"); }, // properties can also be FUNCTIONS => METHOD. This is how we build a function inside an object literal
    takeOff: function() { alert("Phey! Somebody's size " + this.size + "'s are fragnant"); }
};


var beachShoe = new Shoe(10, "blue", "women", "flipflop"); // the NEW keywoard asks the constructor to build a new instance of a Shoe
console.log(beachShoe); // lists all the properties/attributes of the beachShoe instance of the shoe object
beachShoe.putOn(); // functions/operations of the beachShoe instance of the Shoe object
beachShoe.takeOff();

console.log(beachShoe.gender); // complier looks in the beachShoe object, get the specific value givent o the constructor when beachShoe was cretead
beachShoe.takeOff(); //complier looks in beachShoe object, finds nothing, then looks at the prototype, finds
beachShoe.hasOwnProperty("construction"); // neither beachShoe nor the Shoe prototype has a property called hasOwnProperty, so the compiler proceeds up and gets it from Object prototype