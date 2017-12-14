var treasureChest = { // OBJECT DECLARATION
    goldCoins: 1000,
    necklaces: ["ruby", "pearl", "sapphire", "diamond"],
    openLid: function() {
        alert("Creeak!")
    }
};

console.log("You've found the following necklaces:");
var list = treasureChest.necklaces; // this avoids the extra step of accessing the treasureChest.necklaces in each cycle
for (var i = 0, x = list.length; i < x; i++) { // assigning necklaces.length to a local variable shortens memory access
    console.log(list[i]); // by creating the variables in the loop parameters (i and x), they only get used within the loop, this increases performance
}