// OBJECT ASSIGN
// Using Too Many Arguments Is Bad
// For functions that need to be used across different applications, it’s okay to accept an options object instead of using named parameters
/*
function countdownTimer(target, timeLeft, { container, timeUnit, clonedDataAttribute, timeoutClass, timeoutSoonClass, timeoutSoonSeconds } = {}) {
}
*/

// MAKING FUNCTIONS COMPATIBLE WITH DIFFERENT FUNCTIONS
/*
function countdownTimer(target, timeLeft, options = {}) { // some options might not be specified by the caller, so we need to have DEFAULT VALUES
    let container = options.container || ".timer-display";
    let timeUnit = options.timeUnit || "seconds";
    let clonedDataAttribute = options.clonedDataAttribute || "cloned";
    let timeoutClass = options.timeoutClass || ".is-timeout";
    let timeoutSoonClass = options.timeoutSoonClass || ".is-timeout-soon";
    let timeoutSoonTime = options.timeoutSeconds || 10;
}   // the PROBLEM HERE IS THAT IT'S UGLY 
*/
// THE SOLUTION: USE A LOCAL OBJECT TO GROUP DEFAULTS
function countdownTimer(target, timeLeft, options = {}) {
    let defaults = {
        container: ".timer-display",
        timeUnit: "seconds",
        clonedDataAttribute: "cloned",
        timeoutClass: ".is-timeout",
        timeoutSoonClass: ".is-timeout-soon",
        timeoutSoonTime: 10
    };
    // merging values with OBJECT.ASSIGN : copies properties from source objects to target object
    let settings = Object.assign({}, defaults, options); // {} is the target object, defaults&options are the source objects, results get assigned to settings variable
    // remember: duplicate properties on source objects , the rightmost overwrites it all
    // bonus: since the originals default values are kept, you can compare them with the options passed
    if (settings.timeUnit !== defaults.timeUnit) {
        console.log("it didn't work");
    } else {
        console.log('it worked');
    }
    console.log(settings);
    console.log(settings.container);
}
var options;
var count = countdownTimer("anytarget", 10, options);

countdownTimer(`${'.btn-undo'}`, 60, { container: '.new-post-options' });