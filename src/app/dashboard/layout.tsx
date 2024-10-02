import Footer from "../components/Footer";
import Header from "../components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />
      <body style={{ backgroundColor: "#100f0f" }}>{children}</body>
      <Footer />
    </html>
  );
}
