import { proxy } from 'valtio'

export const store = proxy({
    movementType: 'Walking',
    currentAnimation: 'Standing',
    collision: false,
    groundFramesToTest: null
});