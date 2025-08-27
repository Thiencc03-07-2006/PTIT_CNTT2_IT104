import { useState } from "react";

export default function PTIT_CNTT2_IT104_Session17_Bai01() {
  const [name] = useState("Cao Chi Thien");
  return (
    <div>
      <h3>Bai 1</h3>
      <p>Ho va ten: {name}</p>
    </div>
  );
}
