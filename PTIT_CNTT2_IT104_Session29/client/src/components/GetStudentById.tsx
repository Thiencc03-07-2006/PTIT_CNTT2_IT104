import axios from "axios";
const getStudentById = async (id: number | string) => {
  try {
    const res = await axios.get(`http://localhost:3000/students/${id}`);
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};
getStudentById(3);
getStudentById(6);
export default function GetStudentById() {
  return (
    <div>
      <h3>Bai 5</h3>
    </div>
  );
}
