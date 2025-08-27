import React, { useState } from "react";

export default function CounText() {
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h3>Bai 6</h3>
      <textarea onChange={handleChange} value={text}></textarea>
      <p>So ky tu: {text.length}</p>
    </div>
  );
}
