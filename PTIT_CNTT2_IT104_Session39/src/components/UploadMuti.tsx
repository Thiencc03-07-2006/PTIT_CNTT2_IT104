import React, { useState } from "react";
import axios from "axios";
export default function UploadMuti() {
  const [data, setData] = useState<{
    files: FileList | null;
    description: string;
  }>({
    files: null,
    description: "",
  });
  const [imgs, setImgs] = useState([]);
  const [description, setDescription] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.name === "files" ? e.target.files : e.target.value,
    });
  };
  const hanldeUpload = async () => {
    if (!data.files || data.files.length === 0) {
      alert("Vui long them file vao");
      return;
    }
    const temp: string[] = [];
    for (let i = 0; i < data.files.length; i++) {
      const formData = new FormData();
      formData.append("file", data.files[i]);
      formData.append("upload_preset", "re_upload");
      formData.append("context", `caption=${data.description}`);
      try {
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dk4uhrl7t/image/upload",
          formData
        );
        temp.push(res.data.secure_url);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }

    setImgs(temp);
    setDescription(data.description);
  };
  return (
    <div>
      <h3>Bai 2</h3>
      <input name="files" onChange={handleChange} type="file" multiple />
      <br />
      <input name="description" onChange={handleChange} type="text" />
      <br />
      <button onClick={hanldeUpload}>Upload</button>
      {imgs.length !== 0 && (
        <div>
          {imgs.map((t, i) => (
            <img key={i} src={t} width={200} />
          ))}
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}
