"use client";

import React from "react";
import { Box, Grid2, Paper, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const card = {
  title: "Gerar Avatar",
  description: "Crie seu avatar personalizado",
  buttonText: "Criar",
  color: "#4682B4",
};

const Dashboard = () => {
  const { user } = useAuth();
  const router = useRouter();

  const handleGenerateAvatar = () => {
    if (!user) {
      router.push("/login");
    } else {
      console.log("Avatar gerado!");
    }
  };

  return (
    <>
      <Header />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Box sx={{ flexGrow: 1, padding: "2rem" }}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography variant="h4" color="white">
              Dashboard
            </Typography>
          </motion.div>

          <Grid2 container spacing={4} mt={2} sx={{ justifyContent: "center" }}>
            <Box>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 * 0.3, duration: 0.5 }}
              >
                <Paper
                  sx={{
                    padding: "1.5rem",
                    backgroundColor: card.color,
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {card.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ mt: 2, backgroundColor: "white", color: card.color }}
                    onClick={handleGenerateAvatar}
                  >
                    {card.buttonText}
                  </Button>
                </Paper>
              </motion.div>
            </Box>
          </Grid2>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
