import { Component } from "react";
import Header from "./Header";
import { PRODUCT, type Product } from "./product.data";
interface Cart {
  cart: Product[];
  isOpen: boolean;
}
export default class ProductList extends Component<object, Cart> {
    state: Cart = {
        cart: JSON.parse(localStorage.getItem("cart") || "[]"),
        isOpen: false,
    };
    const {cart,isOpen}=this.state
  handleClickAdd = (e: React.MouseEvent<HTMLButtonElement>, add: boolean) => {
    let find = this.state.cart.findIndex(
      (t) => t.id === Number(e.currentTarget.name)
    );
    if (find) {
        this.setState({cart})
      find.quantity = find.quantity + (add ? 1 : -1);
    } else {
      find = PRODUCT.find((t) => t.id === Number(e.currentTarget.name));
      if (find) {
        this.setState({ cart: [...this.state.cart, { ...find, quantity: 1 }] ,isOpen:this.state.isOpen});
      }
    }
  };
  render() {
    return (
      <div>
        <Header />
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
            padding: "20px",
          }}
        >
          {PRODUCT.map((t) => (
            <div
              key={t.id}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "200px",
                height: "300px",
                alignItems: "center",
                border: "1px solid gray",
                padding: "10px",
                borderRadius: "10px",
                gap: "5px",
              }}
            >
              <img
                style={{ width: "150px", height: "200px", objectFit: "cover" }}
                src={t.png}
              ></img>
              <p>{t.name}</p>
              <p>{t.price.toLocaleString("vi-VN") + " đ"}</p>
              <button
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  padding: "5px",
                  cursor: "pointer",
                }}
                name={String(t.id)}
              >
                🛒 Them vao gio hang
              </button>
            </div>
          ))}
          <div>
            <h3>Cart</h3>
            {this.state.cart.map((t) => (
              <div
                key={t.id}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  <img src={t.png} alt="" />
                </div>
                <div>{t.name}</div>
                <div>
                  <button name={String(t.id)}>+</button>
                  <span>{t.quantity}</span>
                  <button name={String(t.id)}>-</button>
                </div>
                <button>🗑️</button>
              </div>
            ))}
            <div>
              Tong tien:{" "}
              {this.state.cart.reduce((a, b) => a + b.price * b.quantity, 0)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
