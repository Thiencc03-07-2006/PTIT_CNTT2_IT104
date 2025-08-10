class Employee {
    name;
    company;
    phone;
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log("Ten: " +
            this.name +
            " Cong ty: " +
            this.company +
            " So dien thoai: " +
            this.phone);
    }
}
let employee = new Employee("An", "Cong ty co phan Truong An", "0888888888");
employee.printInfo();
export {};
