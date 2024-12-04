// // import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// // import axios from "axios";

// // interface WalletData {
// //   balance: number;
// // }

// // interface Transaction {
// //   id: number;
// //   amount: number;
// //   type: string;
// //   created_at: string;
// // }

// // interface TransactionsResponse {
// //   data: Transaction[]; // Array of transactions
// //   current_page: number;
// //   last_page: number;
// // }

// // interface ApiResponse {
// //   wallet: WalletData;
// //   transactions: TransactionsResponse; // Define the structure for transactions
// // }

// // interface WalletState {
// //   wallet: WalletData | null;
// //   transactions: Transaction[];
// //   loading: boolean;
// //   error: string | null;
// //   hasMore: boolean;
// //   page: number;
// // }

// // const initialState: WalletState = {
// //   wallet: null,
// //   transactions: [],
// //   loading: false,
// //   error: null,
// //   hasMore: true,
// //   page: 1,
// // };

// // const baseUrl = "https://farmer.handpumpking.in/api/v1";

// // // Fetch wallet data
// // export const fetchWalletData = createAsyncThunk<
// //   ApiResponse,
// //   number,
// //   { rejectValue: string }
// // >("wallet/fetchWalletData", async (userId, { rejectWithValue }) => {
// //   try {
// //     const token = localStorage.getItem("authToken");
// //     if (!token) throw new Error("No auth token found");

// //     const response = await axios.get(`${baseUrl}/wallet/${userId}`, {
// //       headers: { Authorization: `Bearer ${token}` },
// //     });

// //     return response.data.data;
// //   } catch (error: any) {
// //     return rejectWithValue(error.response?.data?.message || error.message);
// //   }
// // });

// // // Load more transactions
// // export const loadMoreTransactions = createAsyncThunk<
// //   Transaction[],
// //   { userId: number; page: number },
// //   { rejectValue: string }
// // >(
// //   "wallet/loadMoreTransactions",
// //   async ({ userId, page }, { rejectWithValue }) => {
// //     try {
// //       const token = localStorage.getItem("authToken");
// //       if (!token) throw new Error("No auth token found");

// //       const response = await axios.get(
// //         `${baseUrl}/wallet/${userId}?page=${page}`,
// //         {
// //           headers: { Authorization: `Bearer ${token}` },
// //         }
// //       );

// //       return response.data.data.transactions.data;
// //     } catch (error: any) {
// //       return rejectWithValue(error.response?.data?.message || error.message);
// //     }
// //   }
// // );

