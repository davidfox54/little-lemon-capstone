import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import BookingPage from './components/BookingPage';

test("Renders the Reservations page correctly", () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const submitButton = screen.getByText("Make your reservation");
  expect(submitButton).toBeInTheDocument();
});

test("Guests updated", () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const guestsTotal = screen.getByLabelText(/Number of guests/);
  fireEvent.change(guestsTotal, { target: { value: "5" } });
  expect(guestsTotal.value).toEqual("5");
});

test("Date updated", () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const date = screen.getByLabelText(/Choose date/);
  fireEvent.change(date, { target: { value: "2023-06-15" } });
  expect(date.value).toEqual("2023-06-15");
});

test("Time updated", () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const timeSelection = screen.getByLabelText(/Choose time/);
  fireEvent.change(timeSelection, { target: { value: "19:00" } });
  expect(timeSelection.value).toEqual("19:00");
});
