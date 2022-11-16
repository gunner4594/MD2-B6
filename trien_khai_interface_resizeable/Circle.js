"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.resize = function (percent) {
        percent = Math.floor(Math.random() * 100);
        return this.getArea() * percent;
    };
    return Circle;
}());
exports.Circle = Circle;
