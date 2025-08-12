class Student {
  private id;
  name;
  constructor(id: number, name: string) {
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
  students: Student[];
  constructor(arr: Student[]) {
    this.students = arr;
  }
  showStudents() {
    this.students.forEach((element, index) => {
      console.log(`${index + 1}. ${element.name}`);
    });
  }
  addStudent(s: Student) {
    this.students.push(s);
  }
  filterStudent(id: number) {
    new Classroom(
      this.students.filter((target) =>
        target.getId().toString().includes(id.toString())
      )
    ).showStudents();
  }
  addStudentInClass(arr: Student[], count: number) {
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
