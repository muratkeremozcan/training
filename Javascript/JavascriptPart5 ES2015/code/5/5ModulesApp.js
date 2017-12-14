// 1st way
// import flashMessage from './flash-message'; // import from the file , give it a local variable called flashMessage. flashMessage now holds the function imported from flash-message module(file)
// flashMessage("Hello");

// 2nd way : Named exports
//functions name from exports must be assigned to varilables WIT HTHE SAME NAME ENCLOSED IN CURLY BRACES
//import { alertMessge, logMessage } from './flash-message';

// 3rd way : Importing a module as an object
// we can also import the entire module as an objectand call each function as a property from this object
import * as flash from './flash-message';
flash.alertMessage('Hello from alert');
flash.logMessage('Hello from log');