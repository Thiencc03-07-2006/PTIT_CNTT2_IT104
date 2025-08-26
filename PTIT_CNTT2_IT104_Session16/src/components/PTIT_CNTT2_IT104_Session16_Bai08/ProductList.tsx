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
  handleClickAdd = (e: React.MouseEvent<HTMLButtonElement>, add: boolean) => {
    const { cart, isOpen } = this.state;
    let find = cart.findIndex((t) => t.id === Number(e.currentTarget.name));
    const checkProduct = PRODUCT.find(
      (t) => t.id === Number(e.currentTarget.name)
    );
    if (find !== -1) {
      if (checkProduct && cart[find].quantity === checkProduct.quantity) {
        alert("Het hang");
      } else {
        const save: Product[] = [...cart];
        save[find] = {
          ...save[find],
          quantity: save[find].quantity + (add ? 1 : -1),
        };
        if (save[find].quantity === 0) {
          save.splice(find, 1);
        }
        this.setState(
          {
            cart: [...save],
            isOpen: isOpen,
          },
          () => {
            localStorage.setItem("cart", JSON.stringify(this.state.cart));
          }
        );
      }
    } else {
      find = PRODUCT.findIndex((t) => t.id === Number(e.currentTarget.name));
      if (find !== -1) {
        this.setState(
          {
            cart: [...cart, { ...PRODUCT[find], quantity: 1 }],
            isOpen: isOpen,
          },
          () => {
            localStorage.setItem("cart", JSON.stringify(this.state.cart));
          }
        );
      }
    }
  };
  handleClickShowCart = () => {
    this.setState({ cart: [...this.state.cart], isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        <Header
          handleClickShowCart={this.handleClickShowCart}
          length={this.state.cart.length}
        />
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
            padding: "20px",
            position: "relative",
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
                onClick={(e) => this.handleClickAdd(e, true)}
              >
                🛒 Them vao gio hang
              </button>
            </div>
          ))}
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              width: "300px",
              position: "absolute",
              top: "0",
              right: "0",
              display: this.state.isOpen ? "flex" : "none",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h3>Cart</h3>
            <hr />
            <div>
              {this.state.cart.map((t) => (
                <div
                  key={t.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <img style={{ width: "50px" }} src={t.png} alt="" />
                  </div>
                  <div>{t.name}</div>
                  <div style={{ display: "flex", gap: "5px", color: "white" }}>
                    <button
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "white",
                        background: "none",
                        border: "1px solid white",
                      }}
                      name={String(t.id)}
                      onClick={(e) => this.handleClickAdd(e, true)}
                    >
                      +
                    </button>
                    <span>{t.quantity}</span>
                    <button
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "white",
                        background: "none",
                        border: "1px solid white",
                      }}
                      name={String(t.id)}
                      onClick={(e) => this.handleClickAdd(e, false)}
                    >
                      -
                    </button>
                  </div>
                  <button
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "white",
                      background: "none",
                      border: "none",
                    }}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
            <hr />
            <div>
              Tong tien:{" "}
              {this.state.cart
                .reduce((a, b) => a + b.price * b.quantity, 0)
                .toLocaleString("vi-VN") + " đ"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
