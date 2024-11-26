/* eslint-disable @typescript-eslint/no-explicit-any */
import { SignupFormSchema, } from "@/app/lib/definitions";
import { createUserWithEmailAndPassword, updateProfile, signOut as firebaseSignOut } from "firebase/auth";
import Swal from "sweetalert2";
import { auth } from "../../../firebaseConfig";
import { handleCookie } from "./cookie";
import { redirect } from "next/navigation";


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
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName: name });
    const token = await user.getIdToken();
    await handleCookie("token", token);
    console.log("Usuário criado com sucesso:", user);

    Swal.fire({
      title: "Cadastro realizado!",
      text: `Bem-vindo, ${name}!`,
      icon: "success",
      confirmButtonText: "OK",
    });

    return { user: user };
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

      redirect('/dashboard')
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

