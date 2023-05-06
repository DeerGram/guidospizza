import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ToppingManagement.css';

const ToppingManagement = () => {
  const [toppings, setToppings] = useState([]);

  useEffect(() => {
    fetchToppings();
  }, []);

  const fetchToppings = async () => {
    const response = await axios.get('/api/toppings');
    setToppings(response.data);
  };

  return (
    <div className="topping-management">
      <h2>Topping Management</h2>
      <table>
        <thead>
          <tr>
            <th>Topping ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {toppings.map((topping) => (
            <tr key={topping.id}>
              <td>{topping.id}</td>
              <td>{topping.name}</td>
              <td>{topping.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToppingManagement;
