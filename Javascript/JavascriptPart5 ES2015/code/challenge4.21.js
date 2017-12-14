let tags = new Set();

tags.add("JavaScript");
tags.add("Programming");
tags.add("Web");

// challenge 4.20
for (let tag of tags) {
    console.log(`Tag: ${tag}`);
}
//challenge 4.21
let [first, second, third] = tags;
console.log(`First tag: ${first}`);