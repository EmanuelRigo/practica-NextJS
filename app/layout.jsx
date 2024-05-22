import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Mi tienda con nextJS - HomePage",
  description: " Esta es la pagin principal de mi tienda",
  keyword: "tienda, online, ecomerce",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
