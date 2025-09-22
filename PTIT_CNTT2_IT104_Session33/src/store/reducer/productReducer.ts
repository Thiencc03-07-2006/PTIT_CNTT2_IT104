type Product = {
  id: number | string;
  img: string;
  title: string;
  describe: string;
  quantity: number;
  price: number;
};
type ActionType = {
  type: string;
  payload?: number;
};
const initialState: Product[] = [
  {
    id: 1,
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png",
    title: "iPhone 16 Pro Max",
    describe:
      "Điện thoại cao cấp với chip A18 Pro, màn hình 6.9 inch Super Retina XDR.",
    quantity: 10,
    price: 3499,
  },
  {
    id: 2,
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png",
    title: "Samsung Galaxy S24 Ultra",
    describe: "Flagship Android mạnh mẽ với bút S-Pen, Snapdragon 8 Gen 3.",
    quantity: 8,
    price: 2899,
  },
  {
    id: 3,
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook-air-15-inch-m2-2023-1.jpg",
    title: "MacBook Air M2 15 inch",
    describe:
      "Laptop mỏng nhẹ với chip Apple M2, thời lượng pin lên đến 18 giờ.",
    quantity: 5,
    price: 2999,
  },
  {
    id: 4,
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_25__7_5.png",
    title: "Apple Watch Ultra 2",
    describe:
      "Đồng hồ thông minh siêu bền, màn hình sáng 3000 nits, hỗ trợ lặn biển.",
    quantity: 12,
    price: 2199,
  },
  {
    id: 5,
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/i/airpods_pro_2_sep24_pdp_image_position_2__vn-vi.jpg",
    title: "AirPods Pro 2",
    describe: "Tai nghe chống ồn chủ động, chip H2 mới, hỗ trợ Adaptive Audio.",
    quantity: 20,
    price: 1099,
  },
];
export const product = (
  state: Product[] = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "get":
      return state;
    default:
      return state;
  }
};
