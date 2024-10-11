// src/components/Train.jsx
import "../index.css"; // Common styles

export default function Train({ TRAIN_ID, DESTINATION, LINE, DELAY }) {
  const status = DELAY === "T0S" ? "On Time" : "Delayed";

  return (
    <div className="train">
      <div className="train-info">
        <h3>Train ID: {TRAIN_ID}</h3>
        <p>Destination: {DESTINATION}</p>
        <p>Line: <span className={`line-${LINE.toLowerCase()}`}>{LINE}</span></p>
        <p>Status: <span className={`status-${status.toLowerCase().replace(" ", "-")}`}>{status}</span></p>
      </div>
    </div>
  );
}
