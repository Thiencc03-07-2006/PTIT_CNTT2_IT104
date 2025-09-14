import React from "react";
import { listProduct } from "../components/ProductData";
import { Link } from "react-router-dom";
export default function ProductList() {
  return (
    <div>
      <h1>Danh sach san pham</h1>
      <div className="flex gap-[10px]">
        {listProduct.map((t) => (
          <div
            className="border-gray-500 border-[2px] p-[10px] flex justify-between flex-col"
            key={t.id}
          >
            <h3>
              <strong>{t.name}</strong>
            </h3>
            <p>Gia: {t.price.toLocaleString("vi-VN") + " VND"}</p>
            <Link className="text-blue-600" to={t.id}>
              xem chi tiet
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
