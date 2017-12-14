console.log(0.1 + 0.2); // gives 0.300000000000004
console.log(0.1 + 0.2 + 0.3); //gives 0.6000000000001
// how do you work around it?

var num = 0.1 + 0.2;
console.log(num.toFixed(1)); // fix the result to 1 decimal place
// to fixed will round to the last indicated position, can take care of %
function tax(price, percent) {
    return (price * percent / 100).toFixed(2);
}
console.log(tax(9.85, 7.5)); // gives .73875 but toFixed rounds it
// but the result is string, how do we use it as a number?
var mailedGlove = 9.85;
var armorTax = 7.5;
var total = mailedGlove + tax(mailedGlove, armorTax); // gives 9.850.74, concatonates!
console.log(total);
// what we need is PARSEFLOAT(), turns strings with decimals into numbers
function taxPF(price, percent) {
    return parseFloat((price * percent / 100).toFixed(2));
}
var totalPF = mailedGlove + taxPF(mailedGlove, armorTax); // gives 10.59
console.log(totalPF);

// PARSEINT() instead turns the first available integer in front of a string into numbers
console.log(parseInt("9.85"));
console.log(parseInt("021", 8)); // parseInt in modular 8, or anything
console.log(parseInt("021", 16)); // parseInt in modular 16, or anything

// testing for number presense before operations
console.log(typeof NaN); // gives "number" . So when checking NaN, won't give you NaN   
console.log(NaN === NaN); // gives false. 
console.log(isNaN("42")); // gives false , because it's a string. This method looks strictly for the JS value NaN itself. The only time it's true is when it's isNaN(NaN)
console.log(isNaN(NaN)); // this is the only time isNaN returns true
// for this reason you have to do both these checks
function isThisActuallyANumber(data) {
    return (typeof data === "number" && !isNaN(data)); // is the type of data a number AND is the data not NOT (double positive) a number
} // first part makes sure it's a number or NaN, second part makes sure it's not NaN
console.log("\n");
console.log(isThisActuallyANumber(506)); //true
console.log(isThisActuallyANumber("506")); // false
console.log(isThisActuallyANumber(NaN)); // false!