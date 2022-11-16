import {Colorable} from "./Colorable";

export class Square implements Colorable {
    private side: number;
    constructor(side: number) {
        this.side = side;
    }
    getArea () {
        return this.side * this.side;
    }
    howToColor() {
        return "Color all four sides";
    }
}