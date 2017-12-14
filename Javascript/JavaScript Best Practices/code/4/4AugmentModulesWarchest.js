// AUGMENTATION provides extra properties for existing modules
// it's almost like a recreation of the namespace
// no var !  using the existing global ARMORY namespace
ARMORY = (function(oldNS) { // pass in old namespace, since our namespace is global, we'll import it as local , in order to make some modifications to a temporary object it creates
    //private
    var oilBarrels = 1000;
    var catapults = ["Stoneslinger", "Rockrain", "The Giant's Arm"];
    //public
    oldNS.assignCatapult = function(regiment) { // this is being added as a property in the old namespace object which is local to this function
        //hooks up a regiment with a sweet catapult and some oil barrels
    };
    return oldNS; // we add some new private values and public functionality and return the modified value
})(ARMORY); // we pass in the old module to our modifying IIFE and the result will get assigned to the place where the old module was
// remember! any new properties will have no access to the private data from the earlier closure
// the earlier public properties will retain the reference (makeWeaponRequest , makeArmorRequest)