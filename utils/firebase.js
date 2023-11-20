// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUm3YWC2zbpvmVt0D3JoNlGLIphXAwx8U",
    authDomain: "fritzdata-b2775.firebaseapp.com",
    projectId: "fritzdata-b2775",
    storageBucket: "fritzdata-b2775.appspot.com",
    messagingSenderId: "625531341638",
    appId: "1:625531341638:web:6765bd079c36a922617347"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);