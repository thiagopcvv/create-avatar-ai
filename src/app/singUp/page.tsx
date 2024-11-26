"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Card,
} from "@mui/material";
import { signup } from "../actions/auth";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { motion } from "framer-motion";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

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
    if (result.errors) {
      setErrors(result.errors);
    } else if (result.user) {
      setUser(result.user);
      Swal.fire({
        title: "Welcome!",
        text: `Your account has been created, ${formState.name}!`,
        icon: "success",
        confirmButtonText: "Go to Dashboard",
      });
      router.push("/dashboard");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        background:
          "linear-gradient(115deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)",
        color: "white",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "4rem",
          background:
            "linear-gradient(115deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)",
          backdropFilter: "blur(10px)",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <IconButton
            sx={{
              color: "white",
              backgroundColor: "rgba(255,255,255,0.2)",
              mb: 4,
            }}
            onClick={() => router.push("/dashboard")}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              lineHeight: "1.2",
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
            Create <br /> Your Account
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              opacity: 0.8,
              fontSize: "1.1rem",
            }}
          >
            Join us and experience a personalized and dynamic experience. Fill
            in the details and get started.
          </Typography>
        </motion.div>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "4rem",
          borderTopLeftRadius: "40px",
          borderBottomLeftRadius: "40px",
          background: {
            xs: "linear-gradient(115deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)",
            md: "white",
          },
        }}
      >
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            boxShadow:
              "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
            flexDirection: "column",
            width: "65%",
            padding: 5,
            gap: 10,
          }}
        >
          <Typography
            component="h1"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            <VpnKeyIcon /> Singn Up!
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
          <Box
            component="form"
            onSubmit={handleRegister}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              required
              variant="outlined"
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
              variant="outlined"
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
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                mt: 4,
                width: "100%",
                padding: "15px",
                fontSize: "1rem",
                fontWeight: "bold",
                backgroundColor: "#2575FC",
                transition: "all 0.3s",
                "&:hover": {
                  backgroundColor: "#6A11CB",
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
