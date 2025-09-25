import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
type TodoItem = {
  id: string;
  taskName: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
};
interface todo {
  status: "idle" | "pending" | "fulfilled" | "rejected";
  todos: TodoItem[];
  error: unknown;
}
const initialState: todo = { status: "idle", todos: [], error: null };
export const fetchData = createAsyncThunk("todo/fetchTodo", async () => {
  try {
    const res = await axios.get("http://localhost:8080/todo");
    return res.data;
  } catch (error) {
    return error;
  }
});
export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async (data: TodoItem) => {
    try {
      const res = await axios.post("http://localhost:8080/todo", data);
      return res.data as TodoItem[];
    } catch (error) {
      return error;
    }
  }
);
export const completedTodo = createAsyncThunk(
  "todo/completed",
  async (info: { id: string; status: boolean }) => {
    try {
      const res = await axios.patch(`http://localhost:8080/todo/${info.id}`, {
        completed: info.status,
      });
      return res.data as TodoItem;
    } catch (error) {
      return error;
    }
  }
);
export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/todo/${id}`);
      return id;
    } catch (error) {
      return error;
    }
  }
);
export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async (info: {
    id: string;
    taskName: string;
    priority: "low" | "medium" | "high";
  }) => {
    try {
      await axios.patch(`http://localhost:8080/todo/${info.id}`, {
        taskName: info.taskName,
        priority: info.priority,
      });
      return info;
    } catch (error) {
      return error;
    }
  }
);
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.todos = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(addTodo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.todos.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(completedTodo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(completedTodo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const index = state.todos.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(completedTodo.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.todos = state.todos.filter((t) => t.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(updateTodo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const index = state.todos.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = { ...action.payload };
        }
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});
export default todoSlice.reducer;
