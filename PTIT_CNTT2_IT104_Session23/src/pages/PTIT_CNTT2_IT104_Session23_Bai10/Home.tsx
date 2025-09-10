import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [nowAcc] = useState<{ id: number; email: string; password: string }>(
    JSON.parse(localStorage.getItem("nowAcc") || "{}")
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!Object.keys(nowAcc).includes("email")) navigate("/login");
  });
  return (
    <div>
      <h1>Home page</h1>
      <p>{nowAcc && nowAcc.email}</p>
    </div>
  );
}
