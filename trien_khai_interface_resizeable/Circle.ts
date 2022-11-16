import {Resizeable} from "./Resizeable";

export class Circle implements Resizeable {
    private radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    getArea () {
        return this.radius * this.radius * Math.PI;
    }
    resize(percent: number) {
        percent = Math.floor(Math.random()*100);
        return this.getArea()*percent
    }
}