// what if you want some privacy in the namespace?
// we use JS' CLOSURE feature, allows us to privatize properties

// as a first step wrap the entire set of properties in an anonymous immediately invoked function expression IIFE
// the list of data become local variables
var ARMORY = (function() {
    // want these private
    var weaponList = ["Sword", "Knife", "Axe", "Spear"]; // the list of data become local variables for the IIFE's scope
    var armorList = ["ChainMail", "LeatherArmor", "PlateMail", "Naked"]; // these will only belong to the function, instead of directly to the name space

    // don't want anyone doing these, want private
    var removeWeapon = function() {}; // these will only belong to the function, instead of directly to the name space
    var replaceWeapon = function() {};
    var removeArmor = function() {};
    var replaceArmor = function() {};

    return { // public.  Because the function expressionis actually called, this returend object will be handed immediately to the ARMORY variable and become a namespace
        makeWeaponRequest: function() {},
        makeArmorRequest: function() {}
    };

})(); // the last parenthesis indicate that the function expression should be immediately executed

ARMORY.makeWeaponRequest("Sword");

/*
var ARMORY = {
    weaponList : ["Sword", "Knife", "Axe", "Spear"],
    armorList : ["ChainMail", "LeatherArmor", "PlateMail", "Naked"],

    makeWeaponRequest: function (){},
    makeArmorRequest: function() {},

    removeWeapon: function () {},
    replaceWeapon: function() {},
    removeArmor: function () {},
    replaceArmor: function () {}

};
*/