//Ta dung method khi:
//- Co san code xu ly chung
//- Code ap dung duoc cho tat ca lop con
// Vi du getName o duoi luon tra ve name
//Ta dung abstact method khi:
//- Muon de lop con tu quyet dinh cach thuc hien
//- Muon dinh nghia khung cho lop con
// Vi du speak co the khac nhau tuy class con
abstract class Animal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  abstract speak(): void;
}
class Dog extends Animal {
  speak(): void {
    console.log("Wook!");
  }
}
