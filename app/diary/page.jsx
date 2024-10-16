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

    <div className="flex flex-row items-center justify-between border border-black">
      <h1 className="text-5xl font-bold ml-200px">BiteLog</h1>
      <div className="flex justify-center w-full mr-250px">
        <p className = "text-2xl font-bold">Your food log for:</p>
        <button onClick={decreaseDate} className="mr-2">←</button>
        <input type="date" value={selectedDate} onChange={handleDateChange} />
        <button onClick={increaseDate} className="mr-2">→</button>
      </div>
    </div>

    <br/>
    <br/>

    <div className = "flex justify-center items-center w-[800px] h-[60px] p-4 bg-gray-10 border border-black ml-200px">
      <p className = "mr-4"> Total Daily:</p>
      <div className = "grid grid-cols-4 grid-rows-2 w-full max-w-md ">
        <div className = "text-center">Cals</div>
        <div className = "text-center">Protein</div>
        <div className = "text-center">Fat</div>
        <div className = "text-center">Carbs</div>
        <div className = "text-center border border-black">0</div>
        <div className = "text-center border border-black">0g</div>
        <div className = "text-center border border-black">0g</div>
        <div className = "text-center border border-black">0g</div>
      </div>
    </div>

    <br/>
    <br/>

    <hr className="border-t border-black mx-200px" />



    {showModal && <DiaryModal />}

      <Footer />

    </div>
  );
};

export default Page;