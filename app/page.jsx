"use client";

import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <NavBar />
      <main>
        <h1 className="text-3xl font-bold">Hello World</h1>
      </main>
      <Footer />
    </div>
  );
}
