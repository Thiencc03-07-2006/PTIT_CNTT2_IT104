class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        return "Ten: " + this.name;
    }
}
class Student extends Person {
    id;
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        return "MSV: " + this.id + " " + super.displayInfo();
    }
}
class Teacher extends Person {
    subject;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        return super.displayInfo() + " Mon hoc: " + this.subject;
    }
}
console.log(new Student("An Lan", 20000).displayInfo());
console.log(new Teacher("An Lien", "Chinh tri").displayInfo());
export {};
