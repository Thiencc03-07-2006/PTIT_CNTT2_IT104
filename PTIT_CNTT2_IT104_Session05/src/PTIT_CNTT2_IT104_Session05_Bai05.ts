class Rectangle {
  private width: number;
  private height: number;
  constructor(width: number = 0, height: number = 0) {
    if (width < 0) width = 0;
    if (height < 0) height = 0;
    this.width = width;
    this.height = height;
  }
  public get getWidth(): number {
    return this.width;
  }
  public get getHeight(): number {
    return this.height;
  }
  public set setWidth(input: number) {
    this.width = input > 0 ? input : this.width;
  }
  public set setHeight(input: number) {
    this.height = input > 0 ? input : this.height;
  }
  area() {
    return this.width * this.height;
  }
  perimeter() {
    return this.width * 2 + this.height * 2;
  }
}
let rectangle: Rectangle = new Rectangle(3, 4);
console.log(rectangle.getWidth);
console.log(rectangle.getHeight);
console.log(rectangle.area());
console.log(rectangle.perimeter());
rectangle.setWidth = 2;
rectangle.setHeight = 5;
console.log(rectangle.area());
console.log(rectangle.perimeter());
