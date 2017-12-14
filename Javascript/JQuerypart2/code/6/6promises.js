// JSON : JS Object Notation. A standard way to format data
// AJax : asynchornous javascript and xml . A client side technique to get  data from server without having to refresh

/*
$(document).ready(function() {

    $('button').on('click', function() { // listen for click on button
        var location = $('.loc').text(); // get our current location by getting the text inside of the paragraph for location
        $.ajax('/weather', { // send the location in our ajax request by specifiying the data option
            data: { q: location }, // key of q , and our location we just grabbed out of the html
            success: function(result) { // in our success callback, the json result that we get back  will look like  ????#?#!? JSON AGAIN ? DONT WORK ON DOMAIN LAPTOP
                $('.weather').text(result.weather); // what if we wanted to use this ajax call on other pages? PROMISES
            }

        });

    });
});

*/
// --> PROMISES
// Starting to build a 'promise' object
var Weather = {
        today: function(location) {
            var promise = $.ajax('/weather', { // <---  all $.ajax() requests returns an
                data: { q: location } //     | object of type 'promise', so we set  
            }); // <---  promise to be equal to the ajax response             
            return promise;
        }
    }
    // Using the promise in our code
$('button').on('click', function() {
    var location = $('.loc').text();
    var todayPromise = Weather.today(location);
    todayPromise.done(function(response) { // <-- 'done' works like the AJAX 'success'
        $('.weather').text(response.weather); // if the request comes back successfully,
    }); // by default will call the 'done' method
}); // on that promise, if it's defined!
// But what if we don't know that we have to call 'weather' on 'response'
// Can we just call 'response' and get the same as 'response.weather'?
// --------------------
// Optimal .done method
// --------------------
// We need a way to intercept the response, inside our promise (Weather), and 
// modify it before the .done method gets called.
// using $.Deferred()
// ------------------
var Weather = {
        today: function(location) {
            var promise = $.Deferred(); // Deferred allows us to create a promise from scratch
            $.ajax('/weather', {
                data: { q: location },
                success: function(response) {
                    promise.resolve(response.weather); // 'resolve' triggers 'done'
                }
            });
            return promise;
        }
    }
    // Now the Weather object is responsible of parsing the JSON response
$('button').on('click', function() {
    var location = $('.loc').text();
    var todayPromise = Weather.today(location);
    todayPromise.done(function(response) {
        $('.weather').text(response);
    });
});
// Recap *
// -----
// Custom promise with $.Deferred()
var promise = $.Deferred(); // <-- jQuery method for creating a promise object
//                         calls the done callback
promise.resolve(value); /* ----------------------> */
promise.done(function(value) {});
//                         calls the fail callback
promise.reject(value); /* ----------------------> */
promise.fail(function(value) {});
// .reject triggers the .fail callback
// -----------------------------------
var Weather = {
    today: function(location) {
        var promise = $.Deferred();
        $.ajax('/weather', {
            data: { q: location },
            success: function(response) {
                promise.resolve(response.weather); // 'resolve' triggers 'done'
            },
            error: function() {
                var error = 'invalid location';
                promise.reject(error);
            }
        });
        return promise;
    }
}
$('button').on('click', function() {
    var location = $('.loc').text();
    var todayPromise = Weather.today(location);
    todayPromise.done(function(response) {
        $('.weather').text(result);
    }).fail(function(error) {
        console.log(error);
    });
});