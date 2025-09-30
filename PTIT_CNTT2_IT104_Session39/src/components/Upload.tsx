import React, { useState } from "react";
import axios from "axios";
export default function Upload() {
  const [data, setData] = useState<{ file: File | null; description: string }>({
    file: null,
    description: "",
  });
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.name === "file" ? e.target.files[0] : e.target.value,
    });
  };
  const hanldeUpload = async () => {
    if (!data.file) {
      alert("Vui long them file vao");
      return;
    }
    const formData = new FormData();
    formData.append("file", data.file);
    formData.append("upload_preset", "re_upload");
    formData.append("cloud_name", "dk4uhrl7t");
    formData.append("context", `caption=${data.description}`);
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dk4uhrl7t/image/upload",
        formData
      );
      setImg(res.data.secure_url);
      setDescription(data.description);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h3>Bai 1</h3>
      <input name="file" onChange={handleChange} type="file" />
      <br />
      <input name="description" onChange={handleChange} type="text" />
      <br />
      <button onClick={hanldeUpload}>Upload</button>
      {img && (
        <div>
          <img src={img} width={200} />
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}
