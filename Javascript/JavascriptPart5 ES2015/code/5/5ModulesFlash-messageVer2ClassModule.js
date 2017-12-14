// 1st way
/*
export default function(message) { //export keyword exposes the function, the default type of export is used here to export the function
    alert(message);
}   // default export is limited in the number functions exported

function logMessage(message) {  // not available outside the module, encapsulated
    console.log(message);
}
*/

// 2nd way : Named Exports
/*
export function alertMessage(message) { //export keyword exposes the function, the default type of export is used here to export the function
    alert(message);
}

export function logMessage(message) { // not available outside the module, encapsulated
    console.log(message);
}
*/

// 3rd way : Importing a module as an object
/*
function alertMessage(message) { //export keyword exposes the function, the default type of export is used here to export the function
    alert(message);
}

function logMessage(message) { // not available outside the module, encapsulated
    console.log(message);

export { alertMessage, logMessage }
*/
// CLASSES CAN ALSO BE EXPORTED FROM MODULES. Instead of individual functions we can have instance methods that are part of a class
// 1st way
export default class FlashMessage {
    constructor(message) {
        this.message = message;
    }
    renderAlert() {
        alert(`${this.message} from alert`);
    }
    renderLog() {
        console.log(`${this.message} from log`);
    }
}

// 2nd way
/*
class FlashMessage {
    constructor(message) {
        this.message = message;
    }
    renderAlert() {
        alert(`${this.message} from alert`);
    }
    renderLog() {
        console.log(`${this.message} from log`);
    }
}
export { FlashMessage }
*/