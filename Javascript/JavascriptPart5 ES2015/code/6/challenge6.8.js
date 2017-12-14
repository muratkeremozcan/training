let user = { // JS objects aren't iterable out of the box, so we gotta make them
    name: "sam",
    totalReplies: 17,
    isBlocked: false
};

user[Symbol.iterator] = function() { // the result of Symbol.iterator method returns an iterator object
    // the iterator object has a next() method which can return done: and value: properties
    let properties = Object.keys(this); // Object.keys() is used to return an array with the property names of the object
    // so , here we get the properties of the iterator object
    let count = 0; // for indexing the array  
    let isDone = false; // when the loop is done this gets set to true

    let next = () => { // defining the next method of the iterator object, the next method returs done and value
        if (count >= properties.length) { // arrow function because we want to scope here. End the loop when we reach the end
            isDone = true;
        }

        let value = this[properties[count++]]; // 

        return { done: isDone, value };
    };
    return { next };
};