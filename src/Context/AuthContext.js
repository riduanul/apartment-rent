/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import "../firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { useHistory } from "react-router";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const location = useHistory();
  const history = location;

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  //signup function

  async function signup(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    //update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  //login function

  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  //logout function
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }
  //google login
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  }
  //Facebook login
  function facebookLogin() {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    googleLogin,
    facebookLogin,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
