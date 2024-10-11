"use client";

import DiaryModal from "@/components/diary/DiaryModal";
import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import { useState } from "react";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [meals, setMeals] = useState({
    breakfast: "",
    lunch: "",
    dinner: ""
});


  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>Diary</main>
      {showModal && <DiaryModal />}
      <Footer />
    </div>
  );
};

export default Page;