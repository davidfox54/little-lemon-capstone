import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ReservationsPage from './components/ReservationsPage';
import ReservationConfirmationPage from './components/ReservationConfirmationPage';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/reservations" element={<ReservationsPage />}></Route>
            <Route path="/reservation-confirmation" element={<ReservationConfirmationPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
