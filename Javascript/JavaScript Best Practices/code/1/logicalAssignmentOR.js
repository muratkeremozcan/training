/*
var armory = {
    addSword: function(sword) { // our armory object will initially contain a function property for adding swords
        this.swords = this.swords ? this.swords : []; // if this.swords (swords property) currently exists, then the list it contains stays the same, if it doesn't exist we make an empty array, and pass it to the this.swords
        this.swords.push(sword); // we add new sword to our swords property/array
    }
};  
*/
// UsiNG LOGICAL ASSIGNMENT we can eliminiate a read of sword property
var armory = {
    addSword: function(sword) { // our armory object will initially contain a function property for adding swords
            this.swords = this.swords || []; // when used in assignment, the OR operator will try to select the first 'truthy value'
            this.swords.push(sword); // we add new sword to our swords property/array
        } // since OR operator takes the first truthy value, when using logical assignments, put the falsy value on the left
};

armory.addSword("Broadsword");
armory.addSword("Katana");
armory.addSword("Claymore");

console.log(armory.swords)

// OR Operator takes the FIRST TRUTHY VALUE it finds, that's why you want the first FALSY value on the LEFT
// number ex:   42 || undefined  => 42
// array ex:    ["sweet", "array"] || 0 => ["sweet", "array"] 
// object ex:   {type:"ring", stone:"diamond"} || ""  =>    {type:"ring", stone:"diamond"} 
// SWITCH PLACES, same thing. YOU WANT THE FALSY VALUE ON THE LEFT, so it looks at both
// number ex:   undefined || 42   => 42
// array ex:    0 || ["sweet", "array"]  => ["sweet", "array"] 
// object ex:   "" || {type:"ring", stone:"diamond"}  =>   {type:"ring", stone:"diamond"} 

// AND Operator takes the  FIRST FALSY VALUE it finds, that's why you want the FALSY VALUE ON THE RIGHT, so it looks at both
// number ex:   42 && undefined  => undefined
// array ex:    ["sweet", "array"] && 0 =>  0 
// object ex:   {type:"ring", stone:"diamond"} && ""  =>  ""
// SWITCH
// number ex:   undefined && 42   => undefined
// array ex:    0 && ["sweet", "array"]  =>  0 
// object ex:   "" && {type:"ring", stone:"diamond"} =>  ""

// AND OPERATOR: when BOTH ARE TRUTHY, it RETURNS THE LAST ONE
// "King" && "Arthur" => "Arthur"
// "Arthur" && "King" => "King"
// OR OPERATOR: when BOTH ARE TRUTHY, or RETURNS THE FIRST
// "King" || "Arthur" => "King"
// "Arthur" || "King" => "Arthur"

// AND OPERATOR:  when BOTH ARE FALSY, it RETURNS THE FIRST ONE
// undefined && "" => undefined
// "" && undefined => ""
// OR OPERATOR: when BOTH ARE FALSY, it RETURNS THE LAST ONE
// undefined || "" => ""
// "" || undefined => undefined