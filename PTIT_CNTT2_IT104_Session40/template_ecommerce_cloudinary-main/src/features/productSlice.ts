import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type ProductStatus = "active" | "inactive";

type ProductRow = {
  id: string;
  code: string;
  name: string;
  category: string;
  price: number;
  image: string;
  status: ProductStatus;
};
interface Products {
  status: "idle" | "pending" | "fulfilled" | "rejected";
  rows: ProductRow[];
  error: unknown;
}
const initialState: Products = { status: "idle", rows: [], error: null };
export const fetchData = createAsyncThunk("products/fetchProduct", async () => {
  try {
    const res = await axios.get("http://localhost:8080/products");
    return res.data;
  } catch (error) {
    return error;
  }
});
export const addProducts = createAsyncThunk(
  "products/addProduct",
  async (data: ProductRow) => {
    try {
      const res = await axios.post("http://localhost:8080/products", data);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/products/${id}`);
      return id;
    } catch (error) {
      return error;
    }
  }
);
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (info: Partial<ProductRow>) => {
    try {
      await axios.patch(`http://localhost:8080/products/${info.id}`, info);
      return info;
    } catch (error) {
      return error;
    }
  }
);
export const deleteALlCategory = createAsyncThunk(
  "products/deleteALlCategory",
  async (category: string) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/products?category=${category}`
      );
      await Promise.all(
        res.data.map((t) =>
          axios.delete(`http://localhost:8080/products/${t.id}`)
        )
      );
      return category;
    } catch (error) {
      return error;
    }
  }
);
export const updateALlCategory = createAsyncThunk(
  "products/updateALlCategory",
  async (category: { now: string; new: string }) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/products?category=${category.now}`
      );
      await Promise.all(
        res.data.map((t) =>
          axios.patch(`http://localhost:8080/products/${t.id}`, {
            category: category.new,
          })
        )
      );
      return category;
    } catch (error) {
      return error;
    }
  }
);
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.rows = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(addProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addProducts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.rows.push(action.payload);
      })
      .addCase(addProducts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.rows = state.rows.filter((t) => t.id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(updateProduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const index = state.rows.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) {
          state.rows[index] = { ...state.rows[index], ...action.payload };
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(deleteALlCategory.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteALlCategory.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.rows = state.rows.filter((t) => t.category !== action.payload);
      })
      .addCase(deleteALlCategory.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(updateALlCategory.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateALlCategory.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.rows.forEach((t) => {
          if (t.category === action.payload.now) {
            t.category === action.payload.new;
          }
        });
      })
      .addCase(updateALlCategory.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});
export default productSlice.reducer;
