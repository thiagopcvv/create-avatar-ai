import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Box sx={{ flexGrow: 1, padding: "2rem" }}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="body1" component="p">
            Bem-vindo à Dashboard! Aqui você pode gerenciar os avatares e
            visualizar estatísticas do site.
          </Typography>
          <Box sx={{ marginTop: "2rem" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginRight: "10px" }}
            >
              Gerar Avatar
            </Button>
            <Button variant="contained" color="secondary">
              Ver Relatórios
            </Button>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Dashboard;
