import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useFormState } from "react-dom";
import { signup } from "../actions/auth";

export default function SignUp() {
  const [state, action] = useFormState(signup, undefined);

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
        {state?.errors.name && (
          <Typography variant="body2" color="error" mb={2}>
            {state?.errors.name.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </Typography>
        )}
        {state?.errors.email && (
          <Typography variant="body2" color="error" mb={2}>
            {state?.errors.email.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </Typography>
        )}
        {state?.errors.password && (
          <Typography variant="body2" color="error" mb={2}>
            {state?.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </Typography>
        )}
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          type="default"
          id="email"
          required
        />
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          type="email"
          required
        />
        <TextField
          fullWidth
          label="Password"
          margin="normal"
          type="password"
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
