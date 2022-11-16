"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var shapes = [];
shapes[0] = new Circle_1.Circle(5);
shapes[1] = new Circle_1.Circle(7);
var result = shapes[0].resize();
console.log("Diện tích cũ: " + shapes[0].getArea() + ", " + "Diện tích mới: " + result);
