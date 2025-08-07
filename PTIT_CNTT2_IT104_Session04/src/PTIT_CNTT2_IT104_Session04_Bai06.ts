interface Product {
  id: string;
  name: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  discount?: number;
}
let listProduct: Product[] = [
  {
    id: "P1",
    name: "Tao",
    price: 1.99,
    category: { id: "C1", name: "Trai cay" },
  },
  {
    id: "P2",
    name: "Chao trong dinh",
    price: 10.99,
    category: { id: "C2", name: "Dung cu nha bep" },
    discount: 0.05,
  },
  {
    id: "P3",
    name: "Le",
    price: 2.99,
    category: { id: "C1", name: "Trai cay" },
    discount: 0.25,
  },
];
const getFinalPrice = (produce: Product) =>
  produce.discount ? produce.price * (1 - produce.discount) : produce.price;
const printProductInfo = (product: Product) => {
  console.log("Ten: " + product.name);
  console.log("Gia goc: " + product.price + " VND");
  if (product.discount)
    console.log("Gia sau giam: " + getFinalPrice(product).toFixed(2) + " VND");
  console.log("Danh muc: " + product.category.name);
};

printProductInfo(listProduct[0]);
printProductInfo(listProduct[1]);
printProductInfo(listProduct[2]);
