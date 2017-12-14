/*
var list = ["Jar Treen", "Maximo Rarter", "Pol Grist"], // list of guys in hall of fame
    hof = document.getElementById("hof"), // we want to add them to the unordered list with id hof
    fragment = document.createDocumentFragment(), // best practice to touch the DOM as little as possible
    element; // will be used to add a list item

function displayHOF() { // what if instead of displaying them immediately, it provided a function? The list is gone!
    for (var i = 0, x = list.length; i < x; i++) { // go through the list of guys
        element = document.createElement("li"); // for each guy create a list item 
        element.appendChild(document.createTextNode(list[i])); // create a node for the guy, add it to the bottom
        fragment.appendChild(element);
    }
    hof.appendChild(fragment);
} */

// the namespace concept can limit global impact and provide data protection
// this way the variables and all the functions are ENCAPSULATED withing the HOFMASTER namespace
var HOFMASTER = { // by convention a namespace is capitalized entirely
    // all the variables now become properties of the namespace
    list: ["Jar Treen", "Maximo Rarter", "Pol Grist"], // list of guys in hall of fame
    hof: document.getElementById("hof"), // we want to add them to the unordered list with id hof
    fragment: document.createDocumentFragment(), // best practice to touch the DOM as little as possible
    element: undefined, // will be used to add a list item

    // displayHOF function will also beling to the HOFMASTER namespace, we'll need to reference the calling objet on all the needed variables using 'this'
    displayHOF: function() { // what if instead of displaying them immediately, it provided a function? The list is gone!
        for (var i = 0, x = this.list.length; i < x; i++) { // go through the list of guys
            this.element = document.createElement("li"); // for each guy create a list item 
            this.element.appendChild(document.createTextNode(this.list[i])); // create a node for the guy, add it to the bottom
            this.fragment.appendChild(this.element);
        }
        this.hof.appendChild(this.fragment);
    }
};