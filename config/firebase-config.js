import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD8nXem7Z00vFPhGhiA50yH8WNctt-Cfjo",
  authDomain: "bwi-farmer-store.firebaseapp.com",
  projectId: "bwi-farmer-store",
  storageBucket: "bwi-farmer-store.appspot.com",
  messagingSenderId: "743390625827",
  appId: "1:743390625827:web:3bbc648577c9412c7a7196",
  measurementId: "G-SFBN9NRZ2T"
};

// Initialize Firebase


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);