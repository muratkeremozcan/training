function loadProfiles(userNames) {
    // all vars are hoisted here when executing (loadingMessage and flashMessage)
    // this is why when calling them out of their scope you get undefined versus a reference error
    // TO PREVENT HOISTING OF VARS , USE LET KEYWORD INSTEAD WHERE YOU WANT VARS RESTRICTED

    // CONST KEYWORD creates READ-ONLY named constants.  Good code practice
    // THEY ARE ALSO NOT HOISTED. 
    const MAX_USERS = 3;
    // MAX_USERS = 10; // SINCE IT's A CONSTANT YOU CANNOT REASSIGN IT
    // const MAX_USERS = 10; // OR REDECLARE

    if (userNames.length > MAX_USERS) {
        let loadingMessage = "This might take a while...";
        // var loadingMessage = "This might take a while...";
        //  _displaySpinner(loadingMessage);
        console.log(loadingMessage);
    } else {
        let flashMessage = "Loading Profiles";
        // var flashMessage = "Loading Profiles";
        // _displaylash(flashMessage);
        console.log(flashMessage);
    }
    //  console.log(loadingMessage); // BECAUSE WE ARE USING LET, CAN'T USE IT HERE OUTSIDE ITS SCOPE, we get reference error

    // PROBLEM WITH VAR IN FOR LOOPS
    for (let i in userNames) { // var i gets HOISTED to the top, USE LET KEYWORD  INSTEAD
        //_fetchProfile("/users" + userNames[i]function() {
        console.log("Fetched for ", userNames[i]);
    }
    //}
}
loadProfiles(["Sam", "Tyler", "Brook", "Alex"]);

// let CANNOT BE REDECLARED, but CAN BE REASSIGNED
let flashMessage = "Hello";
console.log(flashMessage);
flashMessage = "Goodbye"; // is you say  let flashmessage = "Goodbye" it will complain that it has already been declared
console.log(flashMessage);
// const CANNOT BE REDECLARED and CANNOT BE REASSIGNED