import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CustomerInterface.css';

const CustomerInterface = () => {
  const [toppings, setToppings] = useState([]);
  const [selectedToppings, setSelectedToppings] = useState([]);

  useEffect(() => {
    fetchToppings();
  }, []);

  const fetchToppings = async () => {
    const response = await axios.get('/api/toppings');
    setToppings(response.data);
  };

  const handleToppingSelection = (topping) => {
    setSelectedToppings([...selectedToppings, topping]);
  };

  const handleSubmitOrder = async () => {
    // Submit order to backend
  };

  return (
    <div className="customer-interface">
      <h2>Customer Interface</h2>
      <div className="topping-selection">
        {toppings.map((topping) => (
          <button key={topping.id} onClick={() => handleToppingSelection(topping)}>
            {topping.name}
          </button>
        ))}
      </div>
      <button onClick={handleSubmitOrder}>Submit Order</button>
    </div>
  );
};

export default CustomerInterface;
