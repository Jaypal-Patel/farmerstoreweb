import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  banners: [],
  categories: [],
  status: "idle",
  error: null,
  newArrivals: [],
  exploreByCategories: [],
  made2order: [],
  snack: [],
  subscriptionProduct: [],
  healthRecipes: [],
  productDetails: [],
  subCategories: [],
};

const baseUrl = "https://farmer.handpumpking.in/api/v1";

export const fetchBanners = createAsyncThunk(
  "categories/fetchBanners",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(baseUrl + "/banners");
      return response.data;
    } catch (error: any) {
      // Return a rejected action containing the error message
      return rejectWithValue(error.response.data);
    }
  }
);
export const bannersSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanners.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.banners = action.payload;
      })
      .addCase(fetchBanners.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://farmer.handpumpking.in/api/v1" + "/categories"
      );
      return response.data;
    } catch (error: any) {
      // Return a rejected action containing the error message
      return rejectWithValue(error.response.data);
    }
  }
);
export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const fetchNewArrivals = createAsyncThunk(
  "categories/fetchNewArrivals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(baseUrl + "/products/new-arrival");
      return response.data;
    } catch (error: any) {
      // Return a rejected action containing the error message
      return rejectWithValue(error.response.data);
    }
  }
);
export const newArrivalsSlice = createSlice({
  name: "newArrivals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewArrivals.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchNewArrivals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.newArrivals = action.payload;
      })
      .addCase(fetchNewArrivals.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const fetchExploreByCategoriesProducts = createAsyncThunk(
  "products/fetchExploreByCategoriesProducts",
  async (categoryId: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseUrl}/categories/products/${categoryId}`
      );
      return response.data;
    } catch (error: any) {
      // Return a rejected action containing the error message
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchExploreByCategoriesProductsSlice = createSlice({
  name: "exploreByCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExploreByCategoriesProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchExploreByCategoriesProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.exploreByCategories = action.payload;
      })
      .addCase(
        fetchExploreByCategoriesProducts.rejected,
        (state: any, action) => {
          state.status = "failed";
          state.error = action.payload;
        }
      );
  },
});

export const fetchMade2OrderProducts = createAsyncThunk(
  "products/fetchMade2OrderProducts",
  async (categoryId: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseUrl}/categories/products/${categoryId}`
      );
      console.log(response.data, "made2order");
      return response.data;
    } catch (error: any) {
      // Return a rejected action containing the error message
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchMade2OrderProductsSlice = createSlice({
  name: "made2order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMade2OrderProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMade2OrderProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.made2order = action.payload;
      })
      .addCase(fetchMade2OrderProducts.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const fetchsnackProducts = createAsyncThunk(
  "products/fetchsnackProducts",
  async (categoryId: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseUrl}/categories/products/${categoryId}`
      );
      console.log(response.data, "snack");
      return response.data;
    } catch (error: any) {
      // Return a rejected action containing the error message
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchsnackProductsSlice = createSlice({
  name: "snack",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchsnackProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchsnackProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.snack = action.payload;
      })
      .addCase(fetchsnackProducts.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const fetchsubscriptionProducts = createAsyncThunk(
  "products/fetchsubscriptionProducts",
  async (categoryId: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseUrl}/categories/products/${categoryId}`
      );
      console.log(response.data, "subscriptionProductakshay");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchsubscriptionProductsSlice = createSlice({
  name: "subscriptionProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchsubscriptionProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchsubscriptionProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.subscriptionProduct = action.payload;
      })
      .addCase(fetchsubscriptionProducts.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const fetchTopHealthRecipes = createAsyncThunk(
  "products/fetchTopHealthRecipes",
  async (categoryId: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseUrl}/categories/products/${categoryId}`
      );
      console.log("tophealth", response.data);
      return response.data;
    } catch (error: any) {
      console.error("Error fetching product : ", error);
      // Return a rejected action containing the error message
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchTopHealthyRecipesSlice = createSlice({
  name: "healthRecipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopHealthRecipes.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTopHealthRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.healthRecipes = action.payload;
      })
      .addCase(fetchTopHealthRecipes.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (productId: string, { rejectWithValue }) => {
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
export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productDetails = action.payload;
        console.log(
          "State updated with product details: ",
          state.productDetails
        );
      })
      .addCase(fetchProductDetails.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const fetchSubCategories = createAsyncThunk(
  "products/fetchSubCategories",
  async (categoryId: string | null, { rejectWithValue }) => {
    console.log(categoryId, " Akshayid");
    try {
      const response = await axios.get(
        `${baseUrl}/categories/childes/${categoryId}`
      );
      console.log("response.data",response.data);
      
      return response.data;
    } catch (error: any) {
      // Return a rejected action containing the error message
      return rejectWithValue(error.response.data);
    }
  }
);
export const subCategoriesSlice = createSlice({
  name: "subCategoriesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubCategories.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchSubCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.subCategories = action.payload;
      })
      .addCase(fetchSubCategories.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Export the reducers individually
export const categoriesReducer = categoriesSlice.reducer;
export const newArrivalsReducer = newArrivalsSlice.reducer;
export const productDetailsReducer = productDetailsSlice.reducer;
export const productsExploreReducer =
  fetchExploreByCategoriesProductsSlice.reducer;
export const productsMade2OrderReducer = fetchMade2OrderProductsSlice.reducer;
export const productssxnackReducer = fetchsnackProductsSlice.reducer;
export const topHealthRecipesReducer = fetchTopHealthyRecipesSlice.reducer;
export const subscriptionProductReducer =
  fetchsubscriptionProductsSlice.reducer;
export const bannersReducer = bannersSlice.reducer;
export const subCategoriesReducer = subCategoriesSlice.reducer;
