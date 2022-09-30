import { auth } from "../lib/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const authFirebaseWithEmailService = async (user) => {
  const response = await createUserWithEmailAndPassword(
    auth,
    user.email,
    user.password
  );
  return response;
};
