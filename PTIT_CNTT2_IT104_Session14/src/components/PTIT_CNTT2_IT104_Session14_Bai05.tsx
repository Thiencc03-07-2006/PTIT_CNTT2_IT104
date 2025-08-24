import React, { Component } from "react";
interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
export default class PTIT_CNTT2_IT104_Session14_Bai05 extends Component<
  object,
  Product
> {
  constructor(props: object) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: 0,
      quantity: 0,
    };
  }
  handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    this.setState({
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    } as unknown as Pick<Product, keyof Product>);
  };
  handleSumit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h3>Bai 5</h3>
        <form
          onSubmit={this.handleSumit}
          style={{
            border: "1px solid gray",
            width: "max-content",
            padding: "10px",
          }}
        >
          <h4>Them moi san pham</h4>
          <label>Ma san pham</label>
          <br />
          <input
            style={{
              border: "1px solid gray",
              width: "max-content",
              margin: "5px",
              borderRadius: "5px",
              padding: "5px 10px",
            }}
            type="text"
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
          />
          <br />
          <label>Ten san pham</label>
          <br />
          <input
            style={{
              border: "1px solid gray",
              width: "max-content",
              margin: "5px",
              borderRadius: "5px",
              padding: "5px 10px",
            }}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <label>Gia san pham</label>
          <br />
          <input
            style={{
              border: "1px solid gray",
              width: "max-content",
              margin: "5px",
              borderRadius: "5px",
              padding: "5px 10px",
            }}
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <br />
          <label>So luong san pham</label>
          <br />
          <input
            style={{
              border: "1px solid gray",
              width: "max-content",
              margin: "5px",
              borderRadius: "5px",
              padding: "5px 10px",
            }}
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <br />
          <button
            style={{
              padding: "5px",
              backgroundColor: "blue",
              color: "white",
              borderRadius: "5px",
              textAlign: "center",
              width: "100%",
              cursor: "pointer",
            }}
            type="submit"
          >
            Dang ky
          </button>
        </form>
      </div>
    );
  }
}
