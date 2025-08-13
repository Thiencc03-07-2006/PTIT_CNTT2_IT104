class Employee {
  name;
  protected company;
  private phone;
  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }
  printInfo() {
    return (
      "Ten: " + this.name + " Cong ty: " + this.company + " SDT: " + this.phone
    );
  }
}
class Manager extends Employee {
  teamSize;
  constructor(name: string, company: string, phone: string, teamSize: number) {
    super(name, company, phone);
    this.teamSize = teamSize;
  }
  printInfo() {
    return super.printInfo() + " So thanh vien: " + this.teamSize;
  }
}
console.log(
  new Manager(
    "An",
    "Trach nhiem huu han da thanh vien",
    "0888888888",
    10
  ).printInfo()
);
