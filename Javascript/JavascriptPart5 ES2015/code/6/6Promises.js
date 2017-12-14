/*  http://www.yuthon.com/2016/04/10/CodeSchool-ES2015/
// iterators and generators
// really had no clue what's their use , but look them there at the link if you need

// Synchronous style functions wait for return values
// Page freezes until a value is returned from this function
let results = getPollResultsFromServer("Sass vs. LESS");
ui.renderSidebar(results);

// to avoid blocking the main thread of execution, we write non-blocking, asynchronous style function
getPollResultsFromServer("Sass vs. Less", function(results) {
    ui.renderSidebar(results);
});

// In continuation-passing style (CPS) async programming, we tell a function how to continue execution by passing callbacks. It can grow to complicated nested code.
// When nested callbacks start to grow, our code becomes harder to understand
getPollResultsFromServer(pollName, function(error, results) {
            if (error) { //.. handle error }
                //...
                ui.renderSidebar(results, function(error) {
                            if (error) { //.. handle error }
                                //...
                                sendNotificationToServer(pollName, results, function(error, response) {
                                    if (error) { //.. handle error }
                                        //...
                                        doSomethingElseNonBlocking(response, function(error) {
                                                if (error) { //.. handle error }
                                                    //...
                                                })
                                        });
                                });
                            });

                            */


// PROMISES
// A Promise is a new abstraction that allows us to write async code in an easier way.
// Still non-blocking, but not using nested callbacks anymore
getPollResultsFromServer("Sass vs. LESS")
    .then(ui.renderSidebar)
    .then(sendNotificationToServer)
    .then(doSomethingElseNonBlocking)
    .catch(function(error) {
        console.log("Error: ", error);
    });

//The Promise constructor function takes an anonymous function with 2 callback arguments known as handlers.
/*
function getPollResultsFromServer(pollName){
  // Handlers are responsible for either resolving or rejecting the Promise
  return new Promise( function(resolve, reject) {
    //...
    // Called when the non-blocking code is done executing
    resolve(someValue);
    //...
    // Called when an error occurs
    reject(someValue);
  });
};

*/

function getPollResultsFromServer(pollName) {
    return new Promise(function(resolve, reject) { // Handlers (resolve, reject) are responsible for either resolving or rejecting the Promise
        let url = `/results/${pollName}`;
        let request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                // We call the resolve() handler upon a successful response
                // Resolving a Promise moves it to a fulfilled state
                resolve(JSON.parse(request.response));
            }
        };
        //...
        request.send();
    });
};

// We can use the then() method to read results from the Promise once it’s resolved. This method takes a function that will only be invoked once the Promise is resolved.