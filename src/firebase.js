// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `AIzaSyCaNES9lVXEFNSKYB3gPyEX5I_hHHnL1Rc`,
  authDomain: `atmiya-forms.firebaseapp.com`,
  projectId: `atmiya-forms`,
  storageBucket: `atmiya-forms.appspot.com`,
  messagingSenderId: `728218141897`,
  appId: `1:728218141897:web:f8925e7a04a9daf3f3f918`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
