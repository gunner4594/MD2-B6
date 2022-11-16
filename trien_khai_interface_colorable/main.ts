import {Square} from "./Square";

let squares = [];

squares[0] = new Square(5);
squares[1] = new Square(10);

console.log(squares[0].getArea());
console.log(squares[0].howToColor());