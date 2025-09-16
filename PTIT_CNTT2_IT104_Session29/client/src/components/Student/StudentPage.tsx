import { useEffect, useState } from "react";
import Header from "./Header";
import Table from "./Table";
import axios from "axios";
interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}
export default function StudentPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [isOpenDelete, setIsOpenDelete] = useState<string | number | boolean>(
    false
  );
  const getAllStudent = async () => {
    try {
      const res = await axios.get("http://localhost:3000/students");
      setStudents(res.data);
    } catch (error) {
      console.error("Loi khi lay danh sach: ", error);
    }
  };
  const deleteStudent = async () => {
    try {
      await axios.delete(`http://localhost:3000/students/${isOpenDelete}`);
      setIsOpenDelete(false);
    } catch (error) {
      console.error("Loi khi xoa: ", error);
    }
  };
  useEffect(() => {
    getAllStudent();
  });
  return (
    <div>
      <Header />
      <Table students={students} setIsOpenDelete={setIsOpenDelete} />
      {isOpenDelete && (
        <div className="fixed top-0 left-0 flex justify-center items-center bg-[#000000cc] w-[100vw] h-[100vh]">
          <div className="min-w-[300px] min-h-[200px] bg-white flex flex-col justify-between">
            <div className="p-[5px] border-b-[2px] border-gray-500 flex justify-between">
              <h1>Xoa sinh vien</h1>
              <button onClick={() => setIsOpenDelete(false)}>❌</button>
            </div>
            <div className="p-[10px]">
              <p>
                Ban chan chan muon xoa sinh vien{" "}
                {students.find((t) => t.id === isOpenDelete)?.student_name}
              </p>
            </div>
            <div className="flex justify-end gap-[10px] p-[10px]">
              <button
                onClick={() => setIsOpenDelete(false)}
                className="p-[5px] "
              >
                Huy
              </button>
              <button
                onClick={() => deleteStudent()}
                className="p-[5px] bg-red-500 text-white"
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
