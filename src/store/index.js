import { proxy } from 'valtio'

export const store = proxy({
    movementType: 'Walking',
    currentAnimation: 'Standing',
    collision: false,
    currentIntersectedObject:null,
    start:false, //Start Experience
    audio:false,
    displayArtInfo: false,
    keypressIsEnabled:false, //Controls if the player can be moved. When set to true, you can move the player otherwise you can't
    isKeyPressed:false // WASD/ArrowKeys
});