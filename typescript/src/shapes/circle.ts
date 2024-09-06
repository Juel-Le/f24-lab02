/* function circle(radius: number): Shape {
    return {
        radius,
        computeArea: function (): number {
            return Math.PI * radius * radius
        }
    }
} */

import { Shape } from "./shape";

class circle implements Shape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
    
    public computeArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

export { circle }
