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
createStudent({
  student_name: "Hung",
  email: "hung@gmail.com",
  address: "Ha Noi",
  phone: "0912345678",
  status: true,
  create_at: new Date(),
});
export default function CreateStudent() {
  return (
    <div>
      <h3>Bai 6</h3>
    </div>
  );
}
