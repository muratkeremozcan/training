function SignalFire(ID, startingLogs) {
    this.fireID = ID;
    this.logsLeft = startingLogs;
}
/*
 instead of using classes as a template from which you can create (instantiate) objects, 
 in JavaScript you use Prototypes.  JavaScript uses what's known as prototypal inheritance, rather than class inheritance

 MAKE SURE YOU ADD ALL COMMON FUNCTIONALITY TO THE PROTOTYPE SO EVERY SINGLE DATA STRUCTURE
 INSIDE OF A CLASS OF OBJECTS DOESN'T CONTAIN THAT SHARED FUNCTIONALITY ITSELF
 */
SignalFire.prototype = {
    addLogs: function(numLogs) {
        this.logsLeft += numLogs;
    },
    lightFire: function() {
        alert("whoosh!");
    },
    smokeSignal: function(message) {
        this.message = message;
        if (this.logsLeft < this.message.length / 10) {
            alert("Not enough fuel to send the current message");
        } else {
            this.lightFire();
            var x = this.message.length;
            for (var i = 0; i < x; i++) {
                alert("(((" + this.message[i] + ")))");
                if (i % 10 == 0 && i != 0) {
                    this.logsLeft--;
                }
            }
        }
    }
};

var fireOne = new SignalFire(1, 20);
var fireTwo = new SignalFire(2, 18);
var fireThree = new SignalFire(3, 24);

fireOne.addLogs(8); // addLogs mehtod is accessed from the prototype (single place) instead of being replicated across all signalFires
fireTwo.addLogs(10);
fireThree.addLogs(4);

fireThree.smokeSignal("Goblins!");

/*  TO INCREASE PERFORMANCE GIVE ALL COMMON METHODS TO THE CONSTRUCTOR's PROTOTYPE 
this.addLogs = function(numLogs) {                  // we don't need to build all thse methods within every single SignalFire object
    this.logsLeft += numLogs;                       // 
};
this.lightFire = function() {
    alert("whoosh!");
};
this.smokeSignal = function(message) {
    if (this.logsLeft < this.message.length / 10) {
        alert("Not enough fuel to send the current message");
    } else {
        this.lightFire();
        var x = this.message.length;
        for (var i = 0; i < x; i++) {
            alert("(((" + this.message[i] + ")))");
            if (i % 10 == 0 && i != 0) {
                this.logsLeft--;
            }
        }
    }
};
*/