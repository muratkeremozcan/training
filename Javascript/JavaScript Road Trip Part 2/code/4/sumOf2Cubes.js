function sumOf2Cubes(a, b) {



    alert("The sum of them cubed is :" + (a * a * a + b * b * b));
    return a * a * a + b * b * b;
}


sumOf2Cubes(5 + 5, 4 + 2);
var x = 3;
sumOf2Cubes(x * 2, x * 4);

a = prompt("What is a ?");
b = prompt("What is b ?");

sumOf2Cubes(a, b);