class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log("Ten: " + this.name);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("gau gau");
    }
}
let meo = new Cat("Vuong Tai");
let cho = new Dog("Bach Tuyet");
meo.printName();
meo.makeNoise();
cho.printName();
cho.makeNoise();
export {};
