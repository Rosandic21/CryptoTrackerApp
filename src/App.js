import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';


function App() {
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
