var x = 4;
var y = "4";

console.log(x.valueOf()); // returns 4 as a number
console.log(y.valueOf()); // returns "4"  as string

x.valueOf() == y.valueOf(); // true, == uses a type coersion

x.valueOf() === y.valueOf(); // FALSE, ===  is more particular, does indeed compare the types

////////////////////////////////////////////////////////////////

x.toSting(); // gives "4"
y.toString(); // gives "4"

var a = [3, "blind", "mice"];
a.toString(); // gives  "3,blind,mice"

var double = function(parameterAny) {
    return parameterAny * 2;
};
double.toString(); // gives "function (parameterAny) {return parameterAny *2;}"