import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define types for the blog post and state
interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  youtube_url: string | null;
  created_at: string;
  updated_at: string;
}

interface BlogState {
  posts: BlogPost[];
  singlePost: BlogPost | null;
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  posts: [],
  singlePost: null,
  loading: false,
  error: null,
};

// Base URL for API requests
const baseUrl = "https://farmer.handpumpking.in/api/v1";

// Async thunk to fetch a single blog by ID
export const fetchBlogById = createAsyncThunk<
  BlogPost,
  number,
  { rejectValue: string }
>("blog/fetchBlogById", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${baseUrl}/blogs/${id}`);
    return response.data.data; // Adjust based on your API response structure
  } catch (error: any) {
    return rejectWithValue(error.response.data || error.message);
  }
});

// Async thunk to fetch all blogs
export const fetchBlogs = createAsyncThunk<
  BlogPost[],
  void,
  { rejectValue: string }
>("blog/fetchBlogs", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${baseUrl}/blogs`);
    return response.data.data; // Adjust based on your API response structure
  } catch (error: any) {
    return rejectWithValue(error.response.data || error.message);
  }
});

// Create the blog slice
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    // clearBlogPosts: (state) => {
    //   state.posts = [];
    //   state.singlePost = null;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.singlePost = action.payload;
        state.error = null;
      })
      .addCase(fetchBlogById.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = null;
      })
      .addCase(fetchBlogs.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
// export const { clearBlogPosts } = blogSlice.actions;
export default blogSlice.reducer;
