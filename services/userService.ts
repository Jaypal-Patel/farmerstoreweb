"use client"
import { auth, db } from "../config/firebase-config";
import { getCookie } from "cookies-next";

import { collection, getDocs, doc, getDoc, addDoc, setDoc, query, where, QuerySnapshot } from "firebase/firestore";

export const fetchUserData=async(cookieData: any)=>{
    let cookie;
    console.log("cookieData",cookieData);
    
    if (cookieData) {
        cookie = cookieData;
    } else {
        cookie = { value: getCookie('uid') }
    }
    let uid;
    console.log("cookie",cookie);
    // if (auth.currentUser?.uid) {
    //     uid = auth.currentUser?.uid;
    // }
    if (cookie?.value) {
        uid = cookie?.value;
    }
    console.log("uid",uid);

    if (uid) {
        console.log("inside if");
        
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return await JSON.parse(JSON.stringify({ ...docSnap.data(), id: docSnap.id }));
        } else {
            return false;
        }
    } else {
        console.log("inside else");
        return null;
    }
}