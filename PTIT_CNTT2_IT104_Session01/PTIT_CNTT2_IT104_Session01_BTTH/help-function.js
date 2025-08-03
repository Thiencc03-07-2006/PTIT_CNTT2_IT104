export function getStudentById(studentsList, id) {
  const student = studentsList.find((target) => target.id === id);
  return student ? student : "Khong tim thay";
}
export function getTopStudents(studentsList) {
  const max = Math.max(...studentsList.map((target) => target.getAverage()));
  return studentsList.filter((target) => target.getAverage() === max);
}
export function getClassAverage(studentsList) {
  const total = studentsList.reduce((a, b) => a + b.getAverage(), 0);
  return Number(total / studentsList.length);
}
export function getStudentsByScoreRange(studentsList, min, max) {
  return studentsList.filter((target) => {
    const avg = target.getAverage();
    return avg >= min && avg <= max;
  });
}
export function sortStudentsByNme(studentsList) {
  return studentsList.sort((a, b) => a.name.localeCompare(b.name));
}
