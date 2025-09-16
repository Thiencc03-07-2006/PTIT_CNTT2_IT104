import axios from "axios";
const createStudent = async (student: {
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  create_at: Date;
}) => {
  try {
    const res = await axios.post("http://localhost:3000/students", student);
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};
const testStudent = {
  student_name: "Hung",
  email: "hung@gmail.com",
  address: "Ha Noi",
  phone: "0912345678",
  status: true,
  create_at: new Date(),
};
export default function Header() {
  return (
    <div className="flex justify-between p-[10px] bg-[#435d7d] text-white items-center">
      <h1 className="text-2xl">
        Quan ly <strong>sinh vien</strong>
      </h1>
      <button
        onClick={() => createStudent(testStudent)}
        className="p-[5px] bg-[#28a745]"
      >
        ➕ Them moi sinh vien
      </button>
    </div>
  );
}
