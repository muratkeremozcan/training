function sansTemple(direction) {
    var happensNext;
    switch (happensNext) {
        case ('right hallway'):
            //commenting out fall-through challenge 1.24
            // happensNext = 'You find a door, it is locked. You head back from where you came.';
            // break;
        case ('left hallway'):
            // happensNext = 'You find a door, it is locked. You head back from where you came.';
            // break;
        case ('forward hallway'):
            // happensNext = 'You find a door, it is locked. You head back from where you came.';
            // break;
        case ('lower tunnel'):
            happensNext = 'You find a door, it is locked. You head back from where you came.';
            break;
        case ('hidden door'):
            happensNext = 'You go through the door into a room. A small, very dark room, that smells of dust and sulfur...';
            break;
        default:
            happensNext = 'You stand there, gaping, not moving. Aiedra wonders, are you alive?';
    }
    return happensNext;
}
sansTemple();