// // // Create the wallet slice
// // const walletSlice = createSlice({
// //   name: "wallet",
// //   initialState,
// //   reducers: {
// //     clearWallet: (state) => {
// //       state.wallet = null;
// //       state.transactions = [];
// //       state.loading = false;
// //       state.error = null;
// //       state.hasMore = true;
// //       state.page = 1;
// //     },
// //   },
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchWalletData.pending, (state) => {
// //         state.loading = true;
// //         state.error = null;
// //       })
// //       .addCase(fetchWalletData.fulfilled, (state, action) => {
// //         state.loading = false;
// //         state.wallet = action.payload.wallet;
// //         state.transactions = action.payload.transactions.data;
// //         state.page = 1;
// //         state.hasMore =
// //           action.payload.transactions.current_page <
// //           action.payload.transactions.last_page;
// //       })
// //       .addCase(fetchWalletData.rejected, (state: any, action) => {
// //         state.loading = false;
// //         state.error = action.payload;
// //       })
// //       .addCase(loadMoreTransactions.pending, (state) => {
// //         state.loading = true;
// //         state.error = null;
// //       })
// //       .addCase(loadMoreTransactions.fulfilled, (state, action) => {
// //         state.loading = false;

// //         if (!Array.isArray(state.transactions)) {
// //           console.error(
// //             "state.transactions is not an array!",
// //             state.transactions
// //           );
// //           state.transactions = [];
// //         }

// //         state.transactions.push(...action.payload);
// //         state.page += 1;
// //         state.hasMore = action.payload.length > 0;
// //       })
// //       .addCase(loadMoreTransactions.rejected, (state: any, action) => {
// //         state.loading = false;
// //         state.error = action.payload;
// //       });
// //   },
// // });

// // // Export actions and reducer
// // export const { clearWallet } = walletSlice.actions;
// // export default walletSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// interface WalletData {
//   balance: number;
// }

// interface Transaction {
//   id: number;
//   amount: string; // Adjusted to match API response format
//   type: string;
//   created_at: string;
// }

// interface TransactionsResponse {
//   data: Transaction[]; // Array of transactions
//   current_page: number;
//   last_page: number;
// }

// interface ApiResponse {
//   wallet: WalletData;
//   transactions: TransactionsResponse; // Define the structure for transactions
// }

// interface WalletState {
//   wallet: WalletData | null;
//   transactions: Transaction[];
//   loading: boolean;
//   error: string | null;
//   hasMore: boolean;
//   lastpage: number | null;
//   firstpage: number;
// }

// const initialState: WalletState = {
//   wallet: null,
//   transactions: [],
//   loading: false,
//   error: null,
//   hasMore: true,
//   lastpage: null,
//   firstpage: 1,
// };

// const baseUrl = "https://farmer.handpumpking.in/api/v1";

// // Fetch wallet data
// export const fetchWalletData = createAsyncThunk<
//   ApiResponse,
//   number,
//   { rejectValue: string }
// >("wallet/fetchWalletData", async (userId, { rejectWithValue }) => {
//   try {
//     const token = localStorage.getItem("authToken");
//     if (!token) throw new Error("No auth token found");

//     const response = await axios.get(`${baseUrl}/wallet/${userId}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     return response.data.data;
//   } catch (error: any) {
//     return rejectWithValue(error.response?.data?.message || error.message);
//   }
// });

// // Load more transactions
// export const loadTransactions = createAsyncThunk<
//   Transaction[],
//   { userId: number; lastpage: number },
//   { rejectValue: string }
// >(
//   "wallet/loadMoreTransactions",
//   async ({ userId, lastpage }, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem("authToken");
//       if (!token) throw new Error("No auth token found");

//       const response = await axios.get(
//         `${baseUrl}/wallet/${userId}?page=${lastpage}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       return response.data.data.transactions.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );

// // Create the wallet slice
// const walletSlice = createSlice({
//   name: "wallet",
//   initialState,
//   reducers: {
//     clearWallet: (state) => {
//       state.wallet = null;
//       state.transactions = [];
//       state.loading = false;
//       state.error = null;
//       state.hasMore = true;
//       state.firstpage = 1;
//       state.lastpage = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchWalletData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchWalletData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.wallet = action.payload.wallet;
//         state.transactions = action.payload.transactions.data;
//         state.lastpage = action.payload.transactions.last_page; // Get the last page number
//         state.hasMore = state.lastpage > state.firstpage; // Check if there are more pages
//       })
//       .addCase(fetchWalletData.rejected, (state: any, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(loadTransactions.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loadTransactions.fulfilled, (state: any, action) => {
//         state.loading = false;

//         if (!Array.isArray(state.transactions)) {
//           console.error(
//             "state.transactions is not an array!",
//             state.transactions
//           );
//           state.transactions = [];
//         }

//         // Add new transactions (prepend them for reverse loading)
//         state.transactions.unshift(...action.payload);

//         // Check if there are still more pages to load
//         state.hasMore = state.lastpage > state.transactions.length / 10; // Assuming 10 transactions per page
//       })
//       .addCase(loadTransactions.rejected, (state: any, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// // Export actions and reducer
// export const { clearWallet } = walletSlice.actions;
// export default walletSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface WalletData {
  balance: number;
}

interface Transaction {
  id: number;
  amount: string; // Adjusted to match API response format
  type: string;
  created_at: string;
}

interface TransactionsResponse {
  data: Transaction[]; // Array of transactions
  current_page: number;
  last_page: number;
}

interface ApiResponse {
  wallet: WalletData;
  transactions: TransactionsResponse; // Define the structure for transactions
}

interface WalletState {
  wallet: WalletData | null;
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  lastpage: number | null;
  firstpage: number;
}

const initialState: WalletState = {
  wallet: null,
  transactions: [],
  loading: false,
  error: null,
  hasMore: true,
  lastpage: null,
  firstpage: 1,
};

const baseUrl = "https://farmer.handpumpking.in/api/v1";

// Fetch wallet data
export const fetchWalletData = createAsyncThunk<
  ApiResponse,
  number,
  { rejectValue: string }
