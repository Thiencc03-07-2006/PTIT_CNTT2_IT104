import { useEffect, useState } from "react";
import Header from "./Header";
import Input from "./Input";
import List from "./List";
import axios from "axios";
interface Item {
  id: number | string;
  text: string;
  status: boolean;
}
export default function TodoListPage() {
  const [todoList, setTodoList] = useState<Item[]>([]);
  const [mode, setMode] = useState<boolean | number | string>(false);
  const [loading, setLoading] = useState(true);
  const getTodoList = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/todoList");
      setTodoList(res.data);
    } catch (error) {
      console.error("Loi khi tai du lieu: ", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTodoList();
  }, []);
  return (
    <div className="flex flex-col h-[100vh]">
      <Header />
      <Input
        todoList={todoList}
        mode={mode}
        setMode={setMode}
        getTodoList={getTodoList}
      />
      <List
        todoList={todoList}
        mode={mode}
        setMode={setMode}
        getTodoList={getTodoList}
      />
      {loading && (
        <div className="fixed top-0 left-0 flex justify-center items-center h-[100vh] w-[100vw] bg-[#000000cc]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      )}
    </div>
  );
}
