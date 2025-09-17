import { useState } from "react";
import axios from "axios";
interface Item {
  id: number | string;
  text: string;
  status: boolean;
}
export default function List({
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
  const [sort, setSort] = useState<null | boolean>(null);
  const [modelStatus, setModelStatus] = useState<boolean | string | number>(
    false
  );
  const [deleteMutiModel, setDeleteMutiModel] = useState<boolean | null>(null);
  const doneWork = async (
    id: number | string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      await axios.patch(`http://localhost:3000/todoList/${id}`, {
        status: e.target.checked,
      });
    } catch (error) {
      console.error("Loi khi thay doi hoan thanh: ", error);
    } finally {
      getTodoList();
    }
  };
  const deleteMuti = async (deleteAll: boolean) => {
    try {
      const deleteItems = deleteAll
        ? todoList
        : todoList.filter((t) => t.status === true);
      await Promise.all(
        deleteItems.map((t) =>
          axios.delete(`http://localhost:3000/todoList/${t.id}`)
        )
      );
      setDeleteMutiModel(null);
    } catch (error) {
      console.error("Loi khi xoa hang loat: ", error);
    } finally {
      getTodoList();
    }
  };
  const deleteItem = async () => {
    try {
      await axios.delete(`http://localhost:3000/todoList/${modelStatus}`);
      setModelStatus(false);
    } catch (error) {
      console.error("Loi khi xoa: ", error);
    } finally {
      getTodoList();
    }
  };
  return (
    <div className="p-[24px] flex flex-col gap-[24px] flex-1">
      <div className="flex justify-center gap-[10px]">
        <button
          className={`border-gray-500 border-[1px] rounded-[10px] p-[10px] ${
            sort === null ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => {
            setSort(null);
          }}
        >
          Tat ca
        </button>
        <button
          className={`border-gray-500 border-[1px] rounded-[10px] p-[10px] ${
            sort === true ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => {
            setSort(true);
          }}
        >
          Hoan thanh
        </button>
        <button
          className={`border-gray-500 border-[1px] rounded-[10px] p-[10px] ${
            sort === false ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => {
            setSort(false);
          }}
        >
          Dang thuc hien
        </button>
      </div>
      <div className="flex flex-col gap-[24px] h-[255px] overflow-y-scroll">
        {(sort === null
          ? todoList
          : todoList.filter((t) => t.status === sort)
        ).map((t) => (
          <div
            className={`flex gap-[10px] justify-between border-gray-500 border-[1px] rounded-[10px] p-[10px] ${
              t.id === mode ? "bg-yellow-500" : ""
            }`}
            key={t.id}
          >
            <div
              className={`flex gap-[10px] ${t.status ? "line-through" : ""}`}
            >
              <input
                onChange={(e) => {
                  doneWork(t.id, e);
                }}
                checked={t.status}
                type="checkbox"
              />
              <p>{t.text}</p>
            </div>
            <div className="flex gap-[10px]">
              <button onClick={() => setMode(t.id)}>✏️</button>
              <button onClick={() => setModelStatus(t.id)}>❌</button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-[10px] items-end flex-1">
        <button
          onClick={() => setDeleteMutiModel(false)}
          className="bg-red-500 text-white rounded-[10px] p-[10px] flex-1"
        >
          Xoa cong viec hoan thanh
        </button>
        <button
          onClick={() => setDeleteMutiModel(true)}
          className="bg-red-500 text-white rounded-[10px] p-[10px] flex-1"
        >
          Xoa tat ca cong viec
        </button>
      </div>
      {modelStatus && (
        <div className="fixed top-0 left-0 flex justify-center items-center bg-[#000000cc] w-[100vw] h-[100vh]">
          <div className="min-w-[300px] min-h-[200px] bg-white flex flex-col justify-between">
            <div className="p-[5px] border-b-[2px] border-gray-500 flex justify-between">
              <h1>Xoa cong viec</h1>
              <button onClick={() => setModelStatus(false)}>❌</button>
            </div>
            <div className="p-[10px]">
              <p>
                Ban chan chan muon xoa cong viec nay{" "}
                {todoList.find((t) => t.id === modelStatus)?.text}
              </p>
            </div>
            <div className="flex justify-end gap-[10px] p-[10px]">
              <button
                onClick={() => setModelStatus(false)}
                className="p-[5px] rounded-10px "
              >
                Huy
              </button>
              <button
                onClick={() => deleteItem()}
                className="p-[5px] rounded-10px bg-red-500 text-white"
              >
                Xoa
              </button>
            </div>
          </div>
        </div>
      )}
      {deleteMutiModel !== null && (
        <div className="fixed top-0 left-0 flex justify-center items-center bg-[#000000cc] w-[100vw] h-[100vh]">
          <div className="min-w-[300px] min-h-[200px] bg-white flex flex-col justify-between">
            <div className="p-[5px] border-b-[2px] border-gray-500 flex justify-between">
              <h1>Xoa cong viec</h1>
              <button onClick={() => setDeleteMutiModel(null)}>❌</button>
            </div>
            <div className="p-[10px]">
              <p>
                {deleteMutiModel
                  ? "Ban co muon xoa tat ca cong viec"
                  : "Ban co muon xoa cac cong viec hoan thanh"}
              </p>
            </div>
            <div className="flex justify-end gap-[10px] p-[10px]">
              <button
                onClick={() => setDeleteMutiModel(null)}
                className="p-[5px] rounded-10px "
              >
                Huy
              </button>
              <button
                onClick={() => deleteMuti(deleteMutiModel)}
                className="p-[5px] rounded-10px bg-red-500 text-white"
              >
                Xoa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
