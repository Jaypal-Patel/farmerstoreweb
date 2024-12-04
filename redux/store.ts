import { configureStore } from "@reduxjs/toolkit";
import {
  bannersReducer,
  categoriesReducer,
  newArrivalsReducer,
  productDetailsReducer,
  productsExploreReducer,
  productsMade2OrderReducer,
  subCategoriesReducer,
  topHealthRecipesReducer,
  productssxnackReducer,
  subscriptionProductReducer,
} from "./slices/homeSlice";
import {
  productListReducer,
  productListSlice,
  productReviewsReducer,
} from "./slices/productsSlice";
import { accountInfoReducer } from "./slices/accountSlice";
import { ordersReducer } from "./slices/orderSlice";
import flashSaleReducer from "./slices/flashSaleSlice";
import blogReducer from "./slices/blogSlice";
import addressReducer from "./slices/addressSlice";
import pageReducer from "./slices/pageSlice";
import loginModalReducer from "./slices/loginModalSlice";
import wishlistReducer from "./slices/wishlistSlice";
import walletReducer from "./slices/walletSlice";

export const store = configureStore({
  reducer: {
    loginModal: loginModalReducer,
    banners: bannersReducer,
    categories: categoriesReducer,
    newArrivals: newArrivalsReducer,
    productDetails: productDetailsReducer,
    productsExplore: productsExploreReducer,
    made2order: productsMade2OrderReducer,
    subscriptionProduct: subscriptionProductReducer,
    snack: productssxnackReducer,
    healthRecipes: topHealthRecipesReducer,
    productReviews: productReviewsReducer,
    accountInfo: accountInfoReducer,
    subCategories: subCategoriesReducer,
    productsList: productListReducer,
    flashsale: flashSaleReducer,
    orders: ordersReducer,
    addresses: addressReducer,
    blog: blogReducer,
    page: pageReducer,
    wishlist: wishlistReducer,
    wallet: walletReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
