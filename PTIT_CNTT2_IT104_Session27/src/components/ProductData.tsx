export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}
export const listProduct: Product[] = [
  {
    id: "1",
    name: "Laptop Dell XPS 13",
    price: 25000000,
    description: "Laptop mỏng nhẹ, hiệu năng cao, pin bền.",
  },
  {
    id: "2",
    name: "iPhone 15 Pro",
    price: 30000000,
    description: "Điện thoại cao cấp với chip A17 Bionic và camera xịn.",
  },
  {
    id: "3",
    name: "Tai nghe Sony WH-1000XM5",
    price: 8000000,
    description: "Tai nghe chống ồn hàng đầu, chất lượng âm thanh tuyệt vời.",
  },
  {
    id: "4",
    name: "Bàn phím cơ Keychron K2",
    price: 2500000,
    description: "Bàn phím cơ nhỏ gọn, kết nối Bluetooth, pin lâu.",
  },
  {
    id: "5",
    name: "Màn hình LG UltraWide 34”",
    price: 12000000,
    description:
      "Màn hình cong siêu rộng, độ phân giải cao, phù hợp cho đa nhiệm.",
  },
];
