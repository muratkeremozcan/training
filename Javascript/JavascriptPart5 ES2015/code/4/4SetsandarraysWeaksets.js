// limitation with arrays : duplicate entries are allowed  
// SETS : prevents duplicate entries 
let tags = new Set();
tags.add("Javascript");
tags.add("Programming");
tags.add({ version: "2015" });
tags.add("Web");
tags.add("Web"); // the duplicate is ignored
console.log(tags);
// SETS with FOR OF 
console.log("SETS with FOR OF")
for (let tag of tags) { // iterating tag SET object through tags SET
    console.log(tag);
}
// SETS WITH DESTRUCTURING
console.log("SETS WITH DESTRUCTURING \n");
let [a, b, c, d] = tags;
console.log(a, b, c, d);
// WEAKSET  : similar to WeakMap, only objects are allowed to be stored
// good for memory (garbage collection). Can't use with for of
console.log("WEAKSET \n");
let weakTags = new WeakSet();
// weakTags.add("Javascript"); // can't add this, not an object
weakTags.add({ name: "Javascript" });
let iOS = { name: "iOS" };
weakTags.add(iOS); // add 
console.log(weakTags.has(iOS)); // will give true
weakTags.delete(iOS); // delete
console.log(weakTags);