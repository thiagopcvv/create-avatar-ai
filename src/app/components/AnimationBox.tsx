"use client";

import { motion } from "framer-motion";
import { Typography, Button } from "@mui/material";
import Link from "next/link";

const AnimatedBox = () => (
  <motion.div
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <Typography variant="h2" component="h1" gutterBottom color="white">
      Welcome to <strong>Create Avatar AI</strong>
    </Typography>
    <Typography variant="body1" component="p" gutterBottom color="white">
      Crie avatares personalizados com inteligência artificial de forma rápida e
      divertida.
    </Typography>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <Link href="/dashboard" passHref>
        <Button variant="contained" color="primary" sx={{ mt: 4 }}>
          Access Dashboard
        </Button>
      </Link>
    </motion.div>
  </motion.div>
);

export default AnimatedBox;
