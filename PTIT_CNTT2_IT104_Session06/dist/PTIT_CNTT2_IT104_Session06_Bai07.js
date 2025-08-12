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
    removeStudent(arr, id) {
        let index = this.students.findIndex((target) => target.getId() === id);
        if (index !== -1) {
            arr.push(this.students[index]);
            this.students.splice(index, 1);
        }
    }
    editStudent(id, name) {
        let index = this.students.findIndex((target) => target.getId() === id);
        if (index !== -1) {
            this.students[index].name = name;
        }
    }
}
let class1 = new Classroom([]);
let class2 = new Classroom([]);
class1.addStudentInClass(students, 2);
class1.showStudents();
class1.filterStudent(2);
class1.removeStudent(students, 2);
class1.showStudents();
class2.addStudentInClass(students, 2);
class2.showStudents();
class2.editStudent(2, "Thanh Binh");
class2.showStudents();
export {};
