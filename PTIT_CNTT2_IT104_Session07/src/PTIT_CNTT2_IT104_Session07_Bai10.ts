class MenuItem {
  constructor(public id: number, public name: string, public price: number) {}
}
class Table {
  constructor(
    public id: number,
    public capacity: number,
    public available: boolean
  ) {}
}
class Reservation {
  constructor(
    public id: number,
    public customerName: string,
    public tableId: number
  ) {}
}
class Order {
  constructor(
    public id: number,
    public tableId: number,
    public items: MenuItem[]
  ) {}
  getTotal() {
    return this.items.reduce((a, b) => a + b.price, 0);
  }
}
class Restaurant {
  constructor(
    public menu: MenuItem[],
    public tables: Table[],
    public reservations: Reservation[],
    public orders: Order[]
  ) {}
  addMenuItem(item: MenuItem) {
    this.menu.push(item);
  }
  addTable(table: Table) {
    this.tables.push(table);
  }
  makeReservation(customerName: string, tableId: number) {
    let index = this.tables.findIndex((target) => target.id === tableId);
    if (index !== -1) {
      if (!this.tables[index]?.available) {
        console.log("Ban da duoc dat");
        return;
      }
      let id: number;
      do {
        id = Math.floor(Math.random() * 1_000_000);
      } while (this.reservations.some((target) => target.id === id));
      this.reservations.push(new Reservation(id, customerName, tableId));
      this.tables[index]!.available = false;
    }
  }
  placeOrder(tableId: number, items: MenuItem[]) {
    let index = this.tables.findIndex((target) => target.id === tableId);
    if (index !== -1) {
      let id: number;
      do {
        id = Math.floor(Math.random() * 1_000_000);
      } while (this.orders.some((target) => target.id === id));
      this.orders.push(new Order(id, tableId, items));
    }
  }
  generateBill(tableId: number) {
    this.tables.find((target) => target.id === tableId)!.available = true;
    let total = this.orders
      .filter((target) => target.tableId === tableId)
      .reduce((a, b) => a + b.getTotal(), 0);
    this.orders = this.orders.filter((target) => target.tableId !== tableId);
    return total;
  }
}
let restaurant = new Restaurant([], [], [], []);
restaurant.addMenuItem(new MenuItem(1, "com rang", 25000));
restaurant.addMenuItem(new MenuItem(2, "pho bo", 50000));
restaurant.addMenuItem(new MenuItem(3, "ca phe", 20000));
restaurant.addTable(new Table(1, 2, true));
restaurant.addTable(new Table(2, 4, true));
restaurant.makeReservation("An", 1);
restaurant.makeReservation("Binh", 1);
restaurant.placeOrder(1, [restaurant.menu[0]!, restaurant.menu[2]!]);
restaurant.placeOrder(2, [restaurant.menu[0]!]);
console.log(restaurant.generateBill(1));
console.log(restaurant.generateBill(2));
