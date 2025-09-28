import React, { useEffect, useMemo, useState } from "react";

import { Button } from "@mui/material";
import type { Student } from "./features/students/types";
import StudentForm from "./features/students/StudentForm";
import StudentList from "./features/students/StudentList";
import StudentSearchSortFilter from "./features/students/StudentSearchSortFilter";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";
import { useAppDispatch } from "./hooks/useAppDispatch";
import {
  addStudent,
  deleteStudent,
  fetchData,
  updateStudent,
} from "./features/students/studentSlice";
const App: React.FC = () => {
  const { students, status } = useSelector(
    (state: RootState) => state.students
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const [validate, setValidate] = useState<string[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Partial<Student> | undefined>(
    undefined
  );

  // Search / filter / sort state
  const [search, setSearch] = useState("");
  const [gradeFilter, setGradeFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"name" | "age">("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const grades = useMemo(() => {
    const g = Array.from(new Set(students.map((s) => s.grade))).sort();
    return g;
  }, [students]);

  const handleAddClick = () => {
    setEditing(undefined);
    setOpenForm(true);
  };

  const handleSubmit = (data: {
    id?: string;
    name: string;
    age: number;
    grade: string;
  }) => {
    const mess: string[] = [];
    if (data.name.trim().length === 0) {
      mess.push("nameEmpty");
    } else if (
      students.some(
        (t) => t.name.trim().toLowerCase() === data.name.trim().toLowerCase()
      )
    ) {
      mess.push("nameDup");
    }
    if (!data.age || data.age < 0) {
      mess.push("age");
    }
    if (data.grade.trim().length === 0) {
      mess.push("grade");
    }
    if (mess.length === 0) {
      if (data.id) {
        // update
        dispatch(updateStudent(data));
      } else {
        // create
        const id = Date.now().toString();
        dispatch(addStudent({ id, ...data }));
      }
      setOpenForm(false);
    } else {
      setValidate(mess);
    }
  };

  const handleEdit = (s: Student) => {
    setEditing(s);
    setOpenForm(true);
  };

  const handleDelete = (id: string) => {
    if (!confirm("Xác nhận xóa học sinh?")) return;
    dispatch(deleteStudent(id));
  };

  const handleClearFilters = () => {
    setSearch("");
    setGradeFilter("all");
    setSortBy("name");
    setSortDir("asc");
  };

  // Selector logic: apply search, filter, sort
  const filteredSorted = useMemo(() => {
    let out = students.slice();

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      out = out.filter((s) => s.name.toLowerCase().includes(q));
    }

    if (gradeFilter !== "all") {
      out = out.filter((s) => s.grade === gradeFilter);
    }

    out.sort((a, b) => {
      if (sortBy === "name") {
        const r = a.name.localeCompare(b.name);
        return sortDir === "asc" ? r : -r;
      } else {
        const r = a.age - b.age;
        return sortDir === "asc" ? r : -r;
      }
    });

    return out;
  }, [students, search, gradeFilter, sortBy, sortDir]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      {status === "pending" && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#000000cc] flex justify-center items-center">
          <svg className="size-[100px] animate-spin border-[10px] border border-white rounded-[50%] border-t-transparent"></svg>
        </div>
      )}
      <h1 className="text-3xl font-bold mb-6">🎓 Student Manager</h1>

      <div className="flex gap-4 mb-4">
        <Button variant="contained" color="primary" onClick={handleAddClick}>
          Add Student
        </Button>
      </div>

      <StudentSearchSortFilter
        search={search}
        gradeFilter={gradeFilter}
        sortBy={sortBy}
        sortDir={sortDir}
        grades={grades}
        onSearchChange={setSearch}
        onGradeChange={setGradeFilter}
        onSortChange={(by, dir) => {
          setSortBy(by);
          setSortDir(dir);
        }}
        onClear={handleClearFilters}
      />

      <div className="mt-6">
        <StudentList
          students={filteredSorted}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <StudentForm
        open={openForm}
        initial={editing}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
        validate={validate}
      />
    </div>
  );
};

export default App;
