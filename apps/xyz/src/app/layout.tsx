import { Lora, Poppins, Space_Mono } from "next/font/google";
import "ui/styles.css";
import "./globals.css";

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
      className={`${poppins.variable} ${lora.variable} ${spaceMono.variable} bg-gray-100 font-sans text-gray-900`}
    >
      <body>{children}</body>
    </html>
  );
}
