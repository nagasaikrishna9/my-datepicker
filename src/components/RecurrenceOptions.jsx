import React from 'react';

const RecurrenceOptions = ({ recurrence, setRecurrence }) => {
  return (
    <div className="mb-3">
      <h5>Recurrence Options</h5>
      {['daily', 'weekly', 'monthly', 'yearly'].map(option => (
        <div className="form-check" key={option}>
          <input
            type="radio"
            className="form-check-input"
            id={option}
            name="recurrence"
            value={option}
            checked={recurrence === option}
            onChange={() => setRecurrence(option)}
          />
          <label className="form-check-label" htmlFor={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RecurrenceOptions;
