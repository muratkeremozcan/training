// too long
/*
let users = ["Sam", "Tyler", "Brook"];
let a = users[1];
let b = users[2];
let c = users[3];
*/
// ARRAY DESTRUCTURING
let users = ["Sam", "Tyler", "Brook"];
let [a, b, c] = users; // less code
console.log(a, b, c);
// you can discard values you don't want
let [x, y] = users;
console.log(x, y);
// ARRAY DESTRUCTURING with REST PARAMETERS
let users2 = ["Sam", "Tyler", "Brook"];
let [first, ...rest] = users2;
console.log(first, rest);
// ARRAY DESTRUCTURING when RETURNING ARRAYS FROM FUNCTIONS
function activeUsers() {
    let users = ["Sam", "Alex", "Brook"];
    return users;
} // you can return the array (regular order of business)
let active = activeUsers();
console.log(active);
// but now you can also assign the return to INDIVIDUAL VARIABLES
let [m, u, r] = activeUsers();
console.log(m, u, r);

// FOR OF loop
// iterates over property values and it's a better way to loop over arrays
console.log('FOR OF loop');
// the old way
/*
let names = ["Sam", "Tyler", "Brook"];
for (let index in names) {  // uses index to read actual element
    console.log(names[index]);
}
*/
let names = ["Sam", "Tyler", "Brook"];
console.log(typeof names[Symbol.iterator]); // THIS IS HOW YOU CHECK IF YOU CAN USE FOR OF WITH THE OBJECT YOU'RE LOOPING THROUGH. Gives 'function' if good, 'undefined' if no good
for (let name of names) { // reads element directly and with less code involved
    console.log(name);
}

// ARRAY FIND
// returns the first element in the array that statisfies a provided testing function  
console.log('ARRAY FIND');
let users3 = [
    { login: "Sam", admin: false },
    { login: "Brook", admin: true },
    { login: "Tyler", admin: true }
]; // how can we find admin?
let admin = users3.find((user3) => { // arrow functions, because it reads nicer. user3 any of the array objects
    return user3.admin; // will return the first array object for which admin is true
});
// can also do this one liner
// let admin = users3.find(user3 => user3.admin);
console.log(admin);