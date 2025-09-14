import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductList from "./ProductList";
export default function ProducList2() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputSearch, setInput] = useState("");
  useEffect(() => {
    setInput(searchParams.get("search") || "");
  }, [searchParams]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputSearch.trim() === "") {
      setSearchParams({});
    } else {
      setSearchParams({ search: inputSearch });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-[10px]">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={inputSearch}
          className="border-gray-500 border-[2px]"
        />
        <button className="border-gray-500 border-[2px]">Tim kiem</button>
      </form>
      <ProductList />
    </div>
  );
}
