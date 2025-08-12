class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
}
let students = [
    new Student(1, "An"),
    new Student(2, "Binh"),
    new Student(3, "Chi"),
];
class Classroom {
    students;
    constructor(arr) {
        this.students = arr;
    }
    showStudents() {
        this.students.forEach((element, index) => {
            console.log(`${index + 1}. ${element.name}`);
        });
    }
    addStudent(s) {
        this.students.push(s);
    }
    filterStudent(id) {
        new Classroom(this.students.filter((target) => target.getId().toString().includes(id.toString()))).showStudents();
    }
    addStudentInClass(arr, count) {
        let temp = arr.slice(0, count);
        arr = arr.splice(0, count);
        temp.forEach((element) => {
            this.addStudent(element);
        });
    }
}
let class1 = new Classroom([]);
let class2 = new Classroom([]);
class1.addStudentInClass(students, 2);
class1.showStudents();
class1.filterStudent(2);
class2.addStudentInClass(students, 2);
class2.showStudents();
export {};
