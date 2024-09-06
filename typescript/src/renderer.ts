import { Shape } from "./shapes/shape"


function newRenderer(shapes: Shape) {
    return {
        draw() {
            const area: number = shapes.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }