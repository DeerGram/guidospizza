import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ThemeContextProvider from './contexts/ThemeContext';
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
          <Switch>
            <Route path="/orders" component={OrderDashboard} />
            <Route path="/analytics" component={AnalyticsDashboard} />
            <Route path="/toppings" component={ToppingManagement} />
            <Route path="/customer" component={CustomerInterface} />
            <Route path="/pie-artist" component={PieArtistAnalytics} />
          </Switch>
        </div>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
