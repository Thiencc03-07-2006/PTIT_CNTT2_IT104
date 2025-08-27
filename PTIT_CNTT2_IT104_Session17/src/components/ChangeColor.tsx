import React, { useState } from "react";

export default function ChangeColor() {
  const [color, setColor] = useState("#000000");
  const handleClick = () => {
    const item = "123456789ABCDEF";
    let newColer = "#";
    for (let i = 0; i < 6; i++) {
      newColer += item[Math.floor(Math.random() * 16)];
    }
    setColor(newColer);
  };
  return (
    <div>
      <h3>Bai 3</h3>
      <p style={{ color: color }}>Tieu de van ban</p>
      <button onClick={handleClick}>Doi mau</button>
    </div>
  );
}
