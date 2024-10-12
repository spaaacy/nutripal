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
      
      <main>
        <h1>Food Diary</h1>
        <label>
          Select Date:
          <input type="date" value={selectedDate} onChange = {handleDateChange} />
        </label>

        <div>
          <h2>Meals for {selectedDate}</h2>

          <label>
            Breakfast:
            <input
              type = "text"
              name = "breakfast"
              value = {meals.breakfast}
              onChange = {handleMealChange}
              />
          </label>

          <label>
            Lunch:
            <input
              type = "text"
              name = "lunch"
              value = {meals.lunch}
              onChange = {handleMealChange}
            />
          </label>

          <label>
            Dinner:
            <input
              type = "text"
              name = "lunch"
              value = {meals.dinner}
              onChange = {handleMealChange}
            />
          </label>

        </div>
      </main>
      {showModal && <DiaryModal />}
      <Footer />
    </div>


  );
};

export default Page;