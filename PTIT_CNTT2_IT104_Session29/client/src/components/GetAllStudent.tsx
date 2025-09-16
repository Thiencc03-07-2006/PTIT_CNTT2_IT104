import axios from "axios";

const getAllStudent = async () => {
  try {
    const res = await axios.get("http://localhost:3000/students");
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};
getAllStudent();
export default function GetAllStudent() {
  return (
    <div>
      <h3>Bai 3+4</h3>
    </div>
  );
}
