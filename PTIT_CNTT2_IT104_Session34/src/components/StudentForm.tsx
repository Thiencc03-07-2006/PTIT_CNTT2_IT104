import {
  Button,
  MenuItem,
  Select,
  TextField,
  type SelectChangeEvent,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import type { Student } from "../utils/types";
import { useDispatch, useSelector } from "react-redux";

interface StudentFormProps {
  onSubmit: (student: Student) => void;
  idStudent: string;
}

type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
type FormChangeEvent = InputChangeEvent | SelectChangeEvent;

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit, idStudent }) => {
  const students = useSelector((state) => state.students);
  const formStatus = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [form, setForm] = React.useState<Student>({
    id: "",
    fullName: "",
    age: 0,
    gender: "Nam",
    dateOfBirth: "",
    placeOfBirth: "",
    address: "",
  });
  const [validateMess, setValidateMess] = useState<string[]>([]);
  const handleChange = (e: FormChangeEvent) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setValidateMess(validateMess.filter((t) => t !== name));
  };
  useEffect(() => {
    if (idStudent !== "") {
      const studentTemp = students.find((t) => t.id === idStudent);
      setForm({
        id: studentTemp.id,
        fullName: studentTemp.fullName,
        age: studentTemp.age,
        gender: studentTemp.gender,
        dateOfBirth: studentTemp.dateOfBirth,
        placeOfBirth: studentTemp.placeOfBirth,
        address: studentTemp.address,
      });
    }
  }, [idStudent, formStatus]);
  const handleSubmit = () => {
    const errorMess: string[] = [];
    if (formStatus !== "info") {
      if (form.id.trim() === "") {
        errorMess.push("id");
      } else if (
        formStatus === "update" &&
        students
          .filter((t) => t.id !== idStudent)
          .some((t) => t.id === form.id.trim())
      ) {
        errorMess.push("id");
      } else if (students.some((t) => t.id === form.id.trim())) {
        errorMess.push("id");
      }
    }
    if (form.fullName.trim() === "") {
      errorMess.push("fullName");
    }
    if (!form.age || form.age < 0) {
      errorMess.push("age");
    }
    if (!form.gender) {
      errorMess.push("gender");
    }
    if (!form.dateOfBirth || new Date(form.dateOfBirth) > new Date()) {
      errorMess.push("dateOfBirth");
    }
    if (!form.placeOfBirth.trim()) {
      errorMess.push("placeOfBirth");
    }
    if (!form.address.trim()) {
      errorMess.push("address");
    }
    setValidateMess(errorMess);
    console.log(validateMess);
    if (errorMess.length === 0) {
      onSubmit({
        id: form.id.trim(),
        fullName: form.fullName.trim(),
        age: form.age,
        gender: form.gender,
        dateOfBirth: form.dateOfBirth,
        placeOfBirth: form.placeOfBirth.trim(),
        address: form.address.trim(),
      });
      setForm({
        id: "",
        fullName: "",
        age: 0,
        gender: "Nam",
        dateOfBirth: "",
        placeOfBirth: "",
        address: "",
      });
      dispatch({ type: "add" });
    }
  };

  return (
    <div className="w-1/3 p-4 border rounded-xl shadow">
      <h2 className="font-semibold mb-4">Thông Tin Sinh Viên</h2>
      <div className="flex flex-col gap-4">
        <TextField
          disabled={formStatus === "info"}
          error={validateMess.includes("id")}
          label={
            validateMess.includes("id")
              ? form.id.trim() === ""
                ? "Mã sinh viên không được để trống"
                : "Mã sinh viên đã tồn tại"
              : "Mã sinh viên"
          }
          name="id"
          value={form.id}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          disabled={formStatus === "info"}
          error={validateMess.includes("fullName")}
          label={
            validateMess.includes("fullName")
              ? "Tên sinh viên không được để trống"
              : "Tên sinh viên"
          }
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          disabled={formStatus === "info"}
          error={validateMess.includes("age")}
          label={
            validateMess.includes("age")
              ? !form.age
                ? "Tuổi không được để trống"
                : "Tuổi không được âm"
              : "Tuổi"
          }
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          fullWidth
        />
        <Select
          disabled={formStatus === "info"}
          error={validateMess.includes("gender")}
          name="gender"
          value={form.gender}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="Nam">Nam</MenuItem>
          <MenuItem value="Nữ">Nữ</MenuItem>
        </Select>
        <TextField
          disabled={formStatus === "info"}
          error={validateMess.includes("dateOfBirth")}
          type="date"
          label={
            validateMess.includes("dateOfBirth")
              ? form.dateOfBirth.trim() === ""
                ? "Ngày sinh không được để trống"
                : "Ngày sinh không được là tương lai"
              : "Ngày sinh"
          }
          name="dateOfBirth"
          value={form.dateOfBirth}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          disabled={formStatus === "info"}
          error={validateMess.includes("placeOfBirth")}
          label={
            validateMess.includes("placeOfBirth")
              ? "Nơi sinh không được để trống"
              : "Nơi sinh"
          }
          name="placeOfBirth"
          value={form.placeOfBirth}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          disabled={formStatus === "info"}
          error={validateMess.includes("address")}
          label={
            validateMess.includes("address")
              ? "Địa chỉ không được để trống"
              : "Địa chỉ"
          }
          name="address"
          value={form.address}
          onChange={handleChange}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {formStatus === "update" ? "Update" : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default StudentForm;
