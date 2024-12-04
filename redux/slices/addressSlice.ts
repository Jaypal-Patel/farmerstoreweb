import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define a type for the address
interface Address {
  id: string;
  contact_person_name: string;
  address: string;
  // Add other fields as necessary
}

// Define the initial state
interface AddressState {
  addresses: Address[];
  loading: boolean;
  error: string | null;
}

const initialState: AddressState = {
  addresses: [],
  loading: false,
  error: null,
};

// Async thunk for fetching addresses
export const fetchAddresses = createAsyncThunk(
  "addresses/fetchAddresses",
  async (token: string) => {
    const response = await fetch(
      "https://farmer.handpumpking.in/api/v1/customer/address/list",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Use token for authorization
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch addresses");
    }

    const data = await response.json();
    return data; // Adjust based on your API response
  }
);

// Create the slice
const addressSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    // You can add additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload; // Assuming payload contains the address list
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch addresses";
      });
  },
});

// Export the actions and reducer
export default addressSlice.reducer;
