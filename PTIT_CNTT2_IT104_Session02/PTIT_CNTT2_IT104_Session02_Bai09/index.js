const student = {
  name: "Dev",
  age: 20,
  listMonhoc: [
    { subject: "Math", score: 9 },
    { subject: "English", score: 7.5 },
    { subject: "Physics", score: 6 },
    { subject: "Literature", score: 8.5 },
  ],
};
const getStudentSummary = (student) => {
  const ave =
    student.listMonhoc.reduce((a, b) => a + b.score, 0) /
    student.listMonhoc.length;
  const temp = [...student.listMonhoc].sort((a, b) => a.score - b.score);
  console.log(`
    ${student.name} is ${student.age} years old.
    Average scrore: ${ave.toFixed(2)} -> ${
    ave >= 8.5
      ? "Hoc sinh gioi"
      : ave >= 7
      ? "Hoc sinh kha"
      : ave >= 5
      ? "Hoc sinh trung binh"
      : "Hoc sinh yeu"
  }
    Best subject: ${temp[temp.length - 1].subject} (${
    temp[temp.length - 1].score
  })
    Weakest subject: ${temp[0].subject} (${temp[0].score})`);
};
getStudentSummary(student);
