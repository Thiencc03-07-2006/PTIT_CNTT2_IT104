abstract class Animal {
  name;
  constructor(name: string) {
    this.name = name;
  }
  abstract makeNoise(): void;
  printName() {
    console.log("Ten: " + this.name);
  }
}
class Cat extends Animal {
  makeNoise(): void {
    console.log("meo meo");
  }
}
class Dog extends Animal {
  makeNoise(): void {
    console.log("gau gau");
  }
}
let meo = new Cat("Vuong Tai");
let cho = new Dog("Bach Tuyet");
meo.printName();
meo.makeNoise();
cho.printName();
cho.makeNoise();
