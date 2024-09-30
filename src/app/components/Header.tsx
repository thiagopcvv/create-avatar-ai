import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="white">
            Avatar Creator
          </Typography>
          <Link href="/">
            <Button variant="text">Home</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="text">Dashboard</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
