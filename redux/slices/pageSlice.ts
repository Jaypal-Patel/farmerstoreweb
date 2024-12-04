// slices/pageSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface PageState {
  email: string;
  isOpen: boolean;
  loading: boolean;
  content: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Initial state
const initialState: PageState = {
  email: "",
  isOpen: false,
  content: null,
  status: "idle",
  error: null,
  loading: false,
};

const Baseurl = "https://farmer.handpumpking.in/api/v1";

// Async thunk for subscribing to the newsletter
export const subscribeNewsletter = createAsyncThunk(
  "page/subscribeNewsletter",
  async (email: string): Promise<void> => {
    const response = await fetch(`${Baseurl}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get the response body for error
      throw new Error(errorText || "Failed to subscribe");
    }
  }
);

// Async thunk for fetching content
export const fetchContent = createAsyncThunk<string>(
  "page/fetchContent",
  async (): Promise<string> => {
    const response = await fetch(`${Baseurl}/pages`);
    if (!response.ok) {
      const errorText = await response.json();
      throw new Error(errorText || "Failed to fetch content");
    }
    return response.json();
  }
);

// Create slice
const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    togglePopup(state) {
      state.isOpen = !state.isOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscribeNewsletter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(subscribeNewsletter.fulfilled, (state) => {
        state.status = "succeeded";
        state.email = ""; // Reset email on success
      })
      .addCase(subscribeNewsletter.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to subscribe";
      })
      .addCase(fetchContent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchContent.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.status = "succeeded";
          state.content = action.payload;
          state.isOpen = true; // Open the popup on successful fetch
        }
      )
      .addCase(fetchContent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch content";
      });
  },
});

// Export actions
export const { setEmail, togglePopup } = pageSlice.actions;

// Export reducer
export default pageSlice.reducer;
