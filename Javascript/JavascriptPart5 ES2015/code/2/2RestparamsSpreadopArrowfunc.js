//////////////////////////////////////////////////
// Lesson 2.1
// issues with arguments object
// the arguments object is an array-like object that corresponds to the arguments of a function
// relying on this object to read arguments is not ideal
function displayTagsWithArguments() { // this is a VARIADIC function, can accept any number of arguments
    for (let i in arguments) { // issue 1: we can't tell what arguments it takes
        let tag = arguments[i]; // issue 2: if we change the function signature, the function breaks
        console.log(tag);
    }
}
displayTagsWithArguments("songs", "lyrics");
// to solve this issue we use REST PARAMETERS: allows us to represent an indefineate number of arguments as an Array. This way, changes to a function signature are less likey to break the code.
function displayTagsWithRestParameters(...tags) { // the 3 dots are a part of the syntax
    for (let i in tags) { // the for loop is not afected by changes to the function signaure
        let tag = tags[i]; // rest parameters should always be last 
        console.log(tag);
    }
}
displayTagsWithRestParameters("songs murat ", "lyrics murat");
//////////////////////////////////////////////////
// SPREAD OPERATOR 
// another issue: splitting arrays into individual arguments: how can we convert arrays into individual elements on a function call?
// We need a way to convert an Array into individual arguments upon a function call.
/* // don't know what's in GETREQUEST, CAN'T MAKE THIS WORK, commenting out
getRequest("/topics/17/tags", function() {
    let tags = data.tags; // tags is an Array, e.g., ["programming", "web", "HTML"] ...
    displayTagsWithRestParameters(tags); // but displayTags expects to be called with individual arguments
});
getRequest("/topics/17/tags", function() {
    // The displayTags function is now receiving individual arguments, 
    // not an Array
    let tags = data.tags;
    displayTagsWithRestParameters(...tags);
});
*/
// REST PARAMETER:  used in function definition
// SPREAD OPERATOR: used in function invocation 
// basically the same shit being called different things based on how you use it...?? A dildo is a dildo, is a dildo. Geez.
// HERE'S A SIMPLE FUCKING EXAMPLE, WOOOPTIDOO, GIVE AN EXAMPLE OF SOMETHING THAT WORKS FFS
var tags = ["topics", "17", "tags"]
displayTagsWithRestParameters(...tags);

//////////////////////////////////////////////
// ARROW FUNCTIONS
// JavaSript objects can help us with the encapsulation, organization and testability of our code
// and the prototype below uses ARROW FUNCTION to preserve scope. Arrow functions bind the scope of where they are defined, not where they are used (lexical binding)
// HERE IS THE SIMPLE F'IN DEFINITION
// when you have functions inside a function inside a function inside a prototype, 'this' keyword gets confusing
// which one does it belong to? MATRYOSHA DOLL problem. Arrow function links all this together. 
/* couldn't make this crap work, ffs give examples of working code. No work => no understand
function TagComponent(target, urlPath) {
    this.targetElement = target;
    this.urlPath = urlPath;
}
TagComponent.prototype.render = function() {
    // Arrow functions bind to the scope of where they are defined, not where they are called. (also known as lexical binding)
    getRequest(this.urlPath, (data) => {
        let tags = data.tags;
        // this now properly refers to the TagComponent object
        displayTagsWithRestParameters(this.targetElement, ...tags);
    });
}; */
// HERE'S MY OWN SUPER DOPE EXAMPLE. I KNOW THIS BETTER THAN YOU, stupid carlos or whtever the f you are...
// old way  (won't work without let that = this)
// MATRYOSHA functions:   startGame -> addLives -> setTimeout
function startGame() {
    this.lives = 0;
    // they used to insert here :  let that = this;    - and that made it work. But it's crap  also at the below comment you'd call ++that.lives  . It's shitty so don't even bother understanding it
    this.addLives = function() {
        this.oneUp = setTimeout(function() {
            console.log(++this.lives + " life for Mario!"); // here it's referring to setTimeout , but setTimeout doesn't have a lives property so  THIS WON't WORK
        });
    };
}
var mario = new startGame();
mario.addLives(); // gives NaN
// THE MAGIC OF ARROW FUNCTION
function startGame2() {
    this.lives = 0;
    this.addLives = () => {
        this.oneUp = setTimeout(() => {
            console.log(++this.lives + " life for Luigi!"); // here this is referring to the this owned by the mother function BECAUSE WE ESTABLISHED THE MATRYOSHA CHAIN!
        });
    };
}
var luigi = new startGame2();
luigi.addLives();