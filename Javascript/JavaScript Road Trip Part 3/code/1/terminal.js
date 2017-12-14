var greeting;

newCustomer = prompt("Are you a new customer?");

if (newCustomer == "Yes") {
    greeting = function() {
        alert("Thanks for visiting the Badlands! \n" + "We hope you enjoy your stay)");
    }; // this is a variable that holds a function. FUNCTION EXPRESSION

} else {
    greeting = function() {
        alert("Welcome back to the Badlands!");
    };
}


function closeTerminal(message) { // this is a function that gets passed in a variable
    message(); // variable gets called as a function
}

closeTerminal(greeting);