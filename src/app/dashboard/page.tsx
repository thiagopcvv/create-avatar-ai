"use client";

import React, { useState } from "react";
import { Box, Grid2, Paper, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import ModalGenerateImg from "../components/ModalGenrate";
import { auth } from "../../../firebaseConfig";
import { getUser } from "../actions/auth";

const card = {
  title: "Gerar Avatar",
  description: "Crie seu avatar personalizado",
  buttonText: "Criar",
  color: "#4682B4",
};

const Dashboard = () => {
  console.log(auth);

  const [visibleModal, setVisibleModal] = useState(false);
  const router = useRouter();

  const handleCreate = async () => {
    const user = await getUser();
    if (user) {
      setVisibleModal(true);
    } else {
      Swal.fire({
        title: "Warning!",
        text: "You need to log in to continue",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "sign in",
        cancelButtonText: "cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login");
        }
      });
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
                    onClick={handleCreate}
                  >
                    {card.buttonText}
                  </Button>
                </Paper>
              </motion.div>
            </Box>
          </Grid2>
        </Box>
      </Box>
      <ModalGenerateImg
        visible={visibleModal}
        handleClose={() => setVisibleModal(false)}
      />
      <Footer />
    </>
  );
};

export default Dashboard;
