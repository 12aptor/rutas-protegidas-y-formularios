import { auth } from "../lib/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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
