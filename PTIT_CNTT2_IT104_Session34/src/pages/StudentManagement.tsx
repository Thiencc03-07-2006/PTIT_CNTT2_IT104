import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import type { Student } from "../utils/types";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import Toolbar from "../components/Toolbar";
// import { useState } from 'react';

const StudentManagement = () => {
  const students = useSelector((state: any) => state.students);
  const status = useSelector((state: any) => state.form);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const [idStudent, setIdStudent] = useState("");
  // const handleAddStudent = (student: Student) => {
  //   setStudents([...students, student]);
  // };
  const handleAddStudent = (students: Student) => {
    if (status === "add" || status === "update") {
      dispatch({ type: status + "Student", payload: students });
    } else {
      console.log("? Khong them hoac sua thanh cong");
    }
  };

  // const handleSearch = (keyword: string) => {
  //   setStudents((prev) =>
  //     prev.filter((s) => s.name.toLowerCase().includes(keyword.toLowerCase()))
  //   );
  // };

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar setSearch={setSearch} />
        <StudentList
          students={students}
          setIdStudent={setIdStudent}
          search={search}
        />
      </div>
      <StudentForm onSubmit={handleAddStudent} idStudent={idStudent} />
    </div>
  );
};

export default StudentManagement;
