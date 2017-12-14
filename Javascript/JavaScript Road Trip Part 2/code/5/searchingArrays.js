var numberList = [2, 5, 8, 4, 7, 12, 6, 9, 3, 11];
// numberList[5] = undefined; // erase an array element


for (var i = 0; i < numberList.length; i++) {
    console.log("The number in cell " + i + " is " + numberList[i]);
}

var evenCount = 0; // variable to count even numbers

// count even numbers, erase odd numbers
for (var i = 0; i < numberList.length; i++) {

    if (numberList[i] % 2 == 0) { // if it's an even number, increase even number counter
        evenCount++;
    } else { // if it's an odd number , erase it
        numberList[i] = undefined;
    }
}
console.log("Count of even numbers is : " + evenCount);
console.log(numberList);