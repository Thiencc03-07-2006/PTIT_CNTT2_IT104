import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Book } from "../../components/types";
interface Books {
  status: "idle" | "pending" | "fulfilled" | "rejected";
  books: Book[];
  error: unknown;
}
const initialState: Books = { status: "idle", books: [], error: null };
export const fetchData = createAsyncThunk("book/fetchBook", async () => {
  try {
    const res = await axios.get("http://localhost:8080/book");
    return res.data;
  } catch (error) {
    return error;
  }
});
export const addBook = createAsyncThunk("book/addBook", async (data: Book) => {
  try {
    const res = await axios.post("http://localhost:8080/book", data);
    return res.data as Book[];
  } catch (error) {
    return error;
  }
});
export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/book/${id}`);
      return id;
    } catch (error) {
      return error;
    }
  }
);
export const updateBook = createAsyncThunk(
  "book/updateBook",
  async (info: Book) => {
    try {
      await axios.patch(`http://localhost:8080/book/${info.id}`, {
        title: info.title,
        author: info.author,
        year: info.year,
        category: info.category,
      });
      return info;
    } catch (error) {
      return error;
    }
  }
);
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.books = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(addBook.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.books.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(deleteBook.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.books = state.books.filter((t) => t.id !== action.payload);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(updateBook.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const index = state.books.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) {
          state.books[index] = { ...action.payload };
        }
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});
export default bookSlice.reducer;
