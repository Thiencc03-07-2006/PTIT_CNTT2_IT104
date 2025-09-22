type Product = {
  id: number | string;
  img: string;
  title: string;
  describe: string;
  quantity: number;
  price: number;
};
type CartItem = Product & {
  cartQuantity: number;
};
type ActionType = {
  type: string;
  payload?: any;
};
export const cart = (state: CartItem[] = [], action: ActionType) => {
  switch (action.type) {
    case "add": {
      const product = action.payload as Product;
      const temp = state.find((t) => t.id === product.id);
      if (temp) {
        if (temp.cartQuantity === temp.quantity) {
          alert("So luong san pham vuot qua so luong trong kho");
          return state;
        }
        return state.map((t) =>
          t.id === product.id
            ? {
                ...t,
                cartQuantity:
                  t.cartQuantity < t.quantity
                    ? t.cartQuantity + 1
                    : t.cartQuantity,
              }
            : t
        );
      } else {
        return [...state, { ...product, cartQuantity: 1 }];
      }
    }
    case "delete": {
      const id = action.payload as number | string;
      return state.filter((t) => t.id !== id);
    }
    default:
      return state;
  }
};
