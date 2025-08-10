class Student {
    id;
    age;
    email;
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    printInfo() {
        console.log("Id: " + this.id + " Age: " + this.age + " Email: " + this.email);
    }
}
let arr = [];
let student1 = new Student(1, 18, "An");
let student2 = new Student(2, 18, "Binh");
arr.push(student1);
arr.push(student2);
arr.map((a) => a.printInfo());
export {};
