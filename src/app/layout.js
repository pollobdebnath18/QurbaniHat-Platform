import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata = {
  icons: {
    icon: "/logo.png",
  },
  title: "QurbaniHat Platform",
  description:
    " QurbaniHat Platform - A modern livestock booking platform where users can explore animals for Qurbani and book them securely after authentication.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${openSans.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main>
          {children}
          <ToastContainer />
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
