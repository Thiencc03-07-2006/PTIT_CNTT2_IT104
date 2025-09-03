import { useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });
  const [alert, setAlert] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    setAlert({ ...user });
  };
  return (
    <div>
      <h3>Bai 2</h3>
      <h4>Thong tin nguoi dung</h4>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        value={user.name}
        placeholder="Nhap ten"
      />
      <br />
      <input
        onChange={handleChange}
        type="text"
        name="email"
        value={user.email}
        placeholder="Nhap email"
      />
      <br />
      <button onClick={handleSubmit}>Gui</button>
      {alert.name !== "" && alert.email !== "" && (
        <div>
          <p>Ten: {alert.name}</p>
          <p>Email: {alert.email}</p>
        </div>
      )}
    </div>
  );
}
