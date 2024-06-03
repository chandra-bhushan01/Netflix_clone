// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVNkhXHwr_codgOHFQyns-1niMap1sjWQ",
  authDomain: "netflix-clone-53c64.firebaseapp.com",
  projectId: "netflix-clone-53c64",
  storageBucket: "netflix-clone-53c64.appspot.com",
  messagingSenderId: "180135224224",
  appId: "1:180135224224:web:2538b46dd12024afd23ac5",
  measurementId: "G-8W58F7QB4E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
