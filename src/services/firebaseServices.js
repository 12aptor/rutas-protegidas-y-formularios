import {
  auth,
  facebookProvider,
  googleAuthProvider,
} from "../lib/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { async } from "@firebase/util";

export const signUpFirebaseWithEmailService = async (user) => {
  const response = await createUserWithEmailAndPassword(
    auth,
    user.email,
    user.password
  );
  return response;
};

export const signInFirebaseWithEmailService = async (user) => {
  const response = await signInWithEmailAndPassword(
    auth,
    user.email,
    user.password
  );
  return response;
};

export const isFirebaseInitilized = () => {
  return new Promise((resolve, reject) => {
    try {
      onAuthStateChanged(auth, (user) => {
        resolve(user);
      });
    } catch {
      reject("La sesión expiró");
    }
  });
};

export const signInFirebaseWithGoogle = async () => {
  const response = await signInWithPopup(auth, googleAuthProvider);
  return response;
};

export const signInFirebaseWithFacebook = async () => {
  const response = await signInWithPopup(auth, facebookProvider);
  return response;
};

export const signOutFirebase = async () => {
  const response = await signOut(auth);
  window.location.href = "/";
  return response;
};

export const isFirebaseAuthenticated = () => {
  return auth.currentUser;
};
