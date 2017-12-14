// express is a web application framework for Node (node is a platform for JavaScript to be used outside of webbrowsers) . ExpressJS extends NodeJS
// npm install express  . This installs the module and adds to package.json (our dependencies file)

// we will create a web api server that accepts http requests on the root path and responds with a string 'hello world'
var express = require('express'); // this is the express library. 
var app = express(); // with the above we get a function back, when we run the function we get an application instance which we store in the app variable to create an instance of express.

app.get('/', function(request, response) { // the app.get function creates a route that accepts GET requests. When someone does a get request, it's going to call the  callback function (actively waiting)
    // we give it a path to route, which is the root path here. The callback function will run each time our applications receives a get request on the root path 

    // response.send('Hello World');  // alternative to write
    response.write('Hello world'); // Carlos says response.send and response.write are the same thing. Powershell shows "Hello World" being in Contents and Headers respectively
    response.end();
}); // we use the response object to send back the text 'hello world'
app.listen(3000, function() { // bind application to tcp port 3000. The listen also takes an optional callback function, which is called once the app is ready to start taking requests
    console.log('Listening on port 3000 ');
});

// to run the express app, use the node command :  node 1helloWorldApp.js
// to test it use powershell:  curl http://localhost:3000
// make sure to restart the process once you change any code in the app
/* 
other built=in functions
app.post()
app.put()
app.patch
app.delete()

*/