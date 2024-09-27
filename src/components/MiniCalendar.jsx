import React from 'react';

const MiniCalendar = ({ dates }) => {
  return (
    <div>
      <h5>Selected Dates</h5>
      {dates.length > 0 ? (
        <ul className="list-group">
          {dates.map((date, index) => (
            <li className="list-group-item" key={index}>
              {date.toDateString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No dates selected.</p>
      )}
    </div>
  );
};

export default MiniCalendar;
