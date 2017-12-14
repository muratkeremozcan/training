function loadProfiles(userNames = []) { // DEFAULT VALUES: use empty array as default value when no argument is passed

    // LESSON2
    // Manual argument check (this is the old method of ensuring the right type of input, but it doesn't scale well)
    // let names = typeof userNames !== 'undefined' ? userNames : []; // check if the typeof userNames is not undefined, if so return userNames, if not return empty array 
    // let namesLength = names.length;
    // we can make it better by using DEFAULT PARAMETER VALUES, which help move default values from function body to the function signature
    let namesLength = userNames.length;
    console.log(namesLength);

    const MAX_USERS = 3;

    if (namesLength > MAX_USERS) {
        let loadingMessage = "This might take a while...";
    } else {
        let flashMessage = "Loading Profiles";
    }
    // PROBLEM WITH VAR IN FOR LOOPS
    for (let i in userNames) { // var i gets HOISTED to the top, USE LET KEYWORD  INSTEAD
        //_fetchProfile("/users" + userNames[i]function() {
        //  console.log("Fetched for ", userNames[i]);
    }
    //}
}

//loadProfiles(); //   neither of these break when using DEFAULT VALUES
//loadProfiles(undefined);
loadProfiles(["Sam", "Tyler", "Brook", "Alex"]); // if there is a value passed in, it uses that instead of empty array

//////////////////////////////////////////////////////

// OPTIONS OBJECT : allows user-defined settings to be passed to a function in the form of properties on an object
/*
function setPageThread(name, options = {}) { // first argument is a string, second argument is an options object
    let popular = options.popular; // we assign each of the properties to a local variable, to make to code easier to read
    let expires = options.expires;
    let activeClass = options.activeClass;
}
*/
// ISSUES WITH OPTIONS OBJECT
// - hard to know what options a functions accepts just by looking at the function's signature : options = {}
// SOLUTION : NAMED PARAMETERS. using named parameters for optional settings makes it easier to understand how a function should be invoked

function setPageThread(name, { popular, expires, activeClass }) { // know we can tell which functions are available
    console.log("Name: ", name); // don't need any of this, it's just showing that local variable are available
    console.log("Popular: ", popular);
    console.log("Expires: ", expires);
    console.log("Active: ", activeClass);
}
// using DEFAULT PARAMETERS to get around the issue of omitted options
function setPageThreadWithDefaultValue(name, { popular, expires, activeClass } = {}) {
    console.log("Name: ", name);
    console.log("Popular: ", popular);
    console.log("Expires: ", expires);
    console.log("Active: ", activeClass);
}

setPageThread("New Version out Soon!", { // first argument is a string, second argument is an options object
    popular: true,
    expires: 10000,
    activeClass: "is-page-thread"
});
// what happens when we call setPageThread and leave out some options?
setPageThread("New Version out Soon!", {
    popular: true // no errors, just prints out undefined for the options omitted
});
// BUT THERE IS A PROBLEM . What happens when we OMIT an option?
// setPageThread("New Version out Soon!"); // gives TypeError!
// TO GET AROUND THIS WE USE DEFAULT PARAMETERS AGAIN!
setPageThreadWithDefaultValue("New Version out Soon!");