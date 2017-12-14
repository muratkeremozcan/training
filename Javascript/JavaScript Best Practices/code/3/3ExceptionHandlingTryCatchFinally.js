// exceptions are run-time arrors
/*  // simple example
try { // try is like a stage, see if this works
    alert(alarm);
} catch (error) { //if it doesn't work, error is a paramater object to used for messaging or conditions to take action on
    alert("Uh oh..\n" + error); // broken code can exit more gracefully . ALARM NOT DEFINED
}
*/

// different types of try catch
try {
    var newHallOfFame = ["Dask Frostring", "Render Tallborn"];
    list = "12"; // TOGGLE THIS for TypeError. If you make it string, since string has concat, the code works

    // you want to watch out for possible errors
    // use conditionals with throw keyword to craft the right exception scenario 
    // if the try block reaches a throw, it will throw it immeadiately to the catch block without progressing any further
    if (list === undefined)
        throw new ReferenceError();
    if ((list instanceof Array) === false) // if we dont' check for this, list as a string works and we don't want that
        throw new TypeError();

    // try to add the new guys into list, a list  that doesn't exist
    list.concat(newHallOfFame); // LIST IS NOT DEFINED
} catch (error) {
    if (error instanceof ReferenceError) //  REFERENCE ERROR: if the error being thrown is a type/instance of ReferenceError
        alert(error + "\n" + "The HoF roster does not exist as \"list\" !"); // you're REFERRING TO SOMETHING THAT DOESN'T EXIST
    if (error instanceof TypeError) // TYPE ERROR: if the error being thrown is type/instance of TypeError
        alert(error + "\n" + "Alas, the Hall's list is not an array"); // what you're referring to IS NOT THE RIGHT TYPE
} finally { // FINALLY BLOCK HOLDS THE CODE THAT SHOULD EXECUTE NO MATTER WHAT
    console.log(list); // now we will know what list contained , no matter what
}