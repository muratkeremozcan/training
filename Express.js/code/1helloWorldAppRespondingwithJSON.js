// express is a web application framework for Node (node is a platform for JavaScript to be used outside of webbrowsers) . ExpressJS extends NodeJS
// npm install express

// we will create a web api server that accepts http requests on the root path and responds with a string 'hello world'
var express = require('express'); // this is the express library. install express in shell for this to work  :  npm install --save express. This installs the module and adds to package.json (our dependencies file)
var app = express(); // with the above we get a function back, when we run the function we get an application instance which we store in the app variable to create an instance of express.

app.get('/blocks', function(request, response) { // the app.get function creates a route that accepts GET requests. When someone does a get request, it's going to call the  callback function (actively waiting)
    // we give it a path to route, which is /blocks here. The callback function will run each time our applications receives a get request on the blocks path 
    // RESPONDING WITH JSON
    var blocks = ['Fixed', 'Movable', 'Rotating']; // inside the blocks ROUTE create an array with 3 elements, assign to blocks variable

    // what if instead of an array we pass in a string  . Express sends the string as is. Nothing special here.
    //var blocks = '<ul><li>Fixed</li><li>Moveable</li></ul>';

    response.json(blocks); // same response as send
    // response.send(blocks); // the send function converts objects and arrays to JSON
    // response.redirect(301, '/parts'); // the redirect function sets teh proper response headers. 301 is the optional status code. This didn't work in powershell.

});
app.listen(3000, function() { // bind application to tcp port 3000. The listen also takes an optional callback function, which is called once the app is ready to start taking requests
    console.log('Listening on port 3000 ');
});

// to run the express app, use the node command :  node filename.js
// to test it use powershell, use -i to print response headers:  curl -i http://localhost:3000/blocks   , -i didn't work in powershell
// make sure to restart the process once you change any code in the app
/* 
other built=in functions
app.post()
app.put()
app.patch
app.delete()

*/