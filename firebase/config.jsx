// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ8TpsfYXQkWCQ82sGOPvpFoUsJUM7c68",
  authDomain: "neurasynth-317a6.firebaseapp.com",
  projectId: "neurasynth-317a6",
  storageBucket: "neurasynth-317a6.appspot.com",
  messagingSenderId: "698163760882",
  appId: "1:698163760882:web:cb5873a60faa10f2094a6b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
