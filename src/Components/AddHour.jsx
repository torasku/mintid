import React from "react";
import "../App.css";

const AddHour = ({ onAddHour = f => f }) => {
  return <div className="AddHour-container" onClick={onAddHour} />;
};

export default AddHour;
