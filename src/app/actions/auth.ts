/* eslint-disable @typescript-eslint/no-explicit-any */
import { SignupFormSchema } from "@/app/lib/definitions";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut as firebaseSignOut,
} from "firebase/auth";
import Swal from "sweetalert2";
import { auth } from "../../../firebaseConfig";
import { getCookie, handleCookie } from "./cookie";
import { cache } from "react";

export const getUser = cache(async () => {
  const session = await getCookie("token");
  if (!session) return null;

  try {
    const user = auth.currentUser;

    return user;
  } catch (error: any) {
    console.log("Failed to fetch user", error);
    return null;
  }
});

export async function signup(formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, { displayName: name });
    const token = await user.getIdToken();
    await handleCookie("token", token);
    console.log("Usuário criado com sucesso:", user);

    return { user };
  } catch (error: any) {
    console.error("Erro ao criar usuário:", error.message);

    Swal.fire({
      title: "Erro!",
      text: error.message,
      icon: "error",
      confirmButtonText: "OK",
    });

    return { success: false, error: error.message };
  }
}

export function logout() {
  firebaseSignOut(auth)
    .then(() => {
      console.log("Usuário deslogado com sucesso.");
      Swal.fire({
        title: "Success!",
        text: `bye-bye!`,
        icon: "success",
        confirmButtonText: "OK",
      });
    })
    .catch((error) => {
      console.error("Erro ao tentar deslogar:", error.message);
      Swal.fire({
        title: "Error!",
        text: `error!`,
        icon: "error",
        confirmButtonText: "OK",
      });
    });
}
