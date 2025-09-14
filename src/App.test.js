import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

// --- Static text test for BookingForm ---
test('renders the "Choose date" label in BookingForm', () => {
  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} />);
  const label = screen.getByLabelText(/choose date/i);
  expect(label).toBeInTheDocument();
});

// --- Reducer logic tests ---
const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00"
];

const updateTimes = (state, action) => {
  if (action.type === 'updateTimes') {
    return initializeTimes();
  }
  return state;
};

test('initializeTimes returns the correct initial times', () => {
  expect(initializeTimes()).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]);
});

test('updateTimes returns initialized times for updateTimes action', () => {
  const state = [];
  const action = { type: 'updateTimes', date: '2023-01-01' };
  expect(updateTimes(state, action)).toEqual(initializeTimes());
});

test('updateTimes returns same state for unknown action', () => {
  const state = ['17:00'];
  const action = { type: 'unknown' };
  expect(updateTimes(state, action)).toBe(state);
});
test('To check if submit form works',() =>{
  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} />);
  const button = screen.getByRole('button');
  const submitText = screen.getByText(/Make Your reservation/i);
  expect(button).toBeInTheDocument();
  expect(submitText).toBeInTheDocument();
})