// function approach (old): class, prototype, instantiation
/*
function SponsorWidget(name, description, url) { // the constructor class
    this.name = name;
    this.description = description;
    this.url = url;
}
SponsorWidget.prototype.render = function() {
    console.log("render function works!");
};
let sponsorWidgetObject = new SponsorWidget("name", "description", "url"); // instantiation
sponsorWidgetObject.render(); // invoking the function
*/
// NEW CLASS SYNTAX - C# & Java love
class SponsorWidget { // class keyword!
    constructor(name, description, url) { // constructor method: runs every time a new instance is created
        this.name = name; // assigning to instance variables makes them accessible by other instance methods
        this.description = description; // these can be accessed from all other function/method/operations in the class
        this.url = url;
        this.baseCSS = "site-widget";
    }
    render() { // function/method/operation! just like C#, love it
        let link = this.url; // USE ' THIS ' TO ACCESS INSTANCE PROPERTIES AND METHODS
        console.log("render function works with the new class syntax!");
    }
    parse(optionalValue) {
        console.log("parse function of SponsorWidget parent works!")
    }
}
let sponsorWidgetObject = new SponsorWidget("name", "description", "url");
sponsorWidgetObject.render();
// note:  _buildLink  the underscore is a convention for indiacting that it should not be invoked as public

console.log("Child Class inheriting & overriding now");
// here is a CHILD CLASS of SponsorWidget
class BabyWidget extends SponsorWidget {

    constructor(description1, url1) { // can have its own constructor
        let name1 = "hello"; // but will need to add this in to match the super
        super(name1, description1, url1); // SUPER fuctions calls the parent's constructor and has to have the same # of parameters and matching types
    }
    parse(parsedName) { // OVERRIDING 
        console.log("inheritance+overriding works!")
        return `Sponsor: ${parsedName}`;
    }
}
let babyWidgetObject = new BabyWidget("description", "url");
babyWidgetObject.render(); // inherited
var x = babyWidgetObject.parse("you"); // overriding , calling the function (console logs) and assigns the return value to x
console.log(x); // logs out the returned value