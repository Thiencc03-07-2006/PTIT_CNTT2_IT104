class Vehicle {
    name;
    speed;
    id;
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
}
class Bicycle extends Vehicle {
    gear;
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    slowDown() {
        this.speed--;
    }
    speedUp() {
        this.speed++;
    }
    showSpeed() {
        console.log("Toc do hien tai: " + this.speed);
    }
    showInfo() {
        console.log("Ten: " +
            this.name +
            " Toc do: " +
            this.speed +
            " km/h ID: " +
            this.id +
            " So banh rang: " +
            this.gear);
    }
}
let bicycle = new Bicycle("flame", 50, 1802, 1);
bicycle.slowDown();
bicycle.showSpeed();
bicycle.speedUp();
bicycle.showSpeed();
bicycle.showInfo();
export {};
