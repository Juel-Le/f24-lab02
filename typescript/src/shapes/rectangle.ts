/* interface Rectangle {
    width: number,
    height: number,
    computeArea: () => number
} */

import { Shape } from "./shape";

class Rectangle implements Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    
    public computeArea(): number {
        return this.width * this.height
    }
}


export { Rectangle}
