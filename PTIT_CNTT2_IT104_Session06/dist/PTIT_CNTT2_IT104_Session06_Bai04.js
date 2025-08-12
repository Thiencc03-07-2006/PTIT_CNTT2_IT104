class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea = () => Math.PI * this.radius * this.radius;
    calculatePerimeter = () => 2 * Math.PI * this.radius;
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea = () => this.width * this.height;
    calculatePerimeter = () => 2 * (this.width + this.height);
}
let circle = new Circle(5);
let rectangle = new Rectangle(3, 4);
console.log("Hinh tron: dien tich:" +
    circle.calculateArea().toFixed(2) +
    " chu vi: " +
    circle.calculatePerimeter().toFixed(2));
console.log("Hinh chu nhat: dien tich:" +
    rectangle.calculateArea().toFixed(2) +
    " chu vi: " +
    rectangle.calculatePerimeter().toFixed(2));
export {};
