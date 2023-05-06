import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PieArtistAnalytics.css';

const PieArtistAnalytics = () => {
  const [aggregatedOrderData, setAggregatedOrderData] = useState([]);

  useEffect(() => {
    fetchAggregatedOrderData();
  }, []);

  const fetchAggregatedOrderData = async () => {
    const response = await axios.get('/api/pie-artist-analytics');
    setAggregatedOrderData(response.data);
  };

  return (
    <div className="pie-artist-analytics">
      <h2>Pie Artist Analytics</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Week Ago</th>
            <th>Month Ago</th>
            <th>Year Ago</th>
          </tr>
        </thead>
        <tbody>
          {aggregatedOrderData.map((data) => (
            <tr key={data.date}>
              <td>{data.date}</td>
              <td>{data.weekAgo}</td>
              <td>{data.monthAgo}</td>
              <td>{data.yearAgo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PieArtistAnalytics;
