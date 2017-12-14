// middleware are the building blocks of express
// middleware are functions added to the stack, that have access to request and response objects and are executed sequentially
// inside the middleware we can do things like validation, authentican, data parsing etc. 
// when a request comes in it passes through each middleware before reaching our routes
// an express application is essentially a stack of middleware 
// call  next() to move to the next middleware
// express is a web application framework for Node (node is a platform for JavaScript to be used outside of webbrowsers) . ExpressJS extends NodeJS

var express = require('express'); // this is the express library. install express in shell for this to work  :  npm install --save express. This installs the module and adds to package.json (our dependencies file)
var app = express(); // with the above we get a function back, when we run the function we get an application instance which we store in the app variable to create an instance of express.
var logger = require('./logger'); // require the logger we wrote ./ indicates it's a local module , not node module
app.use(logger); // use the logger . Add it to the stack by passing it as and argument to app.use

app.use(express.static('public')); // app.use function adds middleware to the application stack. We pass it the public folder where we want to serve our static files from 
// this basically enables us to use the files in the public folder

app.get('/blocks', function(request, response) { // the app.get function creates a route that accepts GET requests. When someone does a get request, it's going to call the  callback function (actively waiting) 

    var blocks = ['Fixed', 'Movable', 'Rotating']; // creating an array of blocks . 
    response.json(blocks); // serializing it back to the back to the client using the response.json function

});
app.listen(3000, function() {
    console.log('listening on port 3000');
}); // listen on port 3000`