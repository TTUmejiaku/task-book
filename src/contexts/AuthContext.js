import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const userAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  async function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  async function resetPassword(email, password) {
    return sendPasswordResetEmail(auth, email, password);
  }

  async function logOut() {
    try {
      await signOut(auth);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  async function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, googleAuthProvider);
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  // After successfully creating the user, setCurrentUser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    signup,
    login,
    logOut,
    errorMessage,
    setErrorMessage,
    successMessage,
    setSuccessMessage,
    googleSignIn,
    resetPassword,
  };

  return (
    <userAuthContext.Provider value={value}>
      {children}
    </userAuthContext.Provider>
  );
};

export default UserAuthContextProvider;
export const useUserAuthContext = () => useContext(userAuthContext);
