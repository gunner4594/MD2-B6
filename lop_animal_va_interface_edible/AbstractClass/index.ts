import {Tiger} from "../Animals/Tiger";
import {Chicken} from "../Animals/Chicken";
import {Apple}  from "../Fruits/Apple";
import {Orange} from "../Fruits/Orange";

console.log('___Animals___');
let animals = [];
animals[0] = new Tiger();
animals[1] = new Chicken();

animals.forEach((item, index) => {
    console.log(item.makeSound())
    if (item instanceof Chicken) {
        console.log(item.howToEat())
    }
});

console.log('___Fruits___');
let fruits = [];

fruits[0] = new Apple();
fruits[1] = new Orange();

fruits.forEach(item => {
    console.log(item.howToEat());
})

