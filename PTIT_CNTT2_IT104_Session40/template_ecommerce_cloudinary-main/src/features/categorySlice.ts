import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type CategoryStatus = "active" | "inactive";

type CategoryRow = {
  id: string;
  name: string;
  description: string;
  status: CategoryStatus;
};
interface Categotys {
  status: "idle" | "pending" | "fulfilled" | "rejected";
  rows: CategoryRow[];
  error: unknown;
}
const initialState: Categotys = { status: "idle", rows: [], error: null };
export const fetchDataCategory = createAsyncThunk(
  "categorys/fetchCategory",
  async () => {
    try {
      const res = await axios.get("http://localhost:8080/categorys");
      return res.data;
    } catch (error) {
      return error;
    }
  }
);
export const addCategorys = createAsyncThunk(
  "categorys/addCategory",
  async (data: CategoryRow) => {
    try {
      const res = await axios.post("http://localhost:8080/categorys", data);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);
export const deleteCategory = createAsyncThunk(
  "categorys/deleteCategory",
  async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/categorys/${id}`);
      return id;
    } catch (error) {
      return error;
    }
  }
);
export const updateCategory = createAsyncThunk(
  "categorys/updateCategory",
  async (info: Partial<CategoryRow>) => {
    try {
      await axios.patch(`http://localhost:8080/categorys/${info.id}`, info);
      return info;
    } catch (error) {
      return error;
    }
  }
);
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataCategory.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchDataCategory.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.rows = action.payload;
      })
      .addCase(fetchDataCategory.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(addCategorys.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addCategorys.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.rows.push(action.payload);
      })
      .addCase(addCategorys.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.rows = state.rows.filter((t) => t.id !== action.payload);
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(updateCategory.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const index = state.rows.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) {
          state.rows[index] = { ...state.rows[index], ...action.payload };
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});
export default categorySlice.reducer;
