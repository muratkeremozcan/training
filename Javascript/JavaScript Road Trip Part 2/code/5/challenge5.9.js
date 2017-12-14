var ageIsCorrect = false;
var userAge = prompt("What's your age, user?");

while (ageIsCorrect == false) {
    if (confirm("You entered " + userAge + ". Is this correct?")) {
        ageIsCorrect = true;
        alert("Great! Your age is logged as " + userAge + ".");
    } else {
        userAge = prompt("So then what's your age?");
    }
}