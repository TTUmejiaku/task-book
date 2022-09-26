import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// });

const firebaseConfig = {
  apiKey: "AIzaSyDeFilt6u7MRHxGsOh6Fn5CdVfy9R8SWYg",
  authDomain: "todoauth-development.firebaseapp.com",
  projectId: "todoauth-development",
  storageBucket: "todoauth-development.appspot.com",
  messagingSenderId: "692429035214",
  appId: "1:692429035214:web:3ee1f85f4bbf889f2fa29f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
