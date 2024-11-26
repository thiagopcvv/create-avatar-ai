"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { StyledEngineProvider } from "@mui/material";
import { Inter } from "next/font/google";
import { getUser } from "./actions/auth";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const userData = await getUser();
      setLoading(false);

      if (!userData) router.push("/dashboard");
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <html className={inter.className}>
      <body style={{ backgroundColor: "#100f0f" }}>
        <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
      </body>
    </html>
  );
}
