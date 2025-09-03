import { useEffect, useState } from "react";

export default function PageTitle() {
  const [name, setName] = useState("");
  useEffect(() => {
    if (name.trim() === "") {
      document.title = "Trang web cua ban";
    } else {
      document.title = `Trang web cua ${name}`;
    }
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h3>Bai 4</h3>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Nhap ten cua ban"
        value={name}
      />
      <p>Tieu de thay doi theo input</p>
    </div>
  );
}
