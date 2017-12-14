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
    }
};

/*
function addCritter(container, name, type, species, length) {
    container[name] = { type: type, species: species, length: length };
}

function addToy(container, name, type, material, moves) {
    container[name] = { type: type, material: material, moves: moves };
}
*/

aquarium.addCritter("Bubbles", "fish", "yellow tang", 5.6);
console.log(aquarium);

// let's build a function on the fly, using a dot operator and a function expression. All we need to delete any property is its name
aquarium.takeout = function(name) {
    // if you don't have this next line, you don't get Marlin's name in the output, must its type and species and length
    this[name].name = name; // the first name finds the object in the aquarium, the 2nd (dot)name will create a new property IN the object we want to remove, the 3rd name assigns the old property name to the newly created name property in the removed object  

    var temp = this[name]; // temp variable will help us hold on to the objet that we remove. This way we'll still have access to it outside the aquarium
    // this[name] is basically aquarium and the name of the property we're passing in
    delete this[name]; // delete it
    return temp; // so we have access to the deleted element
};

var fishOutOfWater = aquarium.takeout("Marlin"); // 
console.log(aquarium);
console.log(fishOutOfWater);

var toy = aquarium.takeout("Dragon Statue");
console.log(aquarium);
console.log(toy);