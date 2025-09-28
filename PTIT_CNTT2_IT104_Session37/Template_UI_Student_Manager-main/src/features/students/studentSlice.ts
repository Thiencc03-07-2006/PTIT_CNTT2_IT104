import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Student } from "./types";
interface Students {
  status: "idle" | "pending" | "fulfilled" | "rejected";
  students: Student[];
  error: unknown;
}
const initialState: Students = { status: "idle", students: [], error: null };
export const fetchData = createAsyncThunk("student/fetchStudent", async () => {
  try {
    const res = await axios.get("http://localhost:8080/student");
    return res.data;
  } catch (error) {
    return error;
  }
});
export const addStudent = createAsyncThunk(
  "student/addStudent",
  async (data: Student) => {
    try {
      const res = await axios.post("http://localhost:8080/student", data);
      return res.data as Student[];
    } catch (error) {
      return error;
    }
  }
);
export const deleteStudent = createAsyncThunk(
  "student/deleteStudent",
  async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/student/${id}`);
      return id;
    } catch (error) {
      return error;
    }
  }
);
export const updateStudent = createAsyncThunk(
  "student/updateStudent",
  async (info: Student) => {
    try {
      await axios.patch(`http://localhost:8080/student/${info.id}`, {
        name: info.name,
        age: info.age,
        grade: info.grade,
      });
      return info;
    } catch (error) {
      return error;
    }
  }
);
const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.students = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(addStudent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.students.push(action.payload);
      })
      .addCase(addStudent.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(deleteStudent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.students = state.students.filter((t) => t.id !== action.payload);
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(updateStudent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const index = state.student.findIndex(
          (t) => t.id === action.payload.id
        );
        if (index !== -1) {
          state.students[index] = { ...action.payload };
        }
      })
      .addCase(updateStudent.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});
export default studentSlice.reducer;
