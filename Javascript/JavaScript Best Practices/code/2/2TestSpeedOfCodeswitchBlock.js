function Knight(name, regiment) {
    this.name = name;
    this.regiment = regiment;

    switch (regiment) { // take some specific action based on the value of regiment
        case 1:
            this.weapon = "Braodsword";
            break;
        case 2:
            this.weapon = "Claymore";
            break;
        case 4: // cases don't have to be in order
            this.weapon = "Mace";
            break;
        case 5:
            this.weapon = "Warhammer";
            break;
        case 6:
            this.weapon = "Battle axe";
            break;
        case 3:
        case 7: // multipl cases can end up here
        case 8:
            this.weapon = "Morningstar";
            break;
        case "King": // case can be a string
            this.weapon = "Excalibur";
            break;
        default: // if it fits no case, it goes here
            alert(name + " has an inccorrect regiment");
            // no break statement needed at the last one, it's OPTIONAL
    }
}

var soldier = new Knight("Timothy", 4);
console.log(soldier.weapon);
var soldier2 = new Knight("Richard", 3);
console.log(soldier2.weapon);
var king = new Knight("Arthur", "King");
console.log(king.weapon);
var soldier3 = new Knight("Jerome", 12);
console.log(soldier3.weapon);


// FALL-THROUGH ALLOWS HEIRARCHICAL CODE EXECUTION
function ceremonialDagger(knight, rank) {
    this.length = 8;
    this.owner = knight;
    switch (rank) {
        case "King": // king gets all
            this.diamond = 1;
        case "Field Marshall": // field marshall gets all the below
            this.sapphires = 4;
        case "Captain": // since there is no break statement, captain will also ge trubies
            this.emeralds = 1;
        case "Knight":
            this.rubies = 6;
    }
}

var knightsDagger = new ceremonialDagger("Jerome", "Knight");
console.log(knightsDagger);
var knightsDagger2 = new ceremonialDagger("Murat", "King");
console.log(knightsDagger2);


// Performance test
var firstRegimentNewbs = ["Grimble Horsehead", "Jark Winterborn", "Bunder Ropefist", "Ernst Breadbaker", "Hoppidi hopp"];
var firstRegimentKnights = ["Murat", "Kerem", "Ozcan", "Chloe", "Ela", "Mila", "Leyla", "Jade"];
var secondRegimentNewbs = ["Jenner Pond", "Tar Backstrand", "Cromer Treen", "Stim Lancetip", "Vorn Sharpeye", "Rack Leaflets", "Bruck Valleyhome", "Arden Follower"];
var secondRegimentKnights = ["Mike", "Brian", "JP", "Meghan"];

console.time("Total completion time");
console.time("Time to add " + firstRegimentNewbs.length + " Knights"); // holding time
for (var i = 0, x = firstRegimentNewbs.length; i < x; i++) {
    firstRegimentKnights.push(new Knight(firstRegimentNewbs[i], 1)); // add each newbie knight to the regiment's list of members
}
console.timeEnd("Time to add " + firstRegimentNewbs.length + " Knights"); // to unite timer boundaries into one timer, their parameter labels must match

console.time("Time to add " + secondRegimentNewbs.length + " Knights"); // holding time
for (var i = 0, x = secondRegimentNewbs.length; i < x; i++) {
    secondRegimentKnights.push(new Knight(secondRegimentNewbs[i], 1)); // add each newbie knight to the regiment's list of members
}
console.timeEnd("Time to add " + secondRegimentNewbs.length + " Knights"); // to unite timer boundaries into one timer, their parameter labels must match
console.timeEnd("Total completion time");
// it's best to take average of 4,5 time measurements!