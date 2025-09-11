import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

export default function Student() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  const [inputLink, setInput] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchParams({ name: inputLink.trim() });
  };
  return (
    <div>
      {name ? (
        <h1>name={name}</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={inputLink}
            type="text"
            placeholder="Nhap tu khoa tim kiem"
          />
          <button>Tim Kiem</button>
        </form>
      )}
    </div>
  );
}
