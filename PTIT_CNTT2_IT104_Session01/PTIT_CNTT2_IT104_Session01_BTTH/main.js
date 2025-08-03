import {
  getStudentById,
  getTopStudents,
  getClassAverage,
  getStudentsByScoreRange,
  sortStudentsByNme,
} from "./help-function.js";
class Student {
  constructor(id, name, age, scores) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.scores = scores;
  }
  getAverage() {
    return this.scores.reduce((a, b) => a + b, 0) / this.scores.length;
  }
}
const studentsList = [
  new Student("SV001", "Thien", 19, [6, 6, 6]),
  new Student("SV002", "Tien", 19, [7, 7, 7]),
  new Student("SV003", "Minh", 19, [8, 8, 8]),
  new Student("SV004", "Hoang", 19, [9, 9, 9]),
  new Student("SV005", "Ngoc", 19, [10, 10, 10]),
];
console.log(getStudentById(studentsList, "SV001"));
console.log(getTopStudents(studentsList));
console.log(getClassAverage(studentsList));
console.log(getStudentsByScoreRange(studentsList, 8, 10));
console.log(sortStudentsByNme(studentsList));
