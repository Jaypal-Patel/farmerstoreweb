import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  paymentMethod: [],
  orderSuccess: [],
  status: "idle",
  error: null,
};

const baseUrl = "https://farmer.handpumpking.in/api/v1";

export const updatePaymentMethod = createAsyncThunk(
  "order/updatePaymentMethod",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        baseUrl + "/customer/order/payment-method"
      );
      return response.data;
    } catch (error: any) {
      // Return a rejected action containing the error message
      return rejectWithValue(error.response.data);
    }
  }
);

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (requestBody: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("authToken");

      const response = await axios.post(
        `${baseUrl}/customer/order/place`,
        requestBody,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("selectedCoupon");
      localStorage.removeItem("selectedAddress");
      // window.location.href = "/my-account?tab=my-order";
      return response.data;
    } catch (error: any) {
      // Return a rejected action containing the error message
      return rejectWithValue(error.response.data);
    }
  }
);

export const ordersSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updatePaymentMethod.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updatePaymentMethod.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.paymentMethod = action.payload;
      })
      .addCase(updatePaymentMethod.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(placeOrder.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orderSuccess = action.payload;
      })
      .addCase(placeOrder.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Export the reducers individually
export const ordersReducer = ordersSlice.reducer;
