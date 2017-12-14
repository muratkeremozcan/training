var CAVESOFCLARITY = function() {

    var treasureChests = 3; //private
    var bats = 345; //private

    return { // public
        stalactites: 4235,
        stalagmites: 3924,
        SECRET: {
            openChest: function() {
                treasureChests--;
                alert('DA DADADA DAAAAAAA!');
            }
        },
        getBats: function() {
            return bats; //exposing bats, making it 'public' 
        }


    };
}(); // the paranthesis allow this variable to immediately contain the object that serves as our module, rather than a function