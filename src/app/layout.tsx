"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import { getUser } from "./actions/auth";
import { useAuthStore } from "./store/useAuthStore";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const guestOnlyRoutes = ["/login", "/singUp"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, setUser } = useAuthStore();

  useEffect(() => {
    const checkAuth = async () => {
      if (!user) {
        const userData = await getUser();
        if (userData) setUser(userData);
      }

      if (user && guestOnlyRoutes.includes(pathname)) {
        router.push("/dashboard");
      }
    };

    checkAuth();
  }, [router, pathname, user, setUser]);

  return (
    <html className={inter.className}>
      <body style={{ backgroundColor: "#100f0f" }}>{children}</body>
    </html>
  );
}
