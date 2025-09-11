import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  onLogin: () => void;
}
export default function Login({ onLogin }: Props) {
  const navigate = useNavigate();
  const [trueAcc] = useState<{ email: string; password: string; role: string }>(
    { email: "tuyetthien@gmail.com", password: "123Admin", role: "Admin" }
  );
  const [inputAcc, setInput] = useState<{
    email: string;
    password: string;
    role: string;
  }>({ email: "", password: "", role: "" });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      inputAcc.email.trim() === trueAcc.email &&
      inputAcc.password.trim() === trueAcc.password &&
      inputAcc.role.trim() === trueAcc.role
    ) {
      onLogin();
      navigate("/account");
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInput({ ...inputAcc, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Trang Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputAcc.email}
          name="email"
          type="email"
          placeholder="Nhap email"
        ></input>
        <br />
        <input
          onChange={handleChange}
          value={inputAcc.password}
          name="password"
          type="password"
          placeholder="Nhap mat khau"
        ></input>
        <br />
        <select onChange={handleChange} value={inputAcc.role} name="role" id="">
          <option value="">Chon quyen</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <br />
        <button>Dang nhap</button>
      </form>
    </div>
  );
}
