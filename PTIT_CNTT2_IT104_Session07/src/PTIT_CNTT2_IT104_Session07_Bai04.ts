abstract class Person {
  name;
  constructor(name: string) {
    this.name = name;
  }
  displayInfo() {
    return "Ten: " + this.name;
  }
}
class Student extends Person {
  id;
  constructor(name: string, id: number) {
    super(name);
    this.id = id;
  }
  displayInfo(): string {
    return "MSV: " + this.id + " " + super.displayInfo();
  }
}
class Teacher extends Person {
  subject;
  constructor(name: string, subject: string) {
    super(name);
    this.subject = subject;
  }
  displayInfo(): string {
    return super.displayInfo() + " Mon hoc: " + this.subject;
  }
}
console.log(new Student("An Lan", 20000).displayInfo());
console.log(new Teacher("An Lien", "Chinh tri").displayInfo());
