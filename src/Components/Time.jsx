import React from 'react';
import '../App.css';

const Time = (data) => {
  return (
    <div className="Time-container">
      <h1 className="Time-figure">{data.time}</h1>
    </div>
  );
}

export default Time;

