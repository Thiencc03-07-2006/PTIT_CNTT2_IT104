import React from "react";
import { tasks } from "../components/TastData";
import { useNavigate, useParams } from "react-router-dom";
export default function TaskDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = tasks.find((t) => t.id === Number(id));
  if (!product) {
    return (
      <div>
        <h1>San pham khong to tai</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 text-white p-[5px]"
        >
          Quai lai
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 text-white p-[5px]"
        >
          Quai lai
        </button>
      </div>
    );
  }
}
