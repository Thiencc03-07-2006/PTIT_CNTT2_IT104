class Vehicle {
  protected readonly id: string;
  public name: string;
  protected year: number;
  private company: string;
  constructor(id: string, name: string, year: number, company: string) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.company = company;
  }
  printInfo() {
    console.log(
      "Id: " +
        this.id +
        " Ten phuong tien: " +
        this.name +
        " Nam san xuat: " +
        this.year +
        " Hang: " +
        this.company
    );
  }
}
let oTo = new Vehicle("MD1", "oTo", 2000, "maiza");
let xeMay = new Vehicle("MD2", "xeMay", 2020, "arkai");
oTo.printInfo();
xeMay.printInfo();
