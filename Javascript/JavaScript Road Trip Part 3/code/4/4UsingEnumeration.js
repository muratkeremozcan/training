var aquarium = { // a big object literal
    Nemo: { type: "fish", species: "clownfish", length: 3.7 },
    Marlin: { type: "fish", species: "clownfish", length: 4.1 },
    Dory: { type: "fish", species: "blue tang", length: 6.2 },
    Peach: { type: "echinoderm", species: "starfish", length: 5.3 },
    "Coral Castle": { type: "environment", material: "coquina", moves: false },
    "Dragon Statue": { type: "environment", material: "plastic", moves: false },
    // properties can also be FUNCTIONS => METHOD. This is how we build a function inside an object literal
    addCritter: function(name, type, species, length) {
        this[name] = { type: type, species: species, length: length }; // hey aquarium, make a new property called name, assign to it a new object with these properties
    },
    takeout: function(name) {
        this[name].name = name; // the first name finds the object in the aquarium, the 2nd (dot)name will create a new property IN the object we want to remove, the 3rd name assigns the old property name to the newly created name property in the removed object  
        var temp = this[name]; // temp variable will help us hold on to the objet that we remove. This way we'll still have access to it outside the aquarium
        // this[name] is basically aquarium and the name of the property we're passing in
        delete this[name]; // delete it
        return temp; // so we have access to the deleted element
    }
};
/*
var numFish = 0; //counter 
for (key in aquarium) { // the in keywoard looks for each enumerable property in the object aquarium, like accessing each cell of an array
    console.log(key); // no need to use the word "key" , could be anything
    if (aquarium[key].type == "fish") { // if the current key we are on has a type that is fish
        numFish++;
    }
}
console.log(numFish);
*/
// we can make it into a function

aquarium.countFish = function() {
    var numFish = 0; //counter 
    // since countfish is owned by aquarium, we use 'this'  instead of 'aquarium'
    for (key in this) { // the in keywoard looks for each enumerable property in the object aquarium, like accessing each cell of an array
        if (this[key].type == "fish") { // if the current key we are on has a type that is fish
            numFish++;
        }
    }
    console.log(numFish);
    return numFish;
}
aquarium.countFish();

var takeOutDory = aquarium.takeout("Dory"); // take out Dory 
aquarium.countFish();