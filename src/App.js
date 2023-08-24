import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, {useEffect} from 'react'
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';


function App() {
  useEffect(() => {
    // Redirect to the root route on initial load
    if (window.location.pathname === '/CryptoTrackerApp/') {
      window.location.href = '/';
    }
  }, []);

    return (
      <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
      </Routes>
      </BrowserRouter>
    );
  }
  

export default App;
