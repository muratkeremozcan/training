function countE() {
    var phrase = prompt("Which phrase would you like to examine?");
    if (typeof phrase != "string") { //if a string is not entered, return false and exit the function
        alert("That's not a valid entry!");
        return false;
    } else {
        var eCount = 0; //initialize the counter
        for (var index = 0; index < phrase.length; index++) { // while the index of the phrase is lett than its length (0 to max length) keep looping
            if (phrase.charAt(index) == "E" || phrase.charAt(index) == "e") // if the character is a lower or uppercase e, increment it
                eCount++;
        }
        alert("There are " + eCount + " E's in \"" + phrase + "\".");
        return true;
    }


}

countE();