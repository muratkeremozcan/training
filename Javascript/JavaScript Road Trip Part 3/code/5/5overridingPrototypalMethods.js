var Tornado = function(category, affectedAreas, windGust) { // constructors can be function expressions too   , the alternative is:  function Tornado (category, affectedAreas, windGust)  
    this.category = category;
    this.affectedAreas = affectedAreas;
    this.windGust = windGust;
};
var cities = [
    ["Kansas City", 464310],
    ["Topeka", 127939],
    ["Lexena", 49398]
];
var twister = new Tornado("F5", cities, 220); // the NEW keywoard asks the constructor to build a new instance of Tornado
console.log(twister.valueOf());
// withoud overriding the cities property , the ouput just gives  " Array(3) "  for the value of cities.

// when overriding the property, we want to modify the Tornado prototype rather than teh Object prototype! We only want to change valueOf() for Tornado's, not all Objects
Tornado.prototype.valueOf = function() { // create a property calld valueOf, inside the Tornado prototype
    var sum = 0; // sum of people
    for (var i = 0; i < this.affectedAreas.length; i++) {
        sum += this.affectedAreas[i][1]; // each time we get to a new cell in the array, we add the number of people to our sum of people
    }
    return sum; // sum of people
};
console.log(twister.valueOf());

// if we add a new city to the cities array
cities.push(["Olante", 130045]);
console.log(twister.valueOf()); // since the cities array was passed by reference, we'll get an updated value each time an afected area is added to the list


// ANOTHER USEFUL PROTOTYPAL PROPERTY IS TOSTRING()
// override toString() method in our Tornado prototype
Tornado.prototype.toString = function() { // assign it a function
    var list = ""; // inside the function hold  a list of the affected areas in a string
    for (var i = 0; i < this.affectedAreas.length; i++) { // loop inside the the cities array
        if (i < this.affectedAreas.length - 1) { // if NOT at the end of the array
            list = list + this.affectedAreas[i][0] + ", "; // add the affected city to the string
        } else { // if at the last city
            list = list + "and " + this.affectedAreas[i][0];
        }
    }
    return "This tornado has been classified as an " + this.category + ", with wind gusts up to " + this.windGust + "mph. Affected areas are: " + list + ", potentially affecting a population of " + this.valueOf() + " . ";
};
alert(twister.toString());

// FINDING AND OBJECT'S CONSTRUCTOR AND PROTOTYPE
console.log(twister.constructor); // gives the entire constructor function back
console.log(twister.constructor.prototype); // gives the prototype object associated with that constructor
// remember that if a prototype object is defined for a specific class, it will always be a property of the class' constructor, which is just another function object
console.log(twister.__proto__); // gives as above

// HASOWNPROPERTY()  in the object prototype helps identify property location. Used for searching prototype chains for potential overriden properties 

// we will build the function directly on the Object prototype so that every object we ever make can use the function
Object.prototype.findOwnerOfProperty = function(propName) { // we want to find a specific property in an object's prototype chain
    var currentObject = this; // we'll start off looking for the property within the CALLING OBJECT (this) itself
    while (typeof(currentObject) != undefined) { // we keep searching for prototype chain until we've gone beyond the Object prototype, which has no prototype, trying to access it would produce null
        //There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
        if (currentObject.hasOwnProperty(propName)) { // checking if currentobject has own property
            return currentObject; // if  the currently examined object has the property, success! return that object
        } else {
            currentObject = currentObject.prototype; // THE CHILD IS SET TO PARENT otherwise, if the currently examined object does not include the property we're looking for,we proceed DOWN the prototype chain to find that property.   if we set the currently examined object to be the previously examined object's prototype we can do this
        }
    }
    return "no property found!"; // if the loop exits, it means we proceeded down to every prototype from  Object prototype down to eternity and didn't find it
};
alert(twister.findOwnerOfProperty("valueOf"));