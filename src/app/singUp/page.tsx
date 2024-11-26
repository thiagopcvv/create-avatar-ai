"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, TextField, Typography } from "@mui/material";
import { signup } from "../actions/auth";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

interface iErrorsState {
  name?: string[];
  email?: string[];
  password?: string[];
}

export default function SignUp() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<iErrorsState>({
    name: undefined,
    email: undefined,
    password: undefined,
  });
  const { setUser } = useAuthStore();
  const router = useRouter();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleRegister = async (event: any) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("password", formState.password);

    const result = await signup(formData);
    console.log(result.user)
    if (result.errors) {
      setErrors(result.errors);
    } else if (result.user) {
      setUser(result.user);
      console.log("Cadastro realizado com sucesso!");
      Swal.fire({
        title: "Cadastro realizado!",
        text: `Bem-vindo, ${name}!`,
        icon: "success",
        confirmButtonText: "OK",
      });
      router.push("/dashboard");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <Box
        component="form"
        onSubmit={handleRegister}
        sx={{
          padding: "2rem",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" mb={2}>
          Sign Up
        </Typography>
        {errors?.name && (
          <Typography variant="body2" color="error" mb={2}>
            {errors.name.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </Typography>
        )}
        {errors.email && (
          <Typography variant="body2" color="error" mb={2}>
            {errors.email.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </Typography>
        )}
        {errors.password && (
          <Typography variant="body2" color="error" mb={2}>
            {errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </Typography>
        )}
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          label="Password"
          margin="normal"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleInputChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2, width: "100%" }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}
