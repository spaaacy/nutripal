import React, { useState } from 'react';

const BreakfastSection = () => {
    const [breakfastItems, setBreakfastItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && inputValue.trim() !== "") {
            setBreakfastItems([...breakfastItems, inputValue]);
            setInputValue("");
        }
    };

    return (
        <div className = "w-[450px] h-[500px]">
            <h2 className = "text-3xl font-bold text-center">Breakfast</h2>
            <div className = "w-[450px] h-[450px] border border-black"> 
                <div className = "flex items-center w-[450px] h-[50px] border border-red-500 grid grid-cols-4 grid-rows-1 w-full max-w-md">
                    <div className = "text-center">Cals</div>
                    <div className = "text-center">Protein</div>
                    <div className = "text-center">Fat</div>
                    <div className = "text-center">Carbs</div>
                </div>
                <div className = "flex justify-center mt-4">
                    <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress = {handleKeyPress}
                    placeholder='Add breakfast item'
                    className ="border border-gray-400 p-2"/>
                </div>
                <div className = "mt-4">
                    {breakfastItems.map((item, index) => (
                        <div key={index} className = "flex justify-between border border-gray-400 p-2">
                            <span>{item}</span>
                            <button onClick={() => setBreakfastItems(breakfastItems.filter((_, i) => i !== index))}>
                                Remove
                            </button>
                        </div>
                    ))}

                </div>

        </div>
        </div>
    );
    




};

export default BreakfastSection;