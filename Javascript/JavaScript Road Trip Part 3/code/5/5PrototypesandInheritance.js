 var witch = "I'll get you, my pretty.. and your little dog, too!";
 var scarecrow = "Well, some people without brains do an awful lot of talking don't they?";
 var glinda = "Be gone! Before someone drops a house on you!";
 var dorothy = "There's no place like home.";
 var lion = "Come on, get up and fight, you shivering junkyard!";
 var wizard = "Do not arouse the wrath of the great and powerful Oz!";
 var tinman = "Now I know I have a heart, because it's breaking.";


 // purpose: count the number of letters in a string
 // building a new function inside the string prototype
 // the new function/property is countAll  
 // since we're giving the function to the String prototype, we don't need to pass to function a string, because the strings above will be calling te function itself
 // we need to make sure to give it a letter, so the function knows which letter we're looking for 
 String.prototype.countAll = function(letter) {
     var letterCount = 0; // loop counter
     for (var i = 0; i < this.length; i++) { // since the strings above will be calling countAll, we use 'this' to refer back to the string itself
         // THIS KEYWORD ALWAYS REFERS TO THE CALLING OBJECT
         if (this.charAt(i).toUpperCase() == letter.toUpperCase())
         // in the string look for a character, convert it to uppercase, compare to the passed in letter. We use toUpperCase to convert them all to one style and avoid unneccessary complexity 
             letterCount++; // count the number of letters found in the string
     }
     return letterCount; // gotta return the final amount
 };

 console.log(witch.countAll("I"));
 console.log(scarecrow.countAll("o"));
 console.log(lion.countAll("k"));