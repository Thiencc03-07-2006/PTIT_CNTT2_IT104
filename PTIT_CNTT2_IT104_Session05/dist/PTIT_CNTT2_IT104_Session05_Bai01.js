class Vehicle {
    name;
    year;
    company;
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printInfo() {
        console.log("Ten phuong tien: " +
            this.name +
            " Nam san xuat: " +
            this.year +
            " Hang: " +
            this.company);
    }
}
let oTo = new Vehicle("oTo", 2000, "maiza");
let xeMay = new Vehicle("xeMay", 2020, "arkai");
oTo.printInfo();
xeMay.printInfo();
export {};
