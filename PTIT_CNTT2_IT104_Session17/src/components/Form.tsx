import React, { useState } from "react";

export default function Form() {
  const [input, setInput] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <h3>Bai 5</h3>
      <input onChange={handleChange} type="text" value={input} />
      <p>{input}</p>
    </div>
  );
}
