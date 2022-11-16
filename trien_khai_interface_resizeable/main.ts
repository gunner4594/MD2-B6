import {Resizeable} from "./Resizeable";
import {Circle} from "./Circle";

let shapes = [];
shapes[0] = new Circle(5);
shapes[1] = new Circle(7);

let result = shapes[0].resize();

console.log("Hình tròn - " + " Diện tích cũ: " + shapes[0].getArea() + ", " + "Diện tích mới: " + result);
