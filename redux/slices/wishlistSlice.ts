// store/slices/wishlistSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://farmer.handpumpking.in/api/v1";

interface Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  image_fullpath: string[];
  category_ids: { id: number }[];
  description: string;
  unit: string;
}

interface WishlistState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: WishlistState = {
  items: [],
  loading: false,
  error: null,
};

// Async thunk for fetching wishlist data
export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async () => {
    const token = localStorage.getItem("authToken");

    const response = await axios.get(`${baseUrl}/customer/wish-list`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.products;
  }
);

// Async thunk for removing an item from the wishlist
export const removeFromWishlistAsync = createAsyncThunk(
  "wishlist/removeFromWishlist",
  async (id: number) => {
    const token = localStorage.getItem("authToken");

    const response = await axios.delete(
      `${baseUrl}/customer/wish-list/remove`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: { product_ids: [id] }, // Send the product ID as part of the request body
      }
    );

    return id; // Return the ID of the removed product
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      // Check if the product is already in the wishlist
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch wishlist";
      })
      .addCase(removeFromWishlistAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromWishlistAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(removeFromWishlistAsync.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to remove item from wishlist";
      });
  },
});

// Export actions and reducer
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
