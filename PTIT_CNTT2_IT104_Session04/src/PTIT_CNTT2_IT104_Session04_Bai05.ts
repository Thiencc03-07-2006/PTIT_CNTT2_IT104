interface Person{
    name:string
    age:number
}
interface Employee{
    employeeId:string
    department:string
}
interface StaffMember extends Person,Employee{}
const printStaffInfo=(staff:StaffMember)=>{
    console.log(`Nhan vien: ${staff.name} (${staff.age} tuoi) , Ma nhan vien: ${staff.employeeId} - Phong: ${staff.department}`);
}
printStaffInfo({name:"An",age:18,employeeId:"MP3",department:"Sang Tao"});
