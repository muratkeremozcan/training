// middleware are the building blocks of express
// middleware are functions added to the stack, that have access to request and response objects and are executed sequentially
// inside the middleware we can do things like validation, authentican, data parsing etc. 
// when a request comes in it passes through each middleware before reaching our routes
// an express application is essentially a stack of middleware 
// call  next() to move to the next middleware
// express is a web application framework for Node (node is a platform for JavaScript to be used outside of webbrowsers) . ExpressJS extends NodeJS

var express = require('express'); // this is the express library. install express in shell for this to work  :  npm install --save express. This installs the module and adds to package.json (our dependencies file)
var app = express(); // with the above we get a function back, when we run the function we get an application instance which we store in the app variable to create an instance of express.

app.get('/', function(request, response) { // create a get route for the root path. From our callback function..  
    response.sendFile(__dirname + '/public/index.html'); // ..use the sendFile function. Takes the path of the file we want to serve. __dirname returns the current path of the app, and we append
    // this causes index.html file to be served back to the client
});
app.listen(3000, function() {
    console.log('listening on port 3000');
}); // listen on port 3000`