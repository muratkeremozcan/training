var booksArray = ["Great Expectations", "The Remains of the Day", "Peter Pan"]; // we can initialize the property with a variable

// curly brackets say to make a new object, wat's inside are the propertiesof that object
var myBox = {
    height: 6,
    width: 8,
    length: 10,
    volume: 480,
    material: "cardboard",
    //   contents: ["Great Expectations", "The Remains of the Day", "Peter Pan"]
    contents: booksArray, // we can initialize the property with a variable
    "# of books": 0
};

console.log(myBox.width); // calling a property

//change a property
myBox.width = 12;
console.log(myBox.width);
myBox.volume = myBox.length * myBox.width * myBox.height;
console.log(myBox.volume);
// a 2nd way of accessing properties
console.log(myBox["volume"]);

// add to the array
myBox.contents.push("On The Road"); // since we're referring to booksArray pushing to myBox.contents will just modify booksArray
console.log(myBox.contents);
console.log(booksArray); // same result as above

// you can add properties to an object literal!
myBox.weight = 24;
myBox.destination1 = "Orlando";
myBox.destination2 = "Miami";
// a 2nd way to add properties
myBox["# of stops"] = 2;
console.log(myBox);

// BRACKETS TAKE EXPRESSIONS, THAT'S WHY THEY'RE IMPORTANT!
for (var i = 1; i <= myBox["# of stops"]; i++) {
    console.log(myBox["destination" + i]); // we can place string-based expression in the brackets to construct specific property names
}

// Delete command returns true after checking if that propety was deleted. If it never existed (deleting something that never existed) it still returns true
delete myBox.contents; // deleting the property reference, but not the actual array it was referencing
console.log(booksArray);
console.log(myBox);


// a function that creates book objects and adds them to our box
console.log(myBox["# of books"] = 0);

function addBook(box, name, writer) {
    box["# of books"]++; // each time we add a book, increment the "# of books" - must use brackets because it's in quotes
    box["book" + box["# of books"]] = { title: name, author: writer }; // on the left side add a book with box["book"], concatonate with #of books, to say this is book x.
    // to that property we assign: we make it another object literal with its own properties
}

// now we can add books with the function!
addBook(myBox, "Great Expectations", "Charles Dickens");
addBook(myBox, "The Lord of the Rings", "JRR Tolkien");
console.log(myBox);

// referencing objects withing objects
console.log(myBox.book1.title);
console.log(myBox["book2"]["author"]);