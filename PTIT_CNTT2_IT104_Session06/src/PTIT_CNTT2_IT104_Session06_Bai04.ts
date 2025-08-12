interface Geometry {
  calculateArea(): number;
  calculatePerimeter(): number;
}
class Circle implements Geometry {
  private radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  calculateArea = () => Math.PI * this.radius * this.radius;
  calculatePerimeter = () => 2 * Math.PI * this.radius;
}
class Rectangle implements Geometry {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  calculateArea = () => this.width * this.height;
  calculatePerimeter = () => 2 * (this.width + this.height);
}
let circle = new Circle(5);
let rectangle = new Rectangle(3, 4);
console.log(
  "Hinh tron: dien tich:" +
    circle.calculateArea().toFixed(2) +
    " chu vi: " +
    circle.calculatePerimeter().toFixed(2)
);
console.log(
  "Hinh chu nhat: dien tich:" +
    rectangle.calculateArea().toFixed(2) +
    " chu vi: " +
    rectangle.calculatePerimeter().toFixed(2)
);
