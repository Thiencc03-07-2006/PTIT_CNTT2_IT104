class MenuItem {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    id;
    capacity;
    available;
    constructor(id, capacity, available) {
        this.id = id;
        this.capacity = capacity;
        this.available = available;
    }
}
class Reservation {
    id;
    customerName;
    tableId;
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    id;
    tableId;
    items;
    constructor(id, tableId, items) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }
    getTotal() {
        return this.items.reduce((a, b) => a + b.price, 0);
    }
}
class Restaurant {
    menu;
    tables;
    reservations;
    orders;
    constructor(menu, tables, reservations, orders) {
        this.menu = menu;
        this.tables = tables;
        this.reservations = reservations;
        this.orders = orders;
    }
    addMenuItem(item) {
        this.menu.push(item);
    }
    addTable(table) {
        this.tables.push(table);
    }
    makeReservation(customerName, tableId) {
        let index = this.tables.findIndex((target) => target.id === tableId);
        if (index !== -1) {
            if (!this.tables[index]?.available) {
                console.log("Ban da duoc dat");
                return;
            }
            let id;
            do {
                id = Math.floor(Math.random() * 1_000_000);
            } while (this.reservations.some((target) => target.id === id));
            this.reservations.push(new Reservation(id, customerName, tableId));
            this.tables[index].available = false;
        }
    }
    placeOrder(tableId, items) {
        let index = this.tables.findIndex((target) => target.id === tableId);
        if (index !== -1) {
            let id;
            do {
                id = Math.floor(Math.random() * 1_000_000);
            } while (this.orders.some((target) => target.id === id));
            this.orders.push(new Order(id, tableId, items));
        }
    }
    generateBill(tableId) {
        this.tables.find((target) => target.id === tableId).available = true;
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
restaurant.placeOrder(2, [restaurant.menu[0]]);
restaurant.placeOrder(1, [restaurant.menu[0], restaurant.menu[2]]);
console.log(restaurant.generateBill(1));
console.log(restaurant.generateBill(2));
export {};
