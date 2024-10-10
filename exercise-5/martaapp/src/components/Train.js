export default function Train({ DELAY, DESTINATION, NEXT_ARR }) {
    const status = DELAY === "T0S" ? "On Time" : "Delayed";
    return (
      <div>
        <h2>Destination: {DESTINATION}</h2>
        <p>Next Arrival: {NEXT_ARR}</p>
        <p>Status: {status}</p>
      </div>
    );
  }
  