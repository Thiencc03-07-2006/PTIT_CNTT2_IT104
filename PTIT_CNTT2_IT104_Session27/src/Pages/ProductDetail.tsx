import React from "react";
import { listProduct } from "../components/ProductData";
import { Link, useParams } from "react-router-dom";
export default function ProductDetail() {
  const { id } = useParams();
  const product = listProduct.find((t) => t.id === id);
  if (!product) {
    return (
      <div>
        <h1>San pham khong to tai</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          <strong>Chi tiet san pham</strong>
        </h1>
        <h3>{product.name}</h3>
        <p>Gia: {product.price.toLocaleString("vi-VN") + " VND"}</p>
        <p>Mo ta: {product.description}</p>
        <Link className="text-blue-600" to="/product">
          Quay lai trang danh sach
        </Link>
      </div>
    );
  }
}
