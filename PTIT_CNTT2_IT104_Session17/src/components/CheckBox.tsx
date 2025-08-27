import React, { useState } from "react";

export default function CheckBox() {
  const [hobbies, setHobbies] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setHobbies([...hobbies, e.target.value]);
    } else {
      setHobbies([...hobbies].filter((t) => t !== e.target.value));
    }
  };
  return (
    <div>
      <h3>Bai 8</h3>
      <p>
        So thich: [
        {hobbies
          .map((t) => {
            return t;
          })
          .join(", ")}
        ]
      </p>
      <input onChange={handleChange} type="checkbox" value="Di choi" />
      Di choi
      <br />
      <input onChange={handleChange} type="checkbox" value="Code" />
      Code
      <br />
      <input onChange={handleChange} type="checkbox" value="Boi loi" />
      Boi loi
      <br />
      <input onChange={handleChange} type="checkbox" value="Nhay day" />
      Nhay day
      <br />
    </div>
  );
}
