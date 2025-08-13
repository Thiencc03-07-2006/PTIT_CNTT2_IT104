abstract class Vehicle {
  protected name;
  protected speed;
  protected id;
  constructor(name: string, speed: number, id: number) {
    this.name = name;
    this.speed = speed;
    this.id = id;
  }
  abstract slowDown(): void;
  abstract speedUp(): void;
  abstract showSpeed(): void;
}
class Bicycle extends Vehicle {
  private gear;
  constructor(name: string, speed: number, id: number, gear: number) {
    super(name, speed, id);
    this.gear = gear;
  }
  slowDown(): void {
    this.speed--;
  }
  speedUp(): void {
    this.speed++;
  }
  showSpeed(): void {
    console.log("Toc do hien tai: " + this.speed);
  }
  showInfo() {
    console.log(
      "Ten: " +
        this.name +
        " Toc do: " +
        this.speed +
        " km/h ID: " +
        this.id +
        " So banh rang: " +
        this.gear
    );
  }
}
let bicycle = new Bicycle("flame", 50, 1802, 1);
bicycle.slowDown();
bicycle.showSpeed();
bicycle.speedUp();
bicycle.showSpeed();
bicycle.showInfo();
