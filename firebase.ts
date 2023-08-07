// Import the functions you need from the SDKs you need.
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore }                   from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use.
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
               apiKey: "<KEY>",
           authDomain: "react-ecommerce-9780b.firebaseapp.com",
            projectId: "react-ecommerce-9780b",
        storageBucket: "",
    messagingSenderId: "316245184449",
                appId: "1:316245184449:web",
        measurementId: "${config.measurementId}",
};

// Initialize Firebase.
const app = !getApps() ? initializeApp(firebaseConfig) : getApp();
const db  =  getFirestore(app);

export { db };