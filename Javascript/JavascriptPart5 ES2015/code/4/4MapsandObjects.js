// MAP data structure : key+value pairs
// JS issue with maps: its keys are converted to strings

let user1 = { name: "Sam" }; // two different objects (keys)
let user2 = { mame: 'Tyler' };
/*
let totalReplies = {};
totalReplies[user1] = 5; // keys set to two different values
totalReplies[user2] = 42;
// the below  happens because JS objects are converted to the string [object Object]
console.log(totalReplies[user1]); // key1 is set to value 5, key2 set to value 42 
console.log(totalReplies[user2]); //  but both give 42!
console.log(Object.keys(totalReplies)); // the keys of totalReplies  gives [object Object]
*/
// SOLUTION: USE MAP! objects are not converted to strings with MAP
console.log("MAP")
let totalReplies = new Map();
totalReplies.set(user1, 5); //set  takes key and a value
totalReplies.set(user2, 42);
console.log(totalReplies.get(user1)); // get keys
console.log(totalReplies.get(user2));
// MAPS AND FOR OF, WITH ARRAY DESTRUCTURING
console.log("MAPS AND FOR OF, WITH ARRAY DESTRUCTURING");
let mapSettings = new Map();
mapSettings.set("user", "Sam");
mapSettings.set("topic", "ES2015");
mapSettings.set("replies", ["Can't wait", "So Cool"]);
for (let [key, value] of mapSettings) {
    console.log(`${key}=${value}`);
}
// WEAK MAP
// only objects can be passed as keys . Primitive datatypes (strings, numbers, booleans) are not allowed
console.log("WEAK MAP");
let user = {}; // empty objects
let comment = {};
let weakMapSettings = new WeakMap();
weakMapSettings.set(user, "user");
weakMapSettings.set(comment, "comment");
console.log(weakMapSettings.get(user));
console.log(weakMapSettings.get(comment));
// other available methods in WeakMap()
console.log(weakMapSettings.has(user)); // does it have the key user? true
console.log(weakMapSettings.delete(comment)); // delete 'comment'
console.log(weakMapSettings.get(comment)); // will show udnefineed

// YOU CAN'T USE WEAK MAP WITH FOR OF 

// WEAKMAPS ARE BETTER WITH MEMORY : individual entries in a WeakMap can be garbage collected while the WeakMap itself still exists
console.log("WEAK MAP and MEMORY");
let user5 = {};
let userStatus = new WeakMap();
userStatus.set(user5, "logged");