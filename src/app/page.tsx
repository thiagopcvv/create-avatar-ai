"use client"

import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const AnimatedBox = dynamic(() => import("./components/AnimationBox"));

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#100f0f",
        textAlign: "center",
      }}
    >
      <AnimatedBox />
    </Box>
  );
}
