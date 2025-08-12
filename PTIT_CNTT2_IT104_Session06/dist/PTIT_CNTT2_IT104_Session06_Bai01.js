class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log("Kich thuoc hinh la: " + this.width + " va " + this.height);
    }
}
let rectangle = new Rectangle("hinh chu nhat", 3, 4);
console.log(rectangle.getName());
rectangle.getSize();
export {};
