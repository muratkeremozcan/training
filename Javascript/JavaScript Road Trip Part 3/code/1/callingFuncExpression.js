var parkRides = [
    ["Birch Bumpers", 40],
    ["Pines Plunge", 55],
    ["Cedar Coaster", 20],
    ["Ferris Wheel of Firs", 90]
]; // 4 subarrays inside an array
// ride name and wait time

var fastPassQueue = ["Cedar Coaster", "Pines Plunge", "Birch Bumpers", "Pines Plunge"];

fastPassQueue.shift(); // shift method pops the first cell and returns it, pop method would pop the last cell and return it
var firstFastPass = fastPassQueue.shift(); // we store what gets shifted in a variable
console.log(fastPassQueue.length); // this would show 2
console.log(firstFastPass); // display what got shifted