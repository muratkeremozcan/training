let recentPosts = new Map();

recentPosts.set("Sam", "ES2015"); // setting key and value. Map takes key & value . Get gets the value for the specified key
recentPosts.set("Tyler", "CoffeeScript");
recentPosts.set("Brook", "TypeScript");

for (let [user, postTitle] of recentPosts) { // [key, value] of an array,
    console.log(`${user} = ${postTitle}`); // log key and value
}