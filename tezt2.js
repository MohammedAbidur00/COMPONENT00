class Carousel {
    constructor(InputArray) {
        this.InputArray = InputArray;
        this.takeToEnd = "";
        this.takeToFront = "";
    }

    next() {
        this.takeToEnd = this.InputArray[0];
        this.InputArray.shift();
        this.InputArray.push(this.takeToEnd);
        console.log(this.InputArray);
    }

    prev() {
        this.takeToFront = this.InputArray[this.InputArray.length-1];
        this.InputArray.unshift(this.takeToFront);
        this.InputArray.pop();
        console.log(this.InputArray);
    }
}

const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const CarouselOne = new Carousel(array);
CarouselOne.next();