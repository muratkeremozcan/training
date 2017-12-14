var reqs = ["Cool Kid", "Slayed a dragonn", "Good at swording"], // list of requried qualities
    list = document.getElementById("reqs"), // we want to add them to the unordered list with id reqs
    // the existing list in the HallOfFame file gets overwritten due to hoisting
    fragment = document.createDocumentFragment(), // best practice to touch the DOM as little as possible
    element; // will be used to add a list item
for (var i = 0, x = reqs.length; i < x; i++) { // go through the list of requirements
    element = document.createElement("li"); // for each requirement create a list item 
    element.appendChild(document.createTextNode(reqs[i])); // createa node for the requirement, append
    fragment.appendChild(element); // append in the fragment
} // 
list.appendChild(fragment);