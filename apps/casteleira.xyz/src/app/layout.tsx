import "ui/styles.css";
import "./globals.css";
import { Lora, Poppins, Space_Mono } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const spaceMono = Space_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${lora.variable} ${spaceMono.variable} text-gray-900 bg-gray-100 font-sans`}
    >
      <body>{children}</body>
    </html>
  );
}
