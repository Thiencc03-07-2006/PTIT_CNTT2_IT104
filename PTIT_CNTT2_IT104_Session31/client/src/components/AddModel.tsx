import { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import axios from "axios";
interface post {
  id: number | string;
  title: string;
  img: string;
  createAt: string;
  status: boolean;
  content: string;
}
export default function AddModel({
  posts,
  setIsOpenModel,
  mode,
}: {
  posts: post[];
  setIsOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
  mode: boolean | string | number;
}) {
  const [inputInfo, setInputInfo] = useState<{
    title: string;
    img: string;
    content: string;
  }>({ title: "", img: "", content: "" });
  useEffect(() => {
    const editInput = posts.find((t) => t.id === mode);
    if (editInput) {
      setInputInfo({
        title: editInput.title,
        img: editInput.img,
        content: editInput.content,
      });
    } else {
      reset();
    }
  }, [mode]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputInfo({ ...inputInfo, [e.target.name]: e.target.value });
  };
  const reset = () => {
    setInputInfo({ title: "", img: "", content: "" });
  };
  const addItem = async () => {
    try {
      await axios.post(`http://localhost:3000/posts/`, {
        ...inputInfo,
        createAt: new Date(),
        status: true,
      });
    } catch (error) {
      console.error("Loi khi them: ", error);
    }
  };
  const editItem = async () => {
    try {
      await axios.patch(`http://localhost:3000/posts/${mode}`, {
        ...inputInfo,
      });
    } catch (error) {
      console.error("Loi khi sua: ", error);
    }
  };
  const addOrEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      inputInfo.title.trim() &&
      inputInfo.img.trim() &&
      inputInfo.content.trim() &&
      posts.every(
        (t) =>
          t.id === mode ||
          t.title.toLowerCase() !== inputInfo.title.trim().toLowerCase()
      )
    ) {
      if (mode) {
        editItem();
      } else {
        addItem();
      }
      reset();
      setIsOpenModel(false);
    } else {
      alert("Gia tri khong hop le");
    }
  };
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-[100vw] h-[100vh] bg-[#000000cc]">
      <div className="flex flex-col bg-white p-[10px] gap-[10px]">
        <div className="flex justify-between">
          <h3 className="text-2xl">
            <strong>{mode ? "Sua" : "Them"} moi bai viet</strong>
          </h3>
          <button
            onClick={() => {
              setIsOpenModel(false);
            }}
          >
            <strong>✕</strong>
          </button>
        </div>
        <form
          onSubmit={addOrEdit}
          action=""
          className="flex flex-col gap-[10px]"
        >
          <strong>Ten bai viet</strong>
          <input
            onChange={handleChange}
            className="w-[100%] border-1 rounded-[5px] p-[5px]"
            name="title"
            type="text"
            value={inputInfo.title}
          />
          <strong>Hinh anh</strong>
          <input
            onChange={handleChange}
            className="w-[100%] border-1 rounded-[5px] p-[5px]"
            name="img"
            type="text"
            value={inputInfo.img}
          />
          <strong>Noi dung</strong>
          <div className="container">
            <MDEditor
              value={inputInfo.content}
              onChange={(val) =>
                setInputInfo({ ...inputInfo, content: val || "" })
              }
            />
          </div>
          <div className="flex justify-end gap-[10px]">
            <button
              onClick={() => reset()}
              type="button"
              className="border-1 border-gray-500 p-[10px] rounded-[10px]"
            >
              Lam moi
            </button>
            <button className="bg-blue-500 text-white p-[10px] rounded-[10px]">
              Xuat ban
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
