
// Module
var Shapes;
(function (Shapes) {
    // Class
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        // Interface Member
        Point.prototype.getDist = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };

        Point.origin = new Point(0, 0);
        return Point;
    })();
    Shapes.Point = Point;
})(Shapes || (Shapes = {}));

// Local variables
var p = new Shapes.Point(3, 4);
var dist = p.getDist();
//# sourceMappingURL=Main.js.map
