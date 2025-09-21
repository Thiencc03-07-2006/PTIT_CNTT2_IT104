import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const auth = useSelector((state: any) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      email === auth.registered.email &&
      password === auth.registered.password
    ) {
      dispatch({
        type: "LOGIN",
        payload: { email: email, password: password },
      });
      navigate("/");
    } else {
      alert("Sai email hoac mat khau");
    }
  };
  useEffect(() => {
    if (auth.registered.email && auth.registered.password) {
      setEmail(auth.registered.email);
      setPassword(auth.registered.password);
    }
  }, [auth]);
  return (
    <form
      onSubmit={handleLogin}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <h3>Dang nhap</h3>
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
