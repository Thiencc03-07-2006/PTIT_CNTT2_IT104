class Rectangle {
    width;
    height;
    constructor(width = 0, height = 0) {
        if (width < 0)
            width = 0;
        if (height < 0)
            height = 0;
        this.width = width;
        this.height = height;
    }
    get getWidth() {
        return this.width;
    }
    get getHeight() {
        return this.height;
    }
    set setWidth(input) {
        this.width = input > 0 ? input : this.width;
    }
    set setHeight(input) {
        this.height = input > 0 ? input : this.height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return this.width * 2 + this.height * 2;
    }
}
let rectangle = new Rectangle(3, 4);
console.log(rectangle.getWidth);
console.log(rectangle.getHeight);
console.log(rectangle.area());
console.log(rectangle.perimeter());
rectangle.setWidth = 2;
rectangle.setHeight = 5;
console.log(rectangle.area());
console.log(rectangle.perimeter());
export {};
