import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-4">Select a Date</h2>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <p className="mt-4">
        Selected Date: {format(startDate, 'MM/dd/yyyy')} {/* Display formatted date */}
      </p>
    </div>
  );
};

export default DatePickerComponent;
