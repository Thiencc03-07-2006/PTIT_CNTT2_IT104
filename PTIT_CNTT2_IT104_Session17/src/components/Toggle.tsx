import React, { useState } from "react";

export default function Toggle() {
  const [display, setDisplay] = useState(true);
  const handleClick = () => {
    setDisplay(!display);
  };
  return (
    <div>
      <h4>Bai 4</h4>
      <button onClick={handleClick}>{display ? "An" : "Hien"}</button>
      {display && <p>Tieu de van ban</p>}
    </div>
  );
}
