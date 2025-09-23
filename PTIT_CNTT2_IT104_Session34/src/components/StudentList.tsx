import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import React from "react";
import { useDispatch } from "react-redux";
import type { Student } from "../utils/types";

interface StudentListProps {
  students: Student[];
  setIdStudent: React.Dispatch<React.SetStateAction<string>>;
  search: string;
}

const StudentList: React.FC<StudentListProps> = ({
  students,
  setIdStudent,
  search,
}) => {
  const dispatch = useDispatch();
  const handleType = (id: string, type: string) => {
    setIdStudent(id);
    dispatch({ type });
  };
  const handleDelete = (id: string) => {
    if (confirm("Bạn có chắc chắn muốn xóa không")) {
      dispatch({ type: "deleteStudent", payload: id });
    }
  };
  const studentSearch = students.filter((t) =>
    t.fullName.toLowerCase().includes(search.trim().toLowerCase())
  );
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Mã sinh viên</TableCell>
            <TableCell>Tên sinh viên</TableCell>
            <TableCell>Tuổi</TableCell>
            <TableCell>Giới tính</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentSearch.length > 0 ? (
            studentSearch.map((s, i) => (
              <TableRow key={s.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{s.id}</TableCell>
                <TableCell>{s.fullName}</TableCell>
                <TableCell>{s.age}</TableCell>
                <TableCell>{s.gender}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleType(s.id, "info")}
                      variant="contained"
                      color="error"
                    >
                      Xem
                    </Button>
                    <Button
                      onClick={() => handleType(s.id, "update")}
                      variant="contained"
                      color="warning"
                    >
                      Sửa
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => handleDelete(s.id)}
                    >
                      Xóa
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <p>Không có sinh viên nào</p>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentList;
