import { proxy } from 'valtio'

export const store = proxy({
    movementType: 'Walking',
    currentAnimation: 'Standing',
    collision: false,
    currentIntersectedObject:null,
    experience:false,
    audio:true,
});