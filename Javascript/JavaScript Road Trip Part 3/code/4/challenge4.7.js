var superBlinders = [
    ["Firelight", 4000],
    ["Solar Death Ray", 6000],
    ["Supernova", 12000]
];

var lighthouseRock = {
    gateClosed: true,
    bulbs: [200, 500, 750],
    capacity: 30,
    secretPassageTo: "Underwater Outpost"
};

// remove bulbs property from lighthouseRock
delete lighthouseRock.bulbs;

// add weaponBulbs property to lighthouseRock
lighthouseRock.weaponBulbs = superBlinders;

// log the correct weaponBulbs array value to the console.
// we have a 2 dimentional array:  [0][0] is firelight, [2][1] is 12000
console.log(lighthouseRock.weaponBulbs[2][0]);