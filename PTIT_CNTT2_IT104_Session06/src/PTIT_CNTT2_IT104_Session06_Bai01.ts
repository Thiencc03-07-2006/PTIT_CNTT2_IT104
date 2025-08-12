abstract class Shape {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  abstract getSize(): void;
}
class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(name: string, width: number, height: number) {
    super(name);
    this.width = width;
    this.height = height;
  }
  getSize(): void {
    console.log("Kich thuoc hinh la: " + this.width + " va " + this.height);
  }
}
let rectangle = new Rectangle("hinh chu nhat", 3, 4);
console.log(rectangle.getName());
rectangle.getSize();
