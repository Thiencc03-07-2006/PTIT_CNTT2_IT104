import React, { useState } from "react";
import axios from "axios";
interface Product {
  id?: string;
  name: string;
  price: number;
  description?: string;
  imageUrl: string | File | null;
}
export default function ListProduct() {
  const initInput = {
    name: "",
    price: 0,
    description: "",
    imageUrl: null,
  };
  const [listProduct, setListProduct] = useState<Product[]>([]);
  const [inputValue, setInputValue] = useState<Product>(initInput);
  const [validate, setValidate] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [e.target.name]:
        e.target.name === "imageUrl"
          ? e.target.files[0]
          : e.target.name === "price"
          ? Number(e.target.value)
          : e.target.value,
    });
  };
  const createProduct = async () => {
    const newProduct: Product = {
      id: Date.now().toString(),
      name: inputValue.name.trim(),
      price: inputValue.price,
      description: inputValue.description,
    };
    const formData = new FormData();
    formData.append("file", inputValue.imageUrl);
    formData.append("upload_preset", "re_upload");
    formData.append("cloud_name", "dk4uhrl7t");
    if (validate.includes("description")) {
      formData.append("context", `caption=${inputValue.description}`);
    }
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dk4uhrl7t/image/upload",
        formData
      );
      newProduct.imageUrl = res.data.secure_url;
      console.log(res);
    } catch (error) {
      console.error(error);
    }
    setListProduct([...listProduct, newProduct]);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mess = [];
    if (inputValue.name.trim() === "") {
      mess.push("name");
    }
    if (inputValue.price <= 0) {
      mess.push("price");
    }
    if (inputValue.description?.trim()) {
      mess.push("description");
    }
    if (!inputValue.imageUrl) {
      mess.push("price");
    }
    setValidate(mess);
    if (mess.filter((t) => t !== "description").length === 0) {
      createProduct();
      setInputValue(initInput);
    }
  };
  const handleDelete = (id: string) => {
    setListProduct(listProduct.filter((t) => t.id !== id));
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="border border-black rounded-[10px] p-[10px] w-full flex gap-[10px] flex-col"
      >
        <p>Ten san phom</p>
        <input
          className="border border-black rounded-[5px] p-[5px] w-full"
          onChange={handleChange}
          value={inputValue.name}
          name="name"
          type="text"
        />
        {validate.includes("name") && (
          <p className="text-red-500">Ten khong duoc de trong</p>
        )}
        <p>Gia san phom</p>
        <input
          className="border border-black rounded-[5px] p-[5px] w-full"
          onChange={handleChange}
          value={inputValue.price}
          name="price"
          type="number"
        />
        {validate.includes("price") && (
          <p className="text-red-500">Gia khong duoc de trong</p>
        )}
        <p>Mo ta san phom</p>
        <input
          className="border border-black rounded-[5px] p-[5px] w-full"
          onChange={handleChange}
          value={inputValue.description}
          name="description"
          type="text"
        />
        <p>Anh san phom</p>
        <input
          className="border border-black rounded-[5px] p-[5px] w-full"
          onChange={handleChange}
          name="imageUrl"
          type="file"
          required
        />
        {validate.includes("imageUrl") && (
          <p className="text-red-500">Vui long them anh</p>
        )}
        <button className="border border-black rounded-[5px] p-[5px] w-full bg-blue-500 text-white">
          Them san pham
        </button>
      </form>
      <div className="flex gap-[10px]">
        {listProduct.map((t) => (
          <div
            key={t.id}
            className="rounded-[10px] border border-black p-[10px] flex gap-[10px] flex-col"
          >
            <img
              className="object-cover size-[200px]"
              src={t.imageUrl}
              alt=""
            />
            <h4>{t.name + " - " + t.price.toLocaleString("vi-VN") + " đ"}</h4>
            <p>{t.description ? t.description : "Khong co mo ta"}</p>
            <button
              onClick={() => {
                if (confirm("Ban co muon xoa")) handleDelete(t.id);
              }}
              className="text-red-500 w-full border border-black  rounded-[10px]"
            >
              Xoa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
