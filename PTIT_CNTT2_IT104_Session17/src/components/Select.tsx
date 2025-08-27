import React, { useState } from "react";

export default function Select() {
  const [city, setCity] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };
  return (
    <div>
      <h3>Bài 7</h3>
      <p>Thanh pho: {city}</p>
      <select onChange={handleChange} value={city}>
        <option value="">-- Chon thanh pho --</option>
        <option value="Ha Noi">Ha Noi</option>
        <option value="Ho Chi Minh">Ho Chi Minh</option>
      </select>
    </div>
  );
}
