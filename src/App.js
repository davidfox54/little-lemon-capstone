import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import BookingConfirmationPage from './components/BookingConfirmationPage';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/reservations" element={<BookingPage />}></Route>
            <Route path="/reservation-confirmation" element={<BookingConfirmationPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
