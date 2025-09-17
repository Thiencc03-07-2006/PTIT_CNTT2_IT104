import axios from "axios";
import React, { useState, useEffect } from "react";
interface Item {
  id: number | string;
  text: string;
  status: boolean;
}
export default function Input({
  todoList,
  mode,
  setMode,
  getTodoList,
}: {
  todoList: Item[];
  mode: boolean | number | string;
  setMode: React.Dispatch<React.SetStateAction<boolean | number | string>>;
  getTodoList: () => void;
}) {
  const [inputText, setInput] = useState("");
  const [mess, setMess] = useState<number>(0);
  useEffect(() => {
    if (mode) {
      const index = todoList.findIndex((t) => t.id === mode);
      if (index !== -1) {
        setInput(todoList[index].text);
      } else {
        setMode(false);
      }
    } else {
      setMode(false);
    }
  }, [mode, setMode]);
  const newItem = async () => {
    try {
      await axios.post("http://localhost:3000/todoList/", {
        text: inputText.trim(),
        status: false,
      });
    } catch (error) {
      console.error("Loi khi them: ", error);
    } finally {
      getTodoList();
    }
  };
  const editItem = async () => {
    try {
      await axios.patch(`http://localhost:3000/todoList/${mode}`, {
        text: inputText.trim(),
      });
    } catch (error) {
      console.error("Loi khi sua: ", error);
    } finally {
      getTodoList();
    }
  };
  const handleNewItemOrEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      if (
        todoList.some(
          (t) =>
            t.id !== mode &&
            t.text.toLowerCase() === inputText.trim().toLowerCase()
        )
      ) {
        setMess(2);
      } else {
        if (mode === false) {
          newItem();
        } else {
          editItem();
          setMode(false);
        }
        setInput("");
        setMess(0);
      }
    } else {
      setMess(1);
    }
  };
  return (
    <div className="pl-[24px] pr-[24px]">
      <form
        onSubmit={handleNewItemOrEdit}
        className="p-[10px] flex flex-col gap-[10px] border-gray-500 border-[1px] rounded-[10px]"
      >
        <input
          className="w-[100%] border-gray-500 border-[1px] rounded-[10px] p-[10px]"
          type="text"
          value={inputText}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Nhap ten cong viec"
        />
        <div className="text-red-500">
          {mess === 1 ? (
            <p>Ten cong viec khong duoc de trong</p>
          ) : mess === 2 ? (
            <p>Cong viec da ton tai</p>
          ) : (
            ""
          )}
        </div>
        <div className="flex text-white">
          <button className="w-[100%] bg-blue-500 rounded-[10px] p-[10px]">
            {mode ? "Sua cong viec" : "Them cong viec"}
          </button>
          {mode ? (
            <button
              onClick={() => setMode(false)}
              className="bg-red-500 rounded-[10px] p-[10px]"
            >
              Huy
            </button>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}
