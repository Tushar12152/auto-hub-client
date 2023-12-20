// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-bXddXOYBBNKfwOhWwcU_iuBQzVxqLUQ",
  authDomain: "simple-firebase1-e476d.firebaseapp.com",
  projectId: "simple-firebase1-e476d",
  storageBucket: "simple-firebase1-e476d.appspot.com",
  messagingSenderId: "743375519819",
  appId: "1:743375519819:web:cfbf91a163dbb5ac250dce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
export default auth