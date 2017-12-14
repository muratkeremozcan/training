// you can increase performance with using comma var 
var list = document.getElementById("kotwList"), // grab the list element from html, assign it to list
    kotw = ["Jenna Ragespike", "Neric Farthing", "Darkin Stonefield"], // create a list for the knights of the week
    // you can use a DOCUMENT FRAGMENT  to insert additions all at once. Fragments are invisible containers that hold multiple DOM elements without being a node itself
    fragment = document.createDocumentFragment(), // we create a fragment which will function as a staging area to hold all of our new li elements
    element; // declare element here so that it doesn't have to keep declaring while looping 

for (var i = 0, x = kotw.length; i < x; i++) { // loop through all the knights of the week
    element = document.createElement("li"); // for each element, create a list item 
    element.appendChild(document.createTextNode(kotw[i])); // add a text node with that knight's name to the element
    fragment.appendChild(element); // add each new li element to the staging fragment, instead of the document itself
}
list.appendChild(fragment); // finally add the fragment that contains our elements, to the document -> we are touching the DOM ONE TIME