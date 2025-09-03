import React, { useState } from "react";

export default function PTIT_CNTT2_IT104_Session20_Bai01() {
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h3>Bai 1</h3>
      <h4>Kiem tra do dai chuoi</h4>
      <input onChange={handleChange} type="text" value={text} />
      {text.length > 5 && <p>Chuoi nhap vao dai hon 5 ky tu</p>}
    </div>
  );
}
