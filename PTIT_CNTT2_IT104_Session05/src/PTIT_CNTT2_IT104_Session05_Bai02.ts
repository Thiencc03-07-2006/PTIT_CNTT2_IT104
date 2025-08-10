class Student {
  id: number;
  age: number;
  email: string;
  constructor(id: number, age: number, email: string) {
    this.id = id;
    this.age = age;
    this.email = email;
  }
  printInfo() {
    console.log(
      "Id: " + this.id + " Age: " + this.age + " Email: " + this.email
    );
  }
}
let arr: Student[] = [];
let student1: Student = new Student(1, 18, "An");
let student2: Student = new Student(2, 18, "Binh");
arr.push(student1);
arr.push(student2);
arr.map((a) => a.printInfo());
