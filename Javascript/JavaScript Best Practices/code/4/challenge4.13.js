// 4.13 and until 4.17
var CAVESOFCLARITY = function() {

    var treasureChests = 3; // private
    var bats = 345; // private

    return { // public
        stalactites: 4235,
        stalagmites: 3924,
        SECRET: {
            openChest: function() {
                treasureChests--;
                alert('DA DADADA DAAAAAAA!');
            }
        }
    };
}();