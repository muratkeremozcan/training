// here is the file where armory module is built
var ARMORY = (function(war) { // FIRST, create a parameter for the IIFE that returns our namespace object. You can create as many parameters as tehre are globals that you'll be importing
    // bonus: now the function's parameter creates a modifiable value for use in the module while the glboal value stays protected
    var weaponList = ["Sword", "Knife", "Axe", "Spear"];
    var armorList = ["ChainMail", "LeatherArmor", "PlateMail", "Naked"];

    var removeWeapon = function() {};
    var replaceWeapon = function() {};
    var removeArmor = function() {};
    var replaceArmor = function() {};

    return {
        makeWeaponRequest: function() {
            if (war) { console.log("Let civilians have weaponry") } // SECOND replace global names with parameter names
        },
        makeArmorRequest: function() {}
    };

})(wartime); // THIRD pass all your globals into your IIFE using the calling parantheses
// the last parenthesis indicate that the function expression should be immediately executed