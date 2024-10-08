"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <h1 className="text-3xl font-bold">Hello World</h1>
      </main>
      <Footer />
    </div>
  );
}
