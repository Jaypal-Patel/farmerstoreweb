// redux/slices/loginModalSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Interface for OTP Response
interface OTPResponse {
  message: string;
}

// Interface for Verify Response
interface VerifyResponse {
  status: boolean;
  data: {
    token: string;
  };
  message: string;
}

// Interface for Registration Response
interface RegistrationResponse {
  message: string;
}

// Interface for User Information
interface UserInfo {
  f_name: string;
  l_name: string;
  email: string;
  phone: string;
  gender: string;
  image_fullpath?: string;
}

// Interface for Address
interface Address {
  address_type?: string;
  address: string;
  id: string;
}

// Interface for the Slice State
interface LoginModalState {
  isLoginOpen: boolean;
  otp: OTPResponse | null;
  verify: VerifyResponse | null;
  registeredData: RegistrationResponse | null;
  registeredDataError: string | null;
  userInfo: UserInfo | null;
  userAddress: Address | null;
  loading: boolean;
  error: string | null;
  message: string | null; // To capture success messages
}

// 2. Initialize the State

const initialState: LoginModalState = {
  isLoginOpen: false,
  otp: null,
  verify: null,
  registeredData: null,
  registeredDataError: null,
  userInfo: null,
  userAddress: null,
  loading: false,
  error: null,
  message: null,
};

// 3. Define the Base URL for API Calls

const baseUrl = "https://farmer.handpumpking.in/api/v1";

// 4. Define Async Thunks

// a. Login User - Initiates login by sending phone number
export const loginUser = createAsyncThunk<
  OTPResponse,
  string,
  { rejectValue: string }
>("loginModal/loginUser", async (phoneNo: string, { rejectWithValue }) => {
  try {
    const formData = new FormData();
    formData.append("phone", phoneNo);

    const response = await axios.post(`${baseUrl}/auth/new-login`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data as OTPResponse;
  } catch (error: any) {
    const errorMsg =
      error.response?.data?.message || "Login failed. Please try again.";
    return rejectWithValue(errorMsg);
  }
});

// b. Verify User - Verifies the OTP entered by the user
export const verifyUser = createAsyncThunk<
  VerifyResponse,
  { phone: string; otp: string },
  { rejectValue: string }
>(
  "loginModal/verifyUser",
  async (verifyData: { phone: string; otp: string }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("phone", verifyData.phone);
      formData.append("otp", verifyData.otp);

      const response = await axios.post(
        `${baseUrl}/auth/otp-verify`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data as VerifyResponse;

      if (data.status && data.data.token) {
        localStorage.setItem("authToken", data.data.token);
      }

      return data;
    } catch (error: any) {
      const errorMsg =
        error.response?.data?.message ||
        "OTP verification failed. Please try again.";
      return rejectWithValue(errorMsg);
    }
  }
);

// c. Add User - Registers a new user
export const addUser = createAsyncThunk<
  RegistrationResponse,
  {
    fname: string;
    lname: string;
    email: string;
    phone: string;
    gender: string;
    password: string;
  },
  { rejectValue: string }
>("loginModal/addUser", async (userData, { rejectWithValue }) => {
  try {
    const formData = new FormData();
    formData.append("f_name", userData.fname);
    formData.append("l_name", userData.lname);
    formData.append("email", userData.email);
    formData.append("phone", userData.phone);
    formData.append("gender", userData.gender);
    formData.append("password", userData.password);

    const token = localStorage.getItem("authToken");

    const response = await axios.post(
      `${baseUrl}/auth/registration`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data as RegistrationResponse;
  } catch (error: any) {
    const errorMsg =
      error.response?.data?.message || "Registration failed. Please try again.";
    return rejectWithValue(errorMsg);
  }
});

// d. Check if User Exists - Retrieves user information if the user exists
export const userExists = createAsyncThunk<
  UserInfo,
  void,
  { rejectValue: string }
>("loginModal/userExists", async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("authToken");

    const response = await axios.get(`${baseUrl}/customer/info`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data as UserInfo;
  } catch (error: any) {
    const errorMsg =
      error.response?.data?.message || "Failed to fetch user information.";
    return rejectWithValue(errorMsg);
  }
});

// e. Get User Address - Retrieves the user's address
export const getUserAddress = createAsyncThunk<
  Address,
  void,
  { rejectValue: string }
>("loginModal/getUserAddress", async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("authToken");

    const response = await axios.get(`${baseUrl}/customer/address/list`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const addresses = response.data as Address[];

    return addresses[0] || null;
  } catch (error: any) {
    const errorMsg =
      error.response?.data?.message || "Failed to fetch user address.";
    return rejectWithValue(errorMsg);
  }
});

// Thunk to update user profile
export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async (formData: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        `${baseUrl}/customer/update-profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data; // Assuming the response contains the updated user info
    } catch (error: any) {
      return rejectWithValue(error.response.data.errors || error.message);
    }
  }
);

// 5. Create the Slice

const loginModalSlice = createSlice({
  name: "loginModal",
  initialState,
  reducers: {
    // Action to open the login modal
    openLoginModal: (state) => {
      state.isLoginOpen = true;
    },

    // Action to close the login modal without clearing data
    closeLoginModal: (state) => {
      state.isLoginOpen = false;
      state.error = null;
      state.message = null;
    },
    updateUserInfo: (state, action) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    // Handling loginUser Thunk
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.otp = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<OTPResponse>) => {
          state.loading = false;
          state.otp = action.payload;
          state.message = action.payload.message || "OTP sent successfully!";
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed. Please try again.";
      });

    // Handling verifyUser Thunk
    builder
      .addCase(verifyUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.verify = null;
      })
      .addCase(
        verifyUser.fulfilled,
        (state, action: PayloadAction<VerifyResponse>) => {
          state.loading = false;
          state.verify = action.payload;
          state.message =
            action.payload.message || "OTP verified successfully!";
        }
      )
      .addCase(verifyUser.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "OTP verification failed. Please try again.";
      });

    // Handling addUser Thunk
    builder
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.registeredDataError = null;
        state.registeredData = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.registeredData = action.payload;
        state.message =
          action.payload.message || "User registered successfully!";
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.registeredDataError =
          action.payload || "Registration failed. Please try again.";
      });

    // Handling userExists Thunk
    builder
      .addCase(userExists.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.userInfo = null;
      })
      .addCase(
        userExists.fulfilled,
        (state, action: PayloadAction<UserInfo>) => {
          state.loading = false;
          state.userInfo = action.payload;
          state.message = "User information retrieved successfully!";
        }
      )
      .addCase(userExists.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.payload || "Failed to fetch user information.";
      });

    // Handling getUserAddress Thunk
    builder
      .addCase(getUserAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.userAddress = null;
      })
      .addCase(
        getUserAddress.fulfilled,
        (state, action: PayloadAction<Address | null>) => {
          state.loading = false;
          state.userAddress = action.payload;
          if (action.payload) {
            state.message = "User address retrieved successfully!";
          }
        }
      )
      .addCase(getUserAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch user address.";
      });

    // Handling updateUserProfile Thunk
    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload; // the payload contains updated user info
        state.error = null;
      })
      .addCase(updateUserProfile.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// 6. Export the Reducer and Actions

export const { openLoginModal, closeLoginModal, updateUserInfo } =
  loginModalSlice.actions;
export default loginModalSlice.reducer;
