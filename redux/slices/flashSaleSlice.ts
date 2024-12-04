import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  flashSales: [],
  loading: false,
  error: null,
};

const baseUrl = "https://farmer.handpumpking.in/api/v1";

// Async thunk to fetch flash sale data
export const fetchFlashSales = createAsyncThunk(
  "flashsale/fetchFlashSales",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/flash-sale`);
      return response.data.products;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const flashSaleSlice = createSlice({
  name: "flashsale",
  initialState,
  reducers: {
    clearFlashSales: (state) => {
      state.flashSales = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlashSales.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFlashSales.fulfilled, (state, action) => {
        state.loading = false;
        state.flashSales = action.payload;
        state.error = null;
      })
      .addCase(fetchFlashSales.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearFlashSales } = flashSaleSlice.actions;
export default flashSaleSlice.reducer;
