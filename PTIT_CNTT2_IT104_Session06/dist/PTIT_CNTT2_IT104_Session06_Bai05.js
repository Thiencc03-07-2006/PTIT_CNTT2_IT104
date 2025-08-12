class Vehicle {
    speed;
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 1;
        console.log("Toc do hien tai la: " + this.speed);
    }
    slowDown() {
        this.speed -= 1;
        console.log("Toc do hien tai la: " + this.speed);
    }
    stop() {
        this.speed = 0;
        console.log("Toc do hien tai la: " + this.speed);
    }
}
let moto = new Vehicle(20);
moto.slowDown();
moto.speedUp();
moto.stop();
export {};
