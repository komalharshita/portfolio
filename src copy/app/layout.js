import "./globals.css";
import "./glass.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = {
  title: "Komal Harshita | Data Analyst",
  description: "Portfolio of Komal Harshita Karanakota, an aspiring Data Analyst proficient in SQL, Python, Power BI, and Excel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <Navbar />
        <main className="pt-32 pb-16 min-h-[calc(100vh-200px)]">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
