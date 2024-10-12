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

function handleDateChange(event) {
  const newDate = event.targer.value;
  setSelectedDate(newDate);
}

function handleMealChange(event) {
  const { name, value } = event.target;
  setMeals(function(prevMeals) {
    return {
      ...prevMeals,
      [name]:value
    };
  });
}

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