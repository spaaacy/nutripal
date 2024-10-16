import localFont from "next/font/local";
import "./globals.css";
import { UserProvider } from "@/context/UserContext";
import Head from "next/head"; 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "NutriPal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <UserProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
      </UserProvider>
    </html>
  );
}
