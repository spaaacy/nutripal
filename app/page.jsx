"use client";

import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import DiaryModal from "@/components/diary/DiaryModal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <NavBar />
        <DiaryModal />
      <main>
        <h1 className="text-3xl font-bold">Hello World</h1>
      </main>
      <Footer />
    </div>
  );
}
