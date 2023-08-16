import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "../components/navigation/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tvoros Skaiciuokle",
  description: "Made by Audrius Ausrotas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
