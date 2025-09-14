import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Trang khong ton tai</h1>
      <br />
      <Link to="/">
        <button className="bg-blue-500 mr-[10px]">Ve trang chu</button>
      </Link>
      <button className="bg-blue-500" onClick={() => navigate(-1)}>
        Quai lai
      </button>
    </div>
  );
}
