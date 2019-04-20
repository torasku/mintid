import React from "react";
import "../App.css";

const WithdrawHour = ({ onWithdrawHour = f => f }) => {
  return <div className="WithdrawHour-container" onClick={onWithdrawHour} />;
};

export default WithdrawHour;
