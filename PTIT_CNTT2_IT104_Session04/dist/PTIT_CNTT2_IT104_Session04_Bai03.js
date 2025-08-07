const printS = (student) => {
    console.log(`Toi ten la ${student.name}, Toi ${student.age} tuoi va email cua toi la ${student.email}`);
};
let student = { name: "An", age: 18, email: "An@gmail.com" };
printS(student);
export {};
