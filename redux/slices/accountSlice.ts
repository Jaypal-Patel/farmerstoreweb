import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// Define the initial state with proper typing
interface Address {
  id?: string;
  contact_person_name?: string;
  address?: string;
  contact_person_number?: string;
}

interface AccountState {
  addresses: Address[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AccountState = {
  addresses: [],
  status: "idle",
  error: null,
};

const baseUrl = "https://farmer.handpumpking.in/api/v1";

// Thunk to fetch addresses
export const fetchAddresses = createAsyncThunk<
  Address[],
  void,
  { rejectValue: string }
>("account/fetchAddresses", async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.get(`${baseUrl}/customer/address/list`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Ensure this returns Address[]
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Failed to fetch addresses");
  }
});

// Thunk to add an address
export const addAddress = createAsyncThunk<
  Address,
  Address,
  { rejectValue: string }
>("account/addAddress", async (addressData, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.post(
      `${baseUrl}/customer/address/add`,
      addressData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data; // Ensure this returns the added Address
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Failed to add address");
  }
});

// Thunk to update an address
export const updateAddress = createAsyncThunk<
  Address,
  { id: string; addressData: Address },
  { rejectValue: string }
>("account/updateAddress", async ({ id, addressData }, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.put(
      `${baseUrl}/customer/address/update/${id}`,
      addressData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data; // Ensure this returns the updated Address
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Failed to update address");
  }
});

export const deleteAddress = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("account/deleteAddress", async (id, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("authToken");
    await axios.delete(`${baseUrl}/customer/address/delete`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: { address_id: id }, // Sending address_id in the body
    });
    return id; // Return the id of the deleted address
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Failed to delete address");
  }
});

// Thunk to set a default address
// export const setDefaultAddress = createAsyncThunk<
//   Address[],
//   string,
//   { rejectValue: string }
// >(
//   "account/setDefaultAddress",
//   async (newDefaultAddressId, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem("authToken");

//       // Fetch the current addresses to update
//       const { data: addresses } = await axios.get(
//         `${baseUrl}/customer/address/list`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       // Update the default status for all addresses
//       await Promise.all(
//         addresses.map((address: any) => {
//           const updatedStatus = address.id === newDefaultAddressId ? 1 : 0;
//           return axios.put(
//             `${baseUrl}/customer/address/update/${address.id}`,
//             { default_status: updatedStatus },
//             { headers: { Authorization: `Bearer ${token}` } }
//           );
//         })
//       );

//       return addresses.map((address : any) => ({
//         ...address,
//         default_status: address.id === newDefaultAddressId ? 1 : 0,
//       }));
//     } catch (error: any) {
//       return rejectWithValue(
//         error.response?.data || "Failed to update default address"
//       );
//     }
//   }
// );

const accountDetailsSlice = createSlice({
  name: "accountInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.addresses = action.payload; // Assuming payload is an array of Address
      })
      .addCase(fetchAddresses.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.addresses.push(action.payload);
        toast.success("Add Address successfully!");
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        const updatedAddress = action.payload;
        const index = state.addresses.findIndex(
          (address) => address.id === updatedAddress.id
        );
        if (index !== -1) {
          state.addresses[index] = updatedAddress;
        }
        toast.success("Address Updated successfully!");
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        const id = action.payload;
        state.addresses = state.addresses.filter(
          (address) => address.id !== id
        );
        toast.success("Address deleted successfully!");
      });
    // // Handle setting default address
    // .addCase(setDefaultAddress.fulfilled, (state, action) => {
    //   state.addresses = action.payload; // Update the addresses with new default statuses
    //   toast.success("Default address updated successfully!");
    // })
    // .addCase(setDefaultAddress.rejected, (state: any, action) => {
    //   state.error = action.payload;
    //   toast.error(action.payload);
    // });
  },
});

// Export the reducer
export const accountInfoReducer = accountDetailsSlice.reducer;
