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
  const newDate = event.target.value;
  setSelectedDate(newDate);
}

function increaseDate() {
  const newDate = new Date(selectedDate);
  newDate.setDate(newDate.getDate() + 1);
  setSelectedDate(newDate.toISOString().split('T')[0]);
}

function decreaseDate() {
  const newDate = new Date(selectedDate);
  newDate.setDate(newDate.getDate() - 1);
  setSelectedDate(newDate.toISOString().split('T')[0]);
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

    <div className="flex flex-row items-center justify-between">

      <h1 className="text-5xl font-bold ml-200px">BiteLog</h1>

      <div className="flex justify-center w-full mr-250px">

        <p>Your food log for:</p>
        <button onClick={decreaseDate} className="mr-2">←</button>
        <input type="date" value={selectedDate} onChange={handleDateChange} />
        <button onClick={increaseDate} className="mr-2">→</button>

      </div>

    </div>
    
    <br/>
    <br/>

    {showModal && <DiaryModal />}

      <Footer />

    </div>
  );
};

export default Page;