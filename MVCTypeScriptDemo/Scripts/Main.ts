
// Interface
interface IPoint {
    getDist(): number;
}

// Module
module Shapes {

    // Class
    export class Point implements IPoint {
        constructor(public x: number, public y: number) { }

        // Interface Member
        getDist() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }

        // Static Member
        static origin = new Point(0, 0);
    }
}

// Local variables
var p: IPoint = new Shapes.Point(3, 4);
var dist = p.getDist();