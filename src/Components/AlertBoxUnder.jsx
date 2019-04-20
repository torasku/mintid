import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertBoxUnder = () => {
  return (
    <div className="Alert-container">
      <div className="Alertbox-under">
        <Alert variant="danger">Kanskje jobbe litt overtid snart?</Alert>
      </div>
    </div>
  );
};

export default AlertBoxUnder;
