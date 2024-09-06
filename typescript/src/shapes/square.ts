/* function square(sideLen: number): Shape {
    return {
        sideLen,
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
} */

import { Shape } from "./shape";


class square implements Shape {
    private sideLen: number;

    constructor(sideLen: number) {
        this.sideLen = sideLen;
    }
    
    public computeArea(): number {
        return this.sideLen * this.sideLen
    }
}


export { square }