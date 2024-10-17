import { useState } from 'react';

const DiaryModal = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const [foodName, setFoodName] = useState('');
  const [message, setMessage] = useState('');
  const [foodData, setFoodData] = useState(null);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send user data and food name to the backend
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, foodName }),  // Send user and food data
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('User created successfully!');
        setFoodData(data.foodData);  // Display the food data returned from the backend
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Food Diary</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Food Name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}

      {foodData && (
        <div>
          <h3>Results for: {foodData.foods.food[0].food_name}</h3>
          <p>Calories: {foodData.foods.food[0].food_description}</p>
        </div>
      )}
    </div>
  );
};

export default DiaryModal;
