import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "REGISTER", payload: { email, password } });
    navigate("/login");
  };
  return (
    <form
      onSubmit={handleRegister}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <h3>Dang ky</h3>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Nhap email"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Nhap mat khau"
        required
      />
      <button style={{ background: "blue", color: "white" }}>Dang ky</button>
    </form>
  );
}
