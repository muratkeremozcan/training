// Removing repetition from creating objects

function buildUser(first, last) {
    let fullName = first + " " + last;
    return { // returning an object with the 3 properties
        //IF THEY HAVE THE SAME NAME, we can remove DUPLICATE VARIABLE NAMES
        //first: first,
        //last: last,
        //fullName: fullName
        first,
        last,
        fullName
    };
}

let user = buildUser("murat", "ozcan");
console.log(user.fullName);
console.log(user.first);
console.log(user.last);

// OBJECT INITIALIZER
// USED TO ASSIGN FROM VARIABLE TO OBJECT PROPERTIES
let name = "Sam";
let age = 45;
let friends = ["Brook", "Tyler"];

let user2 = { name, age, friends }; // define an object with the 3 variables
// let user2 = { name: name, age: age, friends: friends};  // the old syntax
console.log(user2.name);
console.log(user2.age);
console.log(user2.friends);

// reading properties from objects 
// no need to repeat like this
//let user3 = buildUser("murat", "ozcan");
//let first = user3.first;
//let last = user3.last;
//let fullName = user3.fullName
//OBJECT DESTRUCTURING
//READ FROM OBJECT PROPERTIES AND ASSIGN TO VARIABLES
let { first, last } = buildUser("murat", "ozcan");
console.log(first);
console.log(last);
// let { first, last, fullName } // you can do it all
// you can select specific properties to destructure
let { fullName } = buildUser("John", "Doe");
console.log(fullName);

// ADDING A FUNCTION TO AN OBJECT
// previously adding a function to an object required specifying the property name then the full function definition 
/*
function buildUser2(first, last, postCount) {
    let fullName = first + " " + last;
    const ACTIVE_POST_COUNT = 10;
    return {    // the return object
        first,
        last,
        fullName,
        isActive: function() {  // returning a method called isActive. An anonymous function is assigned to an object property 'isAcrtive 
            return postCount >= ACTIVE_POST_COUNT;
        }
    }
}
*/
// now you can make it shorter
function buildUser2(first, last, postCount) {
    let fullName = first + " " + last;
    const ACTIVE_POST_COUNT = 10;
    return { // the return object
        first,
        last,
        fullName, // THE FUNCTION KEYWORD IS NO LONGER NECESSARY 
        isActive() { // returning a method called isActive.  
            return postCount >= ACTIVE_POST_COUNT;
        }
    };
}
// TEMPLATE STRINGS : it's like TEDESO
function buildUser2TemplateStrings(first, last, postCount) {
    let fullName = `${first} ${last}`;
    const ACTIVE_POST_COUNT = 10;
    return { // the return object
        first,
        last,
        fullName, // THE FUNCTION KEYWORD IS NO LONGER NECESSARY 
        isActive() { // returning a method called isActive.  
            return postCount >= ACTIVE_POST_COUNT;
        }
    };
}
// template strings offer a better way to write MULTI-LINE STRINGS
let userName3 = "Sam";
let admin = { fullName: "Alex Williams" };
let veryLongText = `Hi ${userName3},

this is a very 
ver

veeeery
long text.

Regards,
${admin.fullName}`;

console.log(veryLongText);