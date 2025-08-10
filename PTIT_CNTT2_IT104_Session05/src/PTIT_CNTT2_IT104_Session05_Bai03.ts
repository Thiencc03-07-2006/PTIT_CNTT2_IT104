class Employee {
  public name: string;
  protected company: string;
  private phone: string;
  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }
  printInfo() {
    console.log(
      "Ten: " +
        this.name +
        " Cong ty: " +
        this.company +
        " So dien thoai: " +
        this.phone
    );
  }
}
let employee: Employee = new Employee(
  "An",
  "Cong ty co phan Truong An",
  "0888888888"
);
employee.printInfo();
