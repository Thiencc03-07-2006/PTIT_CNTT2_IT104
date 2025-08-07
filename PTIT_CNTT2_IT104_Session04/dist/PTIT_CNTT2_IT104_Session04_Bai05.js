const printStaffInfo = (staff) => {
    console.log(`Nhan vien: ${staff.name} (${staff.age} tuoi) , Ma nhan vien: ${staff.employeeId} - Phong: ${staff.department}`);
};
printStaffInfo({ name: "An", age: 18, employeeId: "MP3", department: "Sang Tao" });
export {};
