import Footer from "./components/Footer";

export const metadata = {
  title: "AvatarUI",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#100f0f" }}>{children}</body>
      <Footer />
    </html>
  );
}
