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
        return ("Ten: " + this.name + " Cong ty: " + this.company + " SDT: " + this.phone);
    }
}
class Manager extends Employee {
    teamSize;
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        return super.printInfo() + " So thanh vien: " + this.teamSize;
    }
}
console.log(new Manager("An", "Trach nhiem huu han da thanh vien", "0888888888", 10).printInfo());
export {};
