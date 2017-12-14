function Prefixer(prefix) { // prefix = "Hello"
    this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function(arr) { // arr is ["Brad", "Jeff"]
    let that = this; // this and that = Prefixer        // OLD METHOD
    return arr.map(function(x) { // apply the function(x) to every element in the array. The array is ["Brad", "Jeff"]  , x here becomes each element of the array 1 at a time
        console.log(that.prefix + x); // Prefixer."Hello " + "Brad" and  "Hello " "Jeff"
    });
};

let pre = new Prefixer("Hello ");
pre.prefixArray(["Brad", "Jeff"]);

// BETTER WAY OF DOING IT
Prefixer.prototype.prefixArrayNewMethod = function(arr) {

    return arr.map((x) => { // Arrow functions bind to the scope of where they are defined, not where they are called. (also known as lexical binding)
        console.log(this.prefix + x);
    });
};
pre.prefixArrayNewMethod(["Murat", "Ozcan"]);

// arrow function quick example
/*
let add = function(a, b) {
    let sum = a + b;
    console.log(sum);
    return false;
}
*/
// when you have functions inside a function inside a function, 'this' keyword gets confusing
let add = (a, b) => {
    let sum = a + b;
    console.log(sum);
    return false;
};
add(2, 2);

// old way  (wo't work without let that = this)
function startGame() {
    this.lives = 0;
    this.addLives = function() {
        this.oneUp = setTimeout(function() {
            console.log(++this.lives); // here it's referring to setTimeout , but setTimeout doesn't have a lives property
        });
    };
}
var mario = new startGame();
mario.addLives();

function startGame2() {
    this.lives = 0;
    this.addLives = () => {
        this.oneUp = setTimeout(() => {
            console.log(++this.lives); // here this is referring to the this owned by the mother function
        });
    };
}
var luigi = new startGame2();
luigi.addLives();