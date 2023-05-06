import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeContextProvider from './context/ThemeContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import OrderDashboard from './components/OrderDashboard';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import ToppingManagement from './components/ToppingManagement';
import CustomerInterface from './components/CustomerInterface';
import PieArtistAnalytics from './components/PieArtistAnalytics';
import './styles.css';
import './dark-theme.css';

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <div className="App">
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/orders" element={<OrderDashboard />} />
            <Route path="/analytics" element={<AnalyticsDashboard />} />
            <Route path="/toppings" element={<ToppingManagement />} />
            <Route path="/customer" element={<CustomerInterface />} />
            <Route path="/pie-artist" element={<PieArtistAnalytics />} />
          </Routes>
        </div>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
