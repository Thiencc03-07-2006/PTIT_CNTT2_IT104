import React, { useCallback, useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#ffffff");
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  }, []);
  return (
    <div>
      <h3>Bai 4</h3>
      <p>Mau nguoi dung chon</p>
      <input onChange={handleChange} type="color" />
      <p>Mau hien thi</p>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: color }}
      ></div>
    </div>
  );
}
