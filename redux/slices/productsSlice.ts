import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productDetails: [],
  productReviews: [],
  productList: [],
  discountedProducts: [],
  loading: false,
  status: "idle",
  error: null,
};

const baseUrl = "https://farmer.handpumpking.in/api/v1";

export const fetchProductList = createAsyncThunk(
  "products/fetchProductList",
  async (requestBody: any, { rejectWithValue }) => {
    console.log(requestBody, "request");
    try {
      const response = await axios.get(
        `${baseUrl}/products/search`,
        requestBody
      );
      return response.data;
    } catch (error: any) {
      // Return a rejected action containing the error message
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchProductReviews = createAsyncThunk(
  "products/fetchProductReviews",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseUrl}/products/details/${productId}`
      );
      return response.data;
    } catch (error: any) {
      // Return a rejected action containing the error message
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchDiscountedProducts = createAsyncThunk(
  "discount/fetchDiscountedProducts",
  async () => {
    const response = await axios.get(
      "https://farmer.handpumpking.in/api/v1/products/discounted"
    );
    //
    // https://farmer.handpumpking.in/api/v1/flash-sale
    return response.data; // Adjust based on the actual structure of the API response
  }
);

export const productReviewsSlice = createSlice({
  name: "productReviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductReviews.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProductReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productReviews = action.payload;
        console.log(
          "State updated with product details: ",
          state.productDetails
        );
      })
      .addCase(fetchProductReviews.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productList = action.payload;
        console.log(
          "State updated with product details: ",
          state.productDetails
        );
      })
      .addCase(fetchProductList.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiscountedProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDiscountedProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.discountedProducts = action.payload;
      })
      .addCase(fetchDiscountedProducts.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Export the reducers individually

export const productReviewsReducer = productReviewsSlice.reducer;
export const productListReducer = productListSlice.reducer;
export const discountReducer = discountSlice.reducer;
