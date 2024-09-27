import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [recurrence, setRecurrence] = useState("none");
  const [count, setCount] = useState(1);
  const [recurringDates, setRecurringDates] = useState([]);

  const handleRecurrenceChange = () => {
    const dates = [];
    const selectedDate = new Date(startDate);

    for (let i = 0; i < count; i++) {
      if (recurrence === "daily") {
        selectedDate.setDate(selectedDate.getDate() + 1);
      } else if (recurrence === "weekly") {
        selectedDate.setDate(selectedDate.getDate() + 7);
      } else if (recurrence === "monthly") {
        selectedDate.setMonth(selectedDate.getMonth() + 1);
      } else if (recurrence === "yearly") {
        selectedDate.setFullYear(selectedDate.getFullYear() + 1);
      }

      dates.push(selectedDate.toLocaleDateString());
    }
    
    setRecurringDates(dates);
  };

  return (
    <div className="container">
      <h1>My Date Picker App</h1>
      <div className="date-picker">
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        <select value={recurrence} onChange={(e) => setRecurrence(e.target.value)}>
          <option value="none">None</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          min="1"
          placeholder="How many occurrences?"
        />
        <button className="button" onClick={handleRecurrenceChange}>Get Recurring Dates</button>
      </div>

      <div className="recurring-dates">
        <h4>Recurring Dates:</h4>
        <ul>
          {recurringDates.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
