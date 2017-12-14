var superBlinders = [
    ["Firestorm", 4000],
    ["Solar Death Ray", 6000],
    ["Supernova", 12000]
];

var lighthouseRock = {
    gateClosed: true,
    weaponBulbs: superBlinders,
    capacity: 30,
    secretPassageTo: "Underwater Outpost",
    numRangers: 3,
    ranger1: { name: "Nick Walsh", skillz: "magnification burn", station: 2 },
    ranger2: { name: "Drew Barontini", skillz: "uppercut launch", station: 3 },
    ranger3: { name: "Christine Wong", skillz: "bomb defusing", station: 1 }
};

function dontPanic(location) {
    var list = "Avast, me hearties!\n" +
        "There be Pirates nearby! Stations!\n";
    for (var i = 1; i <= location.numRangers; i++) {

        list = list + location["ranger" + i].name + ", man the " + location.weaponBulbs([i][2]) + "!\n";
    }

    // loop through the rangers and append to list


    alert(list);
}

dontPanic(lighthouseRock);