let invoice = {
    invoiceld: "#INV001",
    orders: [
        {
            orderId: "#ORD001",
            customerName: "An",
            items: [
                {
                    product: {
                        id: "P1",
                        name: "Ao so mi",
                        price: 250000,
                    },
                    quantity: 2,
                },
                {
                    product: {
                        id: "P2",
                        name: "Quan tay",
                        price: 400000,
                    },
                    quantity: 1,
                },
            ],
            deliveryAddress: "HanoI",
            isPaid: true,
        },
        {
            orderId: "#ORD002",
            customerName: "Binh",
            items: [
                {
                    product: {
                        id: "P3",
                        name: "Vay hoa",
                        price: 750000,
                    },
                    quantity: 1,
                    note: "size M",
                },
            ],
            deliveryAddress: "HanoI",
            isPaid: false,
        },
    ],
    createdAt: new Date(2000, 10, 10),
};
const toVND = (price) => new Intl.NumberFormat("vi-VN").format(price) + " VND";
const calculateOrderTotal = (order) => {
    return order.items.reduce((a, b) => a + b.product.price * b.quantity, 0);
};
const printOrder = (order) => {
    console.log("Don hang " + order.orderId + " - " + order.customerName);
    order.items.map((target) => console.log("- " +
        target.product.name +
        " x " +
        target.quantity +
        " -> " +
        toVND(target.product.price * target.quantity) +
        (target.note ? ` (note: ${target.note})` : "")));
    console.log("Tong don " + toVND(calculateOrderTotal(order)));
    console.log(`Trang thai: ${order.isPaid ? "DA THANH TOAN" : "CHUA THANH TOAN"}`);
};
const calculateInvoiceTotal = (invoice) => invoice.orders.reduce((a, b) => a + b.items.reduce((a1, b1) => a1 + b1.product.price * b1.quantity, 0), 0);
const getunpaidOrders = (invoice) => invoice.orders.filter((target) => !target.isPaid);
const printInvoice = (invoice) => {
    console.log("HOA DON: " +
        invoice.invoiceld +
        " - Ngay tao: " +
        invoice.createdAt.toISOString().slice(0, 10));
    console.log("--------------------");
    invoice.orders.map((a) => printOrder(a));
    console.log(">> Tong cong hoa don: " + toVND(calculateInvoiceTotal(invoice)));
};
printInvoice(invoice);
console.log(getunpaidOrders(invoice));
export {};