>("wallet/fetchWalletData", async (userId, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) throw new Error("No auth token found");

    const response = await axios.get(`${baseUrl}/wallet/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || error.message);
  }
});

// Load more transactions
export const loadTransactions = createAsyncThunk<
  Transaction[],
  { userId: number; lastpage: number },
  { rejectValue: string }
>(
  "wallet/loadMoreTransactions",
  async ({ userId, lastpage }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("No auth token found");

      const response = await axios.get(
        `${baseUrl}/wallet/${userId}?page=${lastpage}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      return response.data.data.transactions.data; // Return the transaction data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// export const fetchAllTransactions = createAsyncThunk<
//   ApiResponse, // Return the full ApiResponse with wallet data and reversed transactions
//   number, // userId
//   { rejectValue: string }
// >("wallet/fetchAllTransactions", async (userId, { rejectWithValue }) => {
//   try {
//     const token = localStorage.getItem("authToken");
//     if (!token) throw new Error("No auth token found");

//     let allTransactions: any[] = []; // Array to accumulate all transactions
//     let currentPage = 1; // Start from the first page
//     let lastPage = 1; // Track the last page number
//     let lastResponse: any; // To store the response for wallet data (for final return)
//     let alreadyFetched: Set<number> = new Set(); // Set to track transaction IDs we've already fetched

//     // Loop through all pages until we reach the last page
//     while (currentPage <= lastPage) {
//       const response = await axios.get(
//         `${baseUrl}/wallet/${userId}?page=${currentPage}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       // Access the transactions on the current page
//       const transactions = response.data.transactions?.data;

//       // If transactions exist on the current page, reverse and accumulate them
//       if (Array.isArray(transactions)) {
//         // Reverse the current page's transactions
//         const reversedTransactions = transactions.reverse();

//         // Filter out duplicates by checking transaction IDs
//         const uniqueTransactions = reversedTransactions.filter(
//           (transaction: any) => {
//             if (alreadyFetched.has(transaction.id)) {
//               return false; // Skip the transaction if it's already fetched
//             }
//             alreadyFetched.add(transaction.id); // Mark this transaction as fetched
//             return true;
//           }
//         );

//         // Merge the unique transactions with the existing data
//         allTransactions = [...uniqueTransactions, ...allTransactions];
//       } else {
//         console.error("No transactions found on page", currentPage);
//       }

//       // Store the response (wallet data) for later use in returning the final result
//       lastResponse = response;

//       // Update the last page number from the API response
//       lastPage = response.data.transactions?.last_page || 1;

//       // Increment the page number to fetch the next page
//       currentPage++;
//     }

//     // Return the accumulated and merged transactions
//     return {
//       wallet: lastResponse?.data?.wallet, // Use the last response for wallet data
//       transactions: {
//         data: allTransactions, // All transactions reversed and merged
//         current_page: 1, // Assuming page 1 since we merged everything
//         last_page: lastPage, // This can be adjusted if needed
//       },
//     };
//   } catch (error: any) {
//     return rejectWithValue(error.response?.data?.message || error.message);
//   }
// });

export const fetchAllTransactions = createAsyncThunk<
  Transaction[], // The type of data you will return
  { userId: number }, // The type of parameters the thunk will receive
  { rejectValue: string } // The type of reject value for error handling
>(
  "wallet/loadAllTransactions", // Action type string
  async ({ userId }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("No auth token found");

      // Fetch all transactions at once by removing pagination
      const response = await axios.get(
        `${baseUrl}/wallet/${userId}`, // Assuming this endpoint returns all transactions
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Assuming the response structure has a transactions field, which contains all transactions
      const transactions = response.data.data.transactions.data;

      // Sort transactions by created_at date (newest first)
      const sortedTransactions = transactions.sort(
        (a: Transaction, b: Transaction) => {
          const dateA = new Date(a.created_at); // Use 'created_at' for sorting
          const dateB = new Date(b.created_at); // Use 'created_at' for sorting
          return dateB.getTime() - dateA.getTime(); // Newest first
        }
      );

      return transactions.reverse(); // Reversed to show oldest first
    } catch (error: any) {
      // Handle any errors that occur during the request
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Create the wallet slice
const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    clearWallet: (state) => {
      state.wallet = null;
      state.transactions = [];
      state.loading = false;
      state.error = null;
      state.hasMore = true;
      state.firstpage = 1;
      state.lastpage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWalletData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWalletData.fulfilled, (state, action) => {
        state.loading = false;
        state.wallet = action.payload.wallet;
        state.transactions = action.payload.transactions.data;
        state.lastpage = action.payload.transactions.last_page; // Get the last page number
        state.hasMore = state.lastpage > state.firstpage; // Check if there are more pages
      })
      .addCase(fetchWalletData.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loadTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadTransactions.fulfilled, (state: any, action) => {
        state.loading = false;

        // Ensure transactions is always an array
        if (!Array.isArray(state.transactions)) {
          console.error(
            "state.transactions is not an array!",
            state.transactions
          );
          state.transactions = [];
        }

        // Add new transactions (prepend them for reverse loading)
        state.transactions.unshift(...action.payload);

        // Decrement lastpage after loading new transactions
        if (state.lastpage && state.lastpage > 1) {
          state.lastpage -= 1;
        }

        // Check if there are still more pages to load
        state.hasMore = state.lastpage && state.lastpage > 1; // More pages are available if lastpage > 1
      })
      .addCase(loadTransactions.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { clearWallet } = walletSlice.actions;
export default walletSlice.reducer;
