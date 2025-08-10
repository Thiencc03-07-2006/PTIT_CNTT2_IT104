class Animal {
    name;
    age;
    species;
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    speak() {
        console.log("Hello");
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    printInfo() {
        return "Ten: " + this.name + " Tuoi: " + this.age;
    }
}
class Dog extends Animal {
    breed;
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log("Woof");
    }
    printInfoMore() {
        return (this.printInfo() + " Loai: " + this.species + " Giong: " + this.breed);
    }
    setBreed(breed) {
        this.breed = breed;
    }
}
class Cat extends Animal {
    breed;
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log("Meow");
    }
    printInfoMore() {
        return (this.printInfo() + " Loai: " + this.species + " Giong: " + this.breed);
    }
    setBreed(breed) {
        this.breed = breed;
    }
}
class Rabbit extends Animal {
    breed;
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log("Squeak");
    }
    printInfoMore() {
        return (this.printInfo() + " Loai: " + this.species + " Giong: " + this.breed);
    }
    setBreed(breed) {
        this.breed = breed;
    }
}
let dog = new Dog("BKTHD-1", 2, "Cho", "AD-3");
let cat = new Cat("BKTCD-4", 2, "Meo", "BN-2");
let rabbit = new Dog("BRTHD-7", 1, "Tho", "ML-5");
console.log(dog.printInfoMore());
console.log(cat.printInfoMore());
console.log(rabbit.printInfoMore());
dog.setAge(3);
cat.setBreed("BN-3");
console.log(dog.printInfoMore());
console.log(cat.printInfoMore());
console.log(rabbit.printInfoMore());
export {};
