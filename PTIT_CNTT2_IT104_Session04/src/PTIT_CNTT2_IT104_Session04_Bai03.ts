interface Student{
    name:string
    age:number
    email:string
}
const printS=(student:Student)=>{
    console.log(`Toi ten la ${student.name}, Toi ${student.age} tuoi va email cua toi la ${student.email}`)
}
let student:Student={name:"An",age:18,email:"An@gmail.com"}
printS(student)