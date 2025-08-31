import React, { useRef, useState } from "react";

export default function RenderCounter() {
  const [input, setInput] = useState("");
  const count = useRef<number>(0);
  count.current += 1;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <h3>Bai 3</h3>
      <input onChange={handleChange} type="text" value={input} />
      <br />
      <p>{count.current}</p>
    </div>
  );
}
