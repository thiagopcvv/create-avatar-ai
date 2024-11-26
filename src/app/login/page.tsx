"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Cookies from "js-cookie";
import {
  Box,
  Button,
  Card,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { handleCookie } from "../actions/cookie";
import { useAuthStore } from "../store/useAuthStore";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { motion } from "framer-motion";
import LoginIcon from "@mui/icons-material/Login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setUser } = useAuthStore();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const token = await user.getIdToken();
      Cookies.set("token", token, { secure: true, sameSite: "none" });
      await handleCookie("token", token);
      setUser(user);

      router.push("/dashboard");
    } catch (err) {
      console.log(err);
      setError("Falha no login. Verifique suas credenciais.");
    } finally {
      setLoading(false);
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
            Sign in <br /> Your Account
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
          <Box
            component="form"
            onSubmit={handleLogin}
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
            <Typography
              component="h1"
              sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
            >
              Login <LoginIcon />
            </Typography>
            {error && (
              <Typography variant="body2" color="error" mb={2}>
                {error}
              </Typography>
            )}
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="Senha"
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2, width: "100%" }}
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